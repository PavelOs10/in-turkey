const yarnColors = [
  { name: "Чёрный",         hex: "#1a1a1a" },
  { name: "Антрацит",       hex: "#3d3d3d" },
  { name: "Графит",         hex: "#5c5c5c" },
  { name: "Тёмно-серый",    hex: "#7a8494" },
  { name: "Светло-серый",   hex: "#c8c8c8" },
  { name: "Кремовый",       hex: "#f5f0e8" },
  { name: "Верблюжий",      hex: "#c09060" },
  { name: "Коньяк",         hex: "#9b5020" },
  { name: "Бордо",          hex: "#6b1c2e" },
  { name: "Тёмно-красный",  hex: "#8b0000" },
  { name: "Тёмно-синий",    hex: "#1a2a4a" },
  { name: "Синий",          hex: "#2040a0" },
  { name: "Тёмно-зелёный",  hex: "#1e4030" },
  { name: "Оливковый",      hex: "#5a6030" },
  { name: "Шалфей",         hex: "#8a9a78" },
  { name: "Пудровый розовый", hex: "#d4808a" },
  { name: "Розовый",        hex: "#c45060" },
  { name: "Пыльно-лиловый", hex: "#a07080" },
];

export function SampleSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — sample info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-red-600" />
              <span className="text-red-600 text-sm tracking-widest uppercase">Образцы</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-6">Разработка образца</h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0 text-2xl">
                  🧶
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Стоимость образца</div>
                  <div className="text-3xl text-gray-900 mb-3">120 <span className="text-lg text-gray-400">USD</span></div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    При подтверждении производственного заказа стоимость образца полностью включается в цену заказа — вы не платите дополнительно.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Образец изготавливается за 7–14 рабочих дней",
                "Физический образец доставляется на ваш адрес",
                "Включён один раунд бесплатных доработок",
                "Стоимость образца засчитывается в производственный заказ",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — yarn color palette */}
          <div>
            <div className="mb-6">
              <h3 className="text-gray-900 mb-2">Палитра цветов пряжи</h3>
              <p className="text-gray-500 text-sm">
                Выберите из нашей стандартной палитры или закажите подбор под Pantone.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-3">
              {yarnColors.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div
                    className="w-full aspect-square rounded-xl border-2 border-white shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                  <span className="text-gray-500 text-xs text-center leading-tight hidden group-hover:block">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              + Нестандартные цвета по Pantone или RAL. Наличие подтверждается в течение 24 часов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
