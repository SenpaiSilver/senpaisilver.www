fakecache = {}

def cache(key):
    def decorator(func):
        def wrapper(*args, **kwargs):
            skey = f"{func.__module__}.{func.__name__}"
            if key:
                skey += f":{key}"
            if skey in fakecache:
                print(f"We hit cache on {skey}")
                return fakecache[skey]
            call = func(*args, **kwargs)
            fakecache[skey] = call
            return call
        return wrapper
    return decorator


def store(key):
    pass


def purge(key):
    pass
