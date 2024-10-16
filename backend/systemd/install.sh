#!/bin/bash

if [[ -d "${INSTALL_OPT_PATH}" ]]; then
    echo INSTALL_OPT_PATH is not set
    exit 1
fi

START_SCRIPT_PATH="${INSTALL_OPT_PATH}/start.sh"
STOP_SCRIPT_PATH="${INSTALL_OPT_PATH}/stop.sh"

cat << EOF > $START_SCRIPT_PATH
#!/bin/bash

cd "$(pwd)"
docker compose up -D
EOF
chmod 770 start.sh

cat << EOF > $STOP_SCRIPT_PATH
#!/bin/bash

cd "$(pwd)"
docker compose down
EOF
chmod 770 stop.sh

SERVICE=/etc/systemd/system/senpaisilver-www-backend.service
cat << EOF > $SERVICE
[Unit]
Description=SenpaiSilver.www Backend
After=network.target

[Service]
Type=forking
User=senpaisilver
Group=senpaisilver

ExecStart=$START_SCRIPT_PATH
ExecStop=$STOP_SCRIPT_PATH

[Install]
WantedBy=multi-user.target
EOF
chown root:root $SERVICE
chmod +x $SERVICE
