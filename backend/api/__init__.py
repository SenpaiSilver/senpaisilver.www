import os
import sys
import importlib.util

from flask import Blueprint

from utils.modules import crawl_modules


api_folder = os.path.dirname(__file__)
bp = Blueprint("api", __name__, url_prefix="/api")
for module in crawl_modules(api_folder, os.path.dirname(api_folder)):
    name = module.replace(os.path.sep, ".")[:-3]
    spec = importlib.util.spec_from_file_location(name, module)
    package = importlib.util.module_from_spec(spec)
    sys.modules[name] = package
    spec.loader.exec_module(package)
    if hasattr(package, "bp"):
        bp.register_blueprint(package.bp)
