INSTALL_OPT_PATH=/opt/senpaisilver/www/systemd/

install:
	sudo mkdir -p $(INSTALL_OPT_PATH)
	export INSTALL_OPT_PATH=$(INSTALL_OPT_PATH)
	./systemd/install.sh

start:
	docker compose up --build

deamon:
	docker compose up -d --build

stop:
	docker compose down
