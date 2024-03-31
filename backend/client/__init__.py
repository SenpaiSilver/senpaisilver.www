class AbstractClient(type):
    _instances = {}

    # This only handles cases for one account, for multi token try something else
    def __call__(cls, account, *args, **kwargs):
        key = "/".join((cls.__name__, str(hash(cls)), account))
        if key not in cls._instances:
            cls._instances[key] = super(AbstractClient, cls).__call__(
                account=account, *args, **kwargs
            )
        return cls._instances[key]
