import logging

from . import AbstractClient

logger = logging.getLogger(__name__)


class TwitchClient(metaclass=AbstractClient):
    def __init__(self, account: str):
        print(account)
        logger.debug("Initiliazing TwitchClient with config tokens")
