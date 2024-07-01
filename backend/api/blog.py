import requests
from flask import Blueprint


bp = Blueprint("blog", __name__, url_prefix="/blog")


@bp.get("/recent")
def get_status():
    recent_posts = []
    resp = requests.get("https://blog.senpaisilver.com/wp-json/wp/v2/posts")
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
                "bgimage": _get_thumbnail(post["_links"]["wp:featuredmedia"][0]["href"]),
            }
        )
    return recent_posts


def _get_thumbnail(href):
    resp = requests.get(href)
    resp.raise_for_status()
    return resp.json().get("guid", {}).get("rendered")
