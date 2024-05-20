from flask import Blueprint

from backend.client.twitch import TwitchClient

# from client.twitch import TwitchClient


bp = Blueprint("twitch", __name__, url_prefix="/twitch")


@bp.get("/status")
def get_status():
    client = TwitchClient()
    user = client.get("users", login="senpaisilver")["data"][0]
    broadcaster = client.get("channels", broadcaster_id=user["id"])["data"][
        0
    ]
    return broadcaster


# @bp.get("/clips")
# def get_clips():
#     return []


# @bp.get("/archives")
# def get_archives():
#     return []


# @bp.get("/highlights")
# def get_highlights():
#     return []
