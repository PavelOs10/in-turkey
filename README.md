# InTurkey — Лендинг производства свитеров

Полноценный продакшн-проект: React (Vite) фронтенд + Node.js бэкенд + Telegram-уведомления + Docker + Nginx + Let's Encrypt SSL + GitHub Actions CI/CD.

---

## Архитектура

```
┌─────────────┐      ┌──────────────┐      ┌─────────────────┐
│   Браузер   │─────▶│  Nginx :443  │─────▶│  Frontend :80   │
│             │      │  (SSL proxy) │      │  (Vite build)   │
└─────────────┘      │              │      └─────────────────┘
                     │   /api/* ──────────▶┌─────────────────┐
                     │              │      │  Backend :3000   │
                     └──────────────┘      │  (Express)       │
                                           │       │          │
                                           │       ▼          │
                                           │  Telegram API    │
                                           └─────────────────┘
```

## Структура проекта

```
inturkey/
├── frontend/              # React + Vite + Tailwind
│   ├── src/
│   │   ├── app/components/  # Секции лендинга
│   │   ├── assets/          # Изображения
│   │   └── styles/          # CSS
│   ├── Dockerfile
│   └── nginx.conf
├── backend/               # Express + Telegram Bot
│   ├── server.js
│   └── Dockerfile
├── nginx/                 # Reverse proxy configs
│   ├── default.conf.template      # Основной (с SSL)
│   └── init-ssl.conf.template     # Для первичного получения сертификата
├── scripts/
│   ├── init-ssl.sh        # Первоначальная настройка SSL
│   └── renew-ssl.sh       # Автообновление сертификата
├── .github/workflows/
│   └── deploy.yml         # CI/CD — автодеплой при push в main
├── docker-compose.yml               # Продакшн
├── docker-compose.init-ssl.yml      # Первичная настройка SSL
├── .env.example
└── README.md
```

---

## Пошаговая инструкция по запуску

### 1. Подготовка Telegram-бота

1. Откройте [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте `/newbot` и следуйте инструкциям
3. Скопируйте **токен бота** (вида `123456789:ABCdef...`)
4. Напишите боту `/start` в личные сообщения
5. Откройте в браузере:
   ```
   https://api.telegram.org/bot8223979672:AAHpC_MzpjUWHoC6BW0hlF0xaKYdeiR8mXU/getUpdates
   ```
6. Найдите в ответе `"chat":{"id": XXXXXXXX}` — это ваш **Chat ID**

> Если хотите получать уведомления в группу — добавьте бота в группу, напишите в неё что-нибудь, и повторите шаг 5. Chat ID группы будет отрицательным числом.

### 2. Покупка домена на Рег.ру

1. Зайдите на [reg.ru](https://reg.ru) и купите домен
2. В панели управления доменом настройте **DNS-записи**:
   ```
   A    @       →  IP_ВАШЕГО_VPS
   A    www     →  IP_ВАШЕГО_VPS
   ```
3. Подождите 5–15 минут для распространения DNS

### 3. Подготовка VPS-сервера

Минимальные требования: Ubuntu 22.04+, 1 CPU, 1 GB RAM, 10 GB диска.

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# Установка Docker Compose (входит в Docker Engine)
docker compose version

# Установка Git
sudo apt install -y git

# Перелогиньтесь для применения группы docker

# ...зайдите заново
```

### 4. Клонирование и настройка

```bash
# Клонируйте репозиторий
cd ~
git clone https://github.com/ВАШ_ПОЛЬЗОВАТЕЛЬ/inturkey.git
cd inturkey

# Создайте .env файл
cp .env.example .env
nano .env
```

Заполните `.env`:

```env
DOMAIN=your-domain.ru
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
TELEGRAM_CHAT_ID=123456789
```

### 5. Первый запуск + SSL

```bash
# Сделайте скрипты исполняемыми
chmod +x scripts/*.sh

# Запустите получение SSL-сертификата
./scripts/init-ssl.sh in-turkey.ru osiov25@yandex.ru
```

Скрипт автоматически:
1. Соберёт Docker-образы
2. Запустит HTTP-сервер для проверки домена
3. Получит SSL-сертификат от Let's Encrypt
4. Перезапустит всё с HTTPS

### 6. Автообновление SSL-сертификата

```bash
# Откройте crontab
crontab -e

# Добавьте строку (обновление каждый понедельник в 3:00)
0 3 * * 1 /root/inturkey/scripts/renew-ssl.sh >> /var/log/ssl-renew.log 2>&1
```

### 7. Настройка GitHub Actions (автодеплой)

В репозитории на GitHub: **Settings → Secrets and variables → Actions → New repository secret**

Добавьте следующие секреты:

| Секрет | Значение |
|--------|---------|
| `VPS_HOST` | IP-адрес вашего VPS |
| `VPS_USER` | Пользователь SSH (например `root`) |
| `VPS_SSH_KEY` | Приватный SSH-ключ (содержимое `~/.ssh/id_rsa`) |
| `VPS_PORT` | Порт SSH (обычно `22`) |
| `DOMAIN` | Ваш домен (например `inturkey.ru`) |
| `TELEGRAM_BOT_TOKEN` | Токен бота |
| `TELEGRAM_CHAT_ID` | Chat ID для уведомлений |

**Генерация SSH-ключа для деплоя:**

```bash
# На вашем компьютере (НЕ на VPS)
ssh-keygen -t ed25519 -C "deploy" -f ~/.ssh/deploy_key

# Скопируйте публичный ключ на VPS
ssh-copy-id -i ~/.ssh/deploy_key.pub user@IP_VPS

# Содержимое ~/.ssh/deploy_key вставьте в секрет VPS_SSH_KEY
cat ~/.ssh/deploy_key
```

Теперь при каждом `git push` в ветку `main` — сайт автоматически пересобирается и деплоится.

---

## Локальная разработка

```bash
# Установите зависимости
cd frontend && npm install && cd ..
cd backend && npm install && cd ..

# Создайте .env в корне
cp .env.example .env
# Заполните TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID

# Запустите бэкенд (терминал 1)
cd backend
TELEGRAM_BOT_TOKEN=xxx TELEGRAM_CHAT_ID=xxx npm run dev

# Запустите фронтенд (терминал 2)
cd frontend
npm run dev
```

Фронтенд: http://localhost:5173  
Бэкенд API: http://localhost:3000  
Vite автоматически проксирует `/api/*` на бэкенд.

---

## Полезные команды на VPS

```bash
# Просмотр логов
docker compose logs -f
docker compose logs -f backend
docker compose logs -f nginx

# Перезапуск
docker compose restart

# Пересборка и запуск
docker compose up -d --build

# Остановка
docker compose down

# Проверка статуса
docker compose ps

# Проверка здоровья бэкенда
curl https://your-domain.ru/api/health
```

---

## Безопасность

- HTTPS обязателен (HTTP редиректится на HTTPS)
- Security-заголовки: HSTS, X-Frame-Options, X-Content-Type-Options
- Rate limiting на API: 5 запросов/мин с одного IP
- Входящие данные валидируются на бэкенде
- HTML-символы экранируются перед отправкой в Telegram
- Docker-контейнеры запускаются от непривилегированного пользователя
