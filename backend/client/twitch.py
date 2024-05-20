from datetime import datetime, timedelta
from urllib import parse
from time import time
import requests
from flask import current_app, session

import logging

logger = logging.getLogger(__name__)


class TwitchClient:
    base_url = "https://api.twitch.tv/helix"
    expiration = datetime.now()
    redirect_uri = None
    access_token = None
    refresh_token = None
    token_type = None
    client_id = None
    code = None

    def __init__(self, code=None, refresh_token=None):
        logger.setLevel(logging.DEBUG)
        self.code = code
        self.refresh_token = refresh_token or session.get("twitch", {}).get("refresh_token")
        self.refresh(code)

    def refresh(self, code=None):
        logger.info("Refreshing tokens")
        self.code = code
        tokens = self._authenticate()
        self.expiration = tokens.get("expiration")
        self.access_token = tokens.get("access_token")
        self.refresh_token = tokens.get("refresh_token")
        self.token_type = tokens.get("token_type")

    def get(self, action, **kwargs):
        return self._request(requests.get, action, **kwargs)

    def post(self, action, **kwargs):
        return self._request(requests.post, action, **kwargs)

    @property
    def is_expired(self):
        return self.expiration is None or self.expiration < datetime.now()

    @property
    def headers(self):
        return {
            "Authorization": f"Bearer {self.access_token}",
            "Client-Id": self.client_id,
        }

    def _request(self, method, action, **kwargs):
        if self.is_expired:
            self.refresh()
        url = f"{self.base_url}/{action}"
        start = time()
        response = method(url, params=kwargs, headers=self.headers)
        elapsed = (time() - start) * 1000
        logger.info(
            "%s %s (%d) in %.0fms",
            method.__name__.upper(),
            url,
            response.status_code,
            elapsed,
        )
        response.raise_for_status()
        if "application/json" in response.headers.get("Content-Type"):
            response_json = response.json()
            # meta = {"pagination": response_json.get("pagination"),
            #         "total": response_json.get("total",
            #                                    len(response_json["data"])),}
            # if "data" in response_json:
            #     response_json = response_json["data"]
            # return response_json, meta
            return response_json
        return response

    def _authenticate(self):
        conf = current_app.config.get("TWITCH")
        self.client_id = conf.get("client_id")
        self.redirect_uri = conf.get("redirect_uri")
        secret = conf.get("secret")
        params = {
            "client_id": self.client_id,
            "client_secret": secret,
            "grant_type": "client_credentials",
        }
        if self.refresh_token:
            params["grant_type"] = "refresh_token"
            params["refresh_token"] = self.refresh_token
        elif self.code:
            params["grant_type"] = "authorization_code"
            params["code"] = self.code
            params["redirect_uri"] = conf.get("redirect_uri")
        response = requests.post(
            "https://id.twitch.tv/oauth2/token", params=params
        )
        response.raise_for_status()
        access = response.json()
        expiration = datetime.now() + timedelta(
            seconds=access["expires_in"] - 1
        )
        tokens = {
            "expiration": expiration,
            "access_token": access.get("access_token"),
            "refresh_token": access.get("refresh_token"),
            "token_type": access.get("token_type"),
        }
        if self.code:
            session["twitch"] = {
                "code": self.code, **tokens
            }
        return tokens


client: TwitchClient = None


def get_client() -> TwitchClient:
    if client is None:
        client = TwitchClient()
    elif client.is_expired:
        client.refresh()
    return client


def oauth_url() -> str:
    # https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#get-the-user-to-authorize-your-app
    # https://dev.twitch.tv/docs/authentication/scopes/
    conf = current_app.config.get("TWITCH")
    scope = conf.get("scope")
    client_id = conf.get("client_id")
    redirect_uri = conf.get("redirect_uri")
    qs = parse.urlencode(
        {
            "response_type": "code",
            "client_id": client_id,
            "redirect_uri": redirect_uri,
            "scope": " ".join(scope),
            # "force_verify": "true",
            # "state": "",
        }
    )
    return f"https://id.twitch.tv/oauth2/authorize?{qs}"
