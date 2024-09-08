from flask import Blueprint


bp = Blueprint("monitoring", __name__, url_prefix="/monitoring")


@bp.get("/heartbeat")
def heartbeat():
    return "<3"
