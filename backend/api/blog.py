import pickle
import requests
from flask import Blueprint, request

from backend import REDIS


bp = Blueprint("blog", __name__, url_prefix="/blog")
EXPIRE_RECENT = 60 * 3600


@bp.get("/recent")
def get_status():
    recent_posts = []
    params = {
        "page": max(int(request.args.get("page", "1")), 1),
        "per_page": min(max(int(request.args.get("per_page", "16")), 0), 100),
    }
    redis_key = "senpaisilver_blog_recent_" + ":".join(
        str(v) for v in params.values())
    if cached := REDIS.get(redis_key):
        return pickle.loads(cached)
    resp = requests.get(
        "https://blog.senpaisilver.com/wp-json/wp/v2/posts", params=params
    )
    resp.raise_for_status()
    for post in resp.json():
        recent_posts.append(
            {
                "id": post["id"],
                "link": post["link"],
                "title": post["title"]["rendered"],
                "excerpt": post["excerpt"]["rendered"],
                "ctime": post["date_gmt"],
                "mtime": post["modified_gmt"],
                "bg_image": _get_thumbnail(
                    post["_links"]["wp:featuredmedia"][0]["href"]
                ),
            }
        )
    REDIS.set(redis_key, pickle.dumps(recent_posts), ex=EXPIRE_RECENT)
    return recent_posts


def _get_thumbnail(href):
    resp = requests.get(href)
    resp.raise_for_status()
    return resp.json().get("guid", {}).get("rendered")
