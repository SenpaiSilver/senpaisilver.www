from flask import Blueprint

from client.twitch import TwitchClient


bp = Blueprint("twitch", __name__, url_prefix="/twitch")


@bp.get("/status")
def get_status():
    client = TwitchClient()
    return "ok"


# @bp.get("/clips")
# def get_clips():
#     return []


# @bp.get("/archives")
# def get_archives():
#     return []


# @bp.get("/highlights")
# def get_highlights():
#     return []
