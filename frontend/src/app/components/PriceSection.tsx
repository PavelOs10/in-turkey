export function PriceSection() {
  const models = [
    { name: "Свитер с воротником-стойкой", market: "850 руб.", our: "от 670 руб.", saving: "~21%" },
    { name: "Классический свитер с круглым вырезом", market: "850 руб.", our: "от 670 руб.", saving: "~21%" },
    { name: "Пуловер с V-образным вырезом", market: "890 руб.", our: "от 700 руб.", saving: "~21%" },
    { name: "Оверсайз с круглым вырезом", market: "950 руб.", our: "от 740 руб.", saving: "~22%" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-red-600" />
            <span className="text-red-600 text-sm tracking-widest uppercase">Цены</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl text-gray-900 mb-3">Сравнение цен</h2>
              <p className="text-gray-500 max-w-xl">
                Наше ценовое преимущество достигается за счёт объединения производственных объёмов — мы агрегируем заказы нескольких клиентов, обеспечивая всем доступ к заводским ценам.
              </p>
            </div>
            {/* Save badge */}
            <div className="shrink-0 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl px-8 py-5 text-center">
              <div className="text-green-800 text-sm mb-1">Ценовое преимущество</div>
              <div className="text-4xl text-green-700">20%</div>
              <div className="text-green-600 text-sm">средняя экономия</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 bg-gray-900 text-white px-6 py-4 text-sm">
            <div className="text-gray-400">Модель</div>
            <div className="text-center text-gray-400">Цена на рынке</div>
            <div className="text-center text-red-400">Цена InTurkey</div>
            <div className="text-center text-gray-400">Экономия</div>
          </div>
          {models.map((model, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 px-6 py-5 items-center border-b border-gray-100 last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="text-gray-900 text-sm pr-4">{model.name}</div>
              <div className="text-center">
                <span className="text-gray-400 text-sm line-through">{model.market}</span>
              </div>
              <div className="text-center">
                <span className="text-red-600 text-sm">{model.our}</span>
              </div>
              <div className="text-center">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  {model.saving}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Base production prices */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">Базовая цена производства</div>
            <div className="flex items-baseline justify-between">
              <span className="text-gray-700">Стандартный размер (XS–XL)</span>
              <span className="text-gray-900 text-xl">670 руб.</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">Базовая цена производства</div>
            <div className="flex items-baseline justify-between">
              <span className="text-gray-700">Большой размер (2XL–4XL)</span>
              <span className="text-gray-900 text-xl">750 руб.</span>
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-xs mt-4 text-center">
          * Цены указаны ориентировочно для стандартного трикотажа. Точная стоимость зависит от сложности модели, вида пряжи и объёма заказа.
        </p>
      </div>
    </section>
  );
}
