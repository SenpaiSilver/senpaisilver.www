from flask import Blueprint

from backend.client.twitch import TwitchClient
from backend.utils.cache import cache


bp = Blueprint("twitch", __name__, url_prefix="/twitch")


@bp.get("/status")
@cache("twitch_status")
def get_status():
    client = TwitchClient()
    user = client.get("users", login="senpaisilver")[0]
    broadcaster = client.get("channels", broadcaster_id=user["id"])[0]
    return broadcaster


@bp.get("/clips")
def get_clips():
    client = TwitchClient()
    user = client.get_user("senpaisilver")
    clips_generator = client.get(
        "clips", with_pagination=True, first=100, broadcaster_id=user["id"]
    )
    clips = []
    for e in clips_generator:
        clips.extend(e)
    clips.sort(key=lambda x: x["created_at"])
    clips = list(reversed(clips))
    return clips
