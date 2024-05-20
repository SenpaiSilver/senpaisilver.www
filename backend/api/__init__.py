from flask import Blueprint
from .monitoring import bp as monitoring_bp
from .twitch import bp as twitch_bp


bp = Blueprint("api", __name__, url_prefix="/api")

blueprints = [
    monitoring_bp,
    twitch_bp,
]
for bp_module in blueprints:
    bp.register_blueprint(bp_module)
