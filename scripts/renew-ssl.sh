#!/bin/bash
# Автоматическое обновление SSL-сертификата
# Добавьте в crontab: 0 3 * * 1 /root/inturkey/scripts/renew-ssl.sh >> /var/log/ssl-renew.log 2>&1

set -e

cd "$(dirname "$0")/.."

echo "[$(date)] Начинаю обновление SSL-сертификата..."

docker compose run --rm certbot renew --quiet

# Перезагрузка nginx для применения нового сертификата
docker compose exec nginx nginx -s reload

echo "[$(date)] SSL-сертификат обновлён успешно."
