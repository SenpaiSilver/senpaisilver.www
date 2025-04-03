import pickle
from backend import REDIS

DEFAULT_TTL = 60


def cache(key, ttl=DEFAULT_TTL):
    def decorator(func):
        def wrapper(*args, **kwargs):
            skey = f"{func.__module__}.{func.__name__}"
            if key:
                skey += f":{key}"
            if cached := REDIS.get(skey):
                return pickle.loads(cached)
            call = func(*args, **kwargs)
            REDIS.set(skey, pickle.dumps(call), ex=ttl)
            return call

        return wrapper

    return decorator
