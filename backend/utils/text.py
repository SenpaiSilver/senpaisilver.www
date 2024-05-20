import json


def pretty_json(obj):
    return json.dumps(obj, indent=2, sort_keys=True, default=str)
