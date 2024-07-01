from time import time
from flask import current_app
import requests
from backend.client.oauth import OAuthClient

import logging

logger = logging.getLogger(__name__)


class YouTubeClient:
    base_url = "https://youtube.googleapis.com/youtube"
    api_version = "v3"

    def __init__(self):
        conf = current_app.config.get("YOUTUBE")
        self.api_key = conf.get("api_key")

    def get(self, action, parts, **params):
        return self._request(requests.get, action, parts, **params)

    def _request(
        self,
        method,
        action,
        part,
        max_results=10,
        with_pagination=False,
        **params,
    ):
        url = f"{self.base_url}/{self.api_version}/{action}"
        params["part"] = part
        params["key"] = self.api_key
        if "maxResults" not in params:
            params["maxResults"] = max_results
        start = time()
        response = method(url, params=params, headers=self.headers)
        elapsed = (time() - start) * 1000
        logger.info(
            "%s %s (%d) in %.0fms",
            method.__name__.upper(),
            url,
            response.status_code,
            elapsed,
        )
        response.raise_for_status()
        if with_pagination:

            def paginate(data, method, url, params):
                yield data["items"]
                while data.get("nextPageToken") is not None:
                    params["pageToken"] = data["nextPageToken"]
                    start = time()
                    resp = method(url, params)
                    elapsed = (time() - start) * 1000
                    logger.info(
                        "%s %s (%d) in %.0fms",
                        method.__name__.upper(),
                        url.split("?")[0],
                        response.status_code,
                        elapsed,
                    )
                    resp.raise_for_status()
                    data = resp.json()
                    yield data["items"]
                yield data["items"]

            return paginate(response.json(), method, url, params)
        return response.json()

    @property
    def headers(self):
        return {"Accept": "application/json"}
