INSTALL_OPT_PATH=/opt/senpaisilver/www/systemd/

install:
	sudo mkdir -p $(INSTALL_OPT_PATH)
	sudo ./systemd/install.sh $(INSTALL_OPT_PATH)

uninstall:
	sudo systemctl enable senpaisilver-www-backend
	sudo rm -f /etc/systemd/system/multi-user.target.wants/senpaisilver-www-backend.service

start:
	docker compose up --build

deamon:
	docker compose up -d --build

stop:
	docker compose down
