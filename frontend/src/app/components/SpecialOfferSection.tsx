export function SpecialOfferSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-10 py-16 md:px-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 text-sm">Ограниченное предложение</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-white mb-4">
                Специальное предложение для новых клиентов
              </h2>
              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                Мы готовы изготовить первый образец <strong className="text-white">бесплатно</strong>.
                Оцените наше качество до размещения производственного заказа.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Без предоплаты за образец",
                  "Образец производственного качества",
                  "Доставка на ваш адрес",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5"/>
                      <path d="M5 8l2 2 4-4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 text-center">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-gray-500 text-sm mb-2">Стоимость образца</div>
                <div className="text-5xl text-gray-900 mb-1">БЕСПЛАТНО</div>
                <div className="text-gray-400 text-xs mb-6">обычная цена 120 USD</div>
                <a
                  href="#contact"
                  className="block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl transition-colors text-sm"
                >
                  Запросить бесплатный образец
                </a>
                <p className="text-gray-400 text-xs mt-3">Только для новых клиентов · Первый заказ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
