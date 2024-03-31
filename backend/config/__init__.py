import os
import yaml


CONFIG_FOLDER = os.path.join(os.path.dirname(globals()['__file__']))
CONFIG_DEFAULTS = os.path.join(CONFIG_FOLDER, "config.defaults.yml")
CONFIG_MAIN = os.path.join(CONFIG_FOLDER, "config.yml")
CONFIG_TEST = os.path.join(CONFIG_FOLDER, "config.testing.yml")
config_env = [CONFIG_DEFAULTS]
if os.environ.get("testing"):
    config_env.append(CONFIG_TEST)
else:
    config_env.append(CONFIG_MAIN)

configuration = {}
for config in config_env:
    if os.path.exists(CONFIG_MAIN):
        with open(CONFIG_MAIN) as fd:
            parsed = yaml.safe_load(fd)
            if parsed:
                configuration.update(parsed)


__all__ = ["configuration"]
