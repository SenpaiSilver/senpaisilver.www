import logging

from flask import Flask

from config import configuration


logger = logging.getLogger(__name__)
logger.setLevel("DEBUG")


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping()

    if test_config is None:
        app.config.from_pyfile("config/config.py", silent=True)
    else:
        app.config.from_pyfile("config/config.test.py")

    from . import api

    app.register_blueprint(api.bp)

    return app
