from flask import Blueprint, url_for


def BlueprintPath(name, module):
    return Blueprint(name, name, url_prefix=url_for(".", module))
