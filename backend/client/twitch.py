import logging

from . import AbstractClient

logger = logging.getLogger(__name__)


class TwitchClient(metaclass=AbstractClient):
    def __int__(self):
        logger.debug("Initiliazing TwitchClient with config tokens")
