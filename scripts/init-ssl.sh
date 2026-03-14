#!/bin/bash
# Скрипт первоначальной настройки SSL-сертификата
# Запускается ОДИН раз при первом деплое

set -e

if [ -z "$1" ]; then
  echo "Использование: ./scripts/init-ssl.sh your-domain.ru your@email.com"
  exit 1
fi

DOMAIN=$1
EMAIL=${2:-"admin@$DOMAIN"}

echo "🔐 Получаю SSL-сертификат для $DOMAIN..."
echo "   Email: $EMAIL"
echo ""

# 1. Запускаем с HTTP-only конфигом
echo "1️⃣  Запускаю контейнеры с HTTP-конфигом..."
docker compose -f docker-compose.init-ssl.yml up -d

# Ждём пока nginx стартанёт
sleep 5

# 2. Получаем сертификат
echo "2️⃣  Запрашиваю сертификат у Let's Encrypt..."
docker compose -f docker-compose.init-ssl.yml run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  -d "$DOMAIN" \
  -d "www.$DOMAIN"

# 3. Останавливаем временные контейнеры
echo "3️⃣  Останавливаю временные контейнеры..."
docker compose -f docker-compose.init-ssl.yml down

# 4. Запускаем основной compose с SSL
echo "4️⃣  Запускаю продакшн с SSL..."
docker compose up -d

echo ""
echo "✅ SSL-сертификат установлен!"
echo "   Сайт доступен по: https://$DOMAIN"
echo ""
echo "📋 Не забудьте добавить автообновление в crontab:"
echo "   crontab -e"
echo "   0 3 * * 1 $PWD/scripts/renew-ssl.sh >> /var/log/ssl-renew.log 2>&1"
