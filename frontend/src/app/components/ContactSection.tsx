import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", brand: "", volume: "", contact: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Ошибка отправки заявки");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Ошибка сети. Попробуйте позже.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-red-600" />
              <span className="text-red-600 text-sm tracking-widest uppercase">Свяжитесь с нами</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-6">Получить расчёт стоимости производства</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Заполните форму, и наш менеджер подготовит персональный расчёт стоимости производства в течение 24 часов.
            </p>

            <div className="space-y-6">
              {[
                { icon: "💬", label: "WhatsApp", value: "+84 34 227 8161", href: "https://wa.me/84342278161" },
                { icon: "📧", label: "Email", value: "inturkeyofficial@mail.com", href: "mailto:inturkeyofficial@mail.com" },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-xl group-hover:border-red-200 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">{contact.label}</div>
                    <div className="text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="text-gray-900 mb-3">Время ответа</div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-gray-500 text-sm">В течение 24 часов в рабочие дни</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 text-3xl">
                  ✅
                </div>
                <h3 className="text-gray-900 text-2xl mb-3">Заявка получена!</h3>
                <p className="text-gray-500 leading-relaxed">
                  Спасибо! Наш менеджер рассмотрит вашу заявку и пришлёт расчёт стоимости производства в течение 24 часов.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Бренд или компания *</label>
                    <input
                      type="text"
                      required
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      placeholder="Название вашего бренда"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Ориентировочный объём заказа *</label>
                    <select
                      required
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-colors appearance-none bg-white"
                    >
                      <option value="">Выберите диапазон объёма</option>
                      <option value="300-500">300–500 шт</option>
                      <option value="500-1000">500–1 000 шт</option>
                      <option value="1000-5000">1 000–5 000 шт</option>
                      <option value="5000+">5 000+ шт</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Телефон или WhatsApp *</label>
                    <input
                      type="text"
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="+7 900 000 00 00"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-colors"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white py-4 rounded-xl transition-colors text-sm shadow-lg shadow-red-100 mt-2"
                  >
                    {loading ? "Отправка..." : "Получить коммерческое предложение"}
                  </button>
                  <p className="text-gray-400 text-xs text-center">
                    Отправляя форму, вы соглашаетесь на связь со стороны InTurkey по вашему производственному запросу.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
