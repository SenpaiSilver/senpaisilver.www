from flask import Blueprint


bp = Blueprint("youtube", __name__, url_prefix="/youtube")


@bp.get("/status")
def get_status():
    return "ok"


# @bp.get("/uploads")
# def get_uploads():
#     return []
