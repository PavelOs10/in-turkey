import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = process.env.PORT || 3000;

// ─── ENV ────────────────────────────────────────────────────────────
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error("⚠️  TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID обязательны!");
  console.error("   Задайте их в .env или в переменных окружения.");
  process.exit(1);
}

// ─── MIDDLEWARE ──────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json({ limit: "16kb" }));

// Rate-limit для API заявок: max 5 в минуту с одного IP
const leadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Слишком много запросов. Попробуйте через минуту." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── TELEGRAM HELPER ────────────────────────────────────────────────
async function sendTelegramMessage(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API error ${res.status}: ${body}`);
  }

  return res.json();
}

// ─── ROUTES ─────────────────────────────────────────────────────────

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Lead submission
app.post("/api/lead", leadLimiter, async (req, res) => {
  try {
    const { name, brand, volume, contact } = req.body;

    // Validation
    if (!name || !brand || !volume || !contact) {
      return res.status(400).json({ error: "Все поля обязательны для заполнения." });
    }

    if (name.length > 200 || brand.length > 200 || contact.length > 200) {
      return res.status(400).json({ error: "Слишком длинное значение поля." });
    }

    const allowedVolumes = ["300-500", "500-1000", "1000-5000", "5000+"];
    if (!allowedVolumes.includes(volume)) {
      return res.status(400).json({ error: "Некорректный объём заказа." });
    }

    // Format message
    const now = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
    const message = [
      "🔔 <b>Новая заявка с сайта InTurkey</b>",
      "",
      `👤 <b>Имя:</b> ${escapeHtml(name)}`,
      `🏢 <b>Бренд:</b> ${escapeHtml(brand)}`,
      `📦 <b>Объём:</b> ${escapeHtml(volume)} шт`,
      `📱 <b>Контакт:</b> ${escapeHtml(contact)}`,
      "",
      `🕐 ${now} (МСК)`,
    ].join("\n");

    await sendTelegramMessage(message);

    console.log(`[${now}] Заявка отправлена: ${name} / ${brand}`);
    res.json({ success: true });
  } catch (err) {
    console.error("Ошибка отправки заявки:", err.message);
    res.status(500).json({ error: "Ошибка сервера. Попробуйте позже." });
  }
});

// ─── HELPERS ────────────────────────────────────────────────────────
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── START ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Backend запущен на порту ${PORT}`);
});
