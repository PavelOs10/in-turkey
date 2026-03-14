import { Package, Truck, Cpu, Layers, Leaf, Star } from "lucide-react";

const advantages = [
  {
    icon: <Package size={24} className="text-red-600" />,
    title: "Производство полного цикла",
    description: "От выбора пряжи до готового изделия — весь производственный процесс под одной крышей.",
  },
  {
    icon: <Truck size={24} className="text-red-600" />,
    title: "Работа «под ключ»",
    description: "Производство, маркировка, упаковка и доставка — полное решение без лишних хлопот для вашего бренда.",
  },
  {
    icon: <Cpu size={24} className="text-red-600" />,
    title: "Современное вязальное оборудование",
    description: "Компьютеризированные вязальные машины обеспечивают стабильное качество при любых объёмах.",
  },
  {
    icon: <Leaf size={24} className="text-red-600" />,
    title: "Премиальная турецкая пряжа",
    description: "Прямые поставки с ведущих турецких пряжных фабрик. Сырьё премиум-класса по заводским ценам.",
  },
  {
    icon: <Layers size={24} className="text-red-600" />,
    title: "Любые материалы",
    description: "Мериносовая шерсть, мохер, кашемир, хлопок, смесовые составы — подберём любое волокно.",
  },
  {
    icon: <Star size={24} className="text-red-600" />,
    title: "Изделия любой сложности",
    description: "От базовых моделей до сложных кос, жаккарда и авторских узоров — без ограничений.",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-red-600" />
            <span className="text-red-600 text-sm tracking-widest uppercase">Преимущества</span>
            <div className="w-10 h-0.5 bg-red-600" />
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">Почему клиенты работают с нами</h2>
          <p className="text-gray-500">
            Мы создали инфраструктуру, которая открывает продавцам маркетплейсов и брендам прямой доступ к заводскому производству трикотажа.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                {adv.icon}
              </div>
              <h3 className="text-gray-900 text-lg mb-3">{adv.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
