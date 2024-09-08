import os
import sys
from flask import Flask
import mongoengine
import redis
import logging

# from config import configuration
REDIS: redis.Redis = None
logger = None


def create_app(test_config=None, debug=False):
    app = Flask(__name__, instance_relative_config=False)
    # app.config.from_mapping()

    if not debug:
        debug = os.environ.get("DEBUG", "0") != "0"
    app.config.from_pyfile("config/config.defaults.py")
    if test_config is None:
        app.config.from_pyfile("config/config.py", silent=True)
    else:
        app.config.from_pyfile("config/config.test.py")

    app.secret_key = app.config.get("SECRET_KEY")
    logging.basicConfig(
        filename=os.path.join(app.config.get('LOGS'), "app.log"),
        filemode="a",
        format="%(asctime)s,%(msecs)d %(name)s " "%(levelname)s %(message)s",
        datefmt="%H:%M:%S",
        level=logging.DEBUG if debug else logging.INFO,
    )
    logging.getLogger().addHandler(logging.StreamHandler())
    logger = logging.getLogger(__name__)
    logger.info("Got %d configuration keys", len(app.config.keys()))
    # connect_mongodb(app.config.get("MONGODB"))
    connect_redis()

    from . import api

    app.register_blueprint(api.bp)

    return app


def connect_mongodb(mongodb_conf):
    mongoengine.connect(host=mongodb_conf["host"])


def connect_redis():
    global REDIS
    REDIS = redis.Redis.from_url(
        os.getenv("REDIS_URL", "redis://localhost:6379"))
