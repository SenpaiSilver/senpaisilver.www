from flask import Blueprint

# from backend.client.youtube import YouTubeClient
from backend.client.youtube import YouTubeClient


bp = Blueprint("youtube", __name__, url_prefix="/youtube")


@bp.get("/status")
def get_status():
    client = YouTubeClient()
    resp = client.get(
        "channels",
        "snippet,contentDetails,statistics",
        id=["UCWFg7vgAj8tRPaPXJE-dBaw", "UCp2IJuweEbEvxVq6fGDejqw"],
        max_results=10,
    )
    # resp = client.channel_list("UCWFg7vgAj8tRPaPXJE-dBaw")
    return resp


@bp.get("/uploads")
def get_uploads():
    client = YouTubeClient()
    resp = client.get(
        "search",
        "snippet,id",
        channelId="UCWFg7vgAj8tRPaPXJE-dBaw",
        max_results=50,
        type="video",
        # type="playlist",
        # order="date",
        # order="viewCount",
        # order="videoCount",
        with_pagination=True,
    )
    data = []
    for e in resp:
        data.extend(e)
    return data


@bp.get("/live")
def get_live():
    client = YouTubeClient()
    resp = client.get(
        "search",
        "snippet,id",
        channelId="UCWFg7vgAj8tRPaPXJE-dBaw",
        max_results=10,
        # eventType="upcoming",
        # eventType="completed",
        eventType="live",
        # type="playlist",
        order="date",
        # order="viewCount",
        # order="videoCount",
        with_pagination=True,
    )
    # resp = client.channel_list("UCWFg7vgAj8tRPaPXJE-dBaw")
    data = []
    for e in resp:
        data.extend(e)
    return data


@bp.get("/playlist")
def get_playlists():
    client = YouTubeClient()
    resp = client.get(
        "search",
        "snippet,id",
        channelId="UCWFg7vgAj8tRPaPXJE-dBaw",
        max_results=10,
        type="playlist",
        order="date",
        with_pagination=True,
    )
    data = []
    for e in resp:
        data.extend(e)
    return data
