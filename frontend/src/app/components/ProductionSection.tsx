import { ClipboardList, Image, FileText, Copy, Check } from "lucide-react";

const capabilities = [
  {
    icon: <ClipboardList size={24} className="text-red-600" />,
    title: "Производство по образцу",
    description: "Пришлите нам готовое изделие — воспроизведём его в точности: конструкция, пропорции, состав.",
  },
  {
    icon: <Image size={24} className="text-red-600" />,
    title: "Производство по фото",
    description: "Поделитесь фотографией или референсом — наши технологи разработают лекало с нуля.",
  },
  {
    icon: <FileText size={24} className="text-red-600" />,
    title: "По техническому заданию",
    description: "Предоставьте техпак с замерами и описанием — фабрика изготовит точно по вашим требованиям.",
  },
  {
    icon: <Copy size={24} className="text-red-600" />,
    title: "По референсу",
    description: "Укажите артикул с маркетплейса, дизайнерскую модель или каталог — разработаем конструкцию.",
  },
];

export function ProductionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-red-600" />
              <span className="text-red-600 text-sm tracking-widest uppercase">Возможности</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-3">Производственные возможности</h2>
            <p className="text-gray-500 max-w-xl">
              Принимаем заказы в любом формате — вы выбираете удобный способ передать дизайн.
            </p>
          </div>
          <div className="bg-red-600 text-white rounded-2xl px-8 py-5 shrink-0 text-center">
            <div className="text-3xl mb-1">300 шт</div>
            <div className="text-red-200 text-sm">минимальный объём заказа</div>
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                {cap.icon}
              </div>
              <h3 className="text-gray-900 mb-3">{cap.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Production capacity bar */}
        <div className="bg-gray-900 rounded-3xl p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-red-400 text-sm tracking-widest uppercase mb-3">Мощность фабрики</div>
              <div className="text-4xl mb-2">150 000</div>
              <div className="text-gray-400">изделий в месяц</div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-gray-700 md:pl-10 pt-8 md:pt-0">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: "🎨", label: "Дизайнеры" },
                  { icon: "⚙️", label: "Технологи" },
                  { icon: "✅", label: "Контроль качества" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-300 text-sm">{item.label}</span>
                    <Check size={14} className="text-green-400 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-gray-700 md:pl-10 pt-8 md:pt-0">
              <div className="text-red-400 text-sm tracking-widest uppercase mb-3">Цена от</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Стандартный размер</span>
                  <span className="text-white">670 руб.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Большой размер (2XL+)</span>
                  <span className="text-white">750 руб.</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="inline-flex items-center gap-2 bg-green-900/50 border border-green-700 text-green-400 text-xs px-3 py-1.5 rounded-full">
                    Экономия до 20% от рыночной цены
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
