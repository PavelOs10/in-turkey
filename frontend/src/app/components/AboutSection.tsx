import { Factory, Users, TrendingUp, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-red-600" />
              <span className="text-red-600 text-sm tracking-widest uppercase">О нас</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-6 leading-tight">
              Производство трикотажа для брендов и продавцов маркетплейсов
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Мы производим трикотаж для брендов и продавцов маркетплейсов. Наши клиенты входят в топ-20 продавцов свитеров на маркетплейсах.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Мы объединяем производственные объёмы клиентов и обеспечиваем фабрики заказами более чем на <strong className="text-gray-900">600 000 изделий в год</strong>, что позволяет нашим партнёрам получать заводские производственные цены.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-center gap-3">
                <span className="text-red-600 text-2xl">🏭</span>
                <div>
                  <div className="text-gray-900 text-sm">Турецкие фабрики</div>
                  <div className="text-gray-500 text-xs">Прямой доступ</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-center gap-3">
                <span className="text-red-600 text-2xl">📦</span>
                <div>
                  <div className="text-gray-900 text-sm">600 000+ изделий/год</div>
                  <div className="text-gray-500 text-xs">Объединённые объёмы</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Factory size={22} className="text-red-600" />, value: "150 000", unit: "шт/мес", label: "Производственная мощность" },
              { icon: <Users size={22} className="text-red-600" />, value: "Топ 20", unit: "", label: "Клиенты на маркетплейсах" },
              { icon: <TrendingUp size={22} className="text-red-600" />, value: "20%", unit: "экономия", label: "По сравнению с рынком" },
              { icon: <Award size={22} className="text-red-600" />, value: "300 шт", unit: "минимум", label: "Объём заказа" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl text-gray-900 mb-0.5">
                  {stat.value}
                  {stat.unit && <span className="text-base text-gray-400 ml-1">{stat.unit}</span>}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
