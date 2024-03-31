import os


def crawl_modules(path, relative_to=None):
    modules = [m for m in os.listdir(path) if not m.startswith("_")]
    for module in modules:
        full_path = os.path.join(path, module)
        init_exists = os.path.exists(os.path.join(path, "__init__.py"))
        if os.path.isfile(full_path) and init_exists:
            if module.endswith(".py"):
                if relative_to is not None:
                    full_path = os.path.relpath(full_path, relative_to)
                yield full_path
        else:
            yield from crawl_modules(full_path, relative_to)
