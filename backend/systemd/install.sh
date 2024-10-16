#!/bin/bash

if [[ -z "${1}" ]]; then
    echo Install path must be provided
    exit 1
fi

INSTALL_OPT_PATH=$1
echo Install scripts to ${INSTALL_OPT_PATH}

START_SCRIPT_PATH="${INSTALL_OPT_PATH}/start.sh"
STOP_SCRIPT_PATH="${INSTALL_OPT_PATH}/stop.sh"

cat << EOF > "${START_SCRIPT_PATH}"
#!/bin/bash

cd "$(pwd)"
docker compose up -D
EOF

cat << EOF > "${STOP_SCRIPT_PATH}"
#!/bin/bash

cd "$(pwd)"
docker compose down
EOF

SERVICE="${INSTALL_OPT_PATH}/senpaisilver-www-backend.service"
cat << EOF > "${SERVICE}"
[Unit]
Description=SenpaiSilver.www Backend
After=network.target

[Service]
Type=forking
User=senpaisilver
Group=senpaisilver

ExecStart=${START_SCRIPT_PATH}
ExecStop=${STOP_SCRIPT_PATH}

[Install]
WantedBy=multi-user.target
EOF

chown root:root "${SERVICE}"
chmod -v 770 "${START_SCRIPT_PATH}" "${STOP_SCRIPT_PATH}"
ln -s "${SERVICE}" /etc/systemd/system/senpaisilver-www-backend.service
chmod -v +x "${SERVICE}"
sudo systemctl enable senpaisilver-www-backend
