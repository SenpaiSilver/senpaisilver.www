from flask import Blueprint
from .blog import bp as blog_bp
from .monitoring import bp as monitoring_bp
from .twitch import bp as twitch_bp
# from .youtube import bp as youtube_bp


bp = Blueprint("api", __name__, url_prefix="/api")

blueprints = [
    blog_bp,
    monitoring_bp,
    twitch_bp,
    # youtube_bp,
]
for bp_module in blueprints:
    bp.register_blueprint(bp_module)
