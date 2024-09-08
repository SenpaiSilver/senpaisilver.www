from flask import Blueprint

from backend.client.twitch import TwitchClient
from backend.utils.cache import cache


bp = Blueprint("twitch", __name__, url_prefix="/twitch")
EXPIRE_STATUS = 5 * 60


@bp.get("/status")
@cache("twitch_status", EXPIRE_STATUS)
def get_status():
    client = TwitchClient()
    user = client.get("users", login="senpaisilver")[0]
    broadcaster = client.get("channels", broadcaster_id=user["id"])[0]
    stream = next(
        iter(client.get("streams", user_id=user["id"]).get("data", [])), {}
    )
    broadcaster["stream"] = {
        "is_live": stream.get("type") == "live",
        "viewer_count": stream.get("viewer_count", 0),
        "started_at": stream.get("started_at"),
        "game_id": stream.get("game_id"),
        "game_name": stream.get("game_name"),
        "thumbnail_url": stream.get("thumbnail_url"),
        "language": stream.get("language"),
        "tags": stream.get("tags", []),
        "is_mature": stream.get("is_mature", False),
    }
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
