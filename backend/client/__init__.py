class AbstractClient(type):
    _instances = {}

    # This only handles cases for one account, for multi token try something else
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(AbstractClient, cls).__call__(
                *args, **kwargs
            )
        return super().__call__(*args, **kwargs)
