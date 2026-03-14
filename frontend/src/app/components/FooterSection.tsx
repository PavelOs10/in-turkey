export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-600 text-2xl">■</span>
              <span className="text-white text-xl tracking-wider">InTurkey</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Прямой доступ к турецким трикотажным фабрикам. Производство свитеров премиум-класса для брендов и продавцов маркетплейсов по всему миру.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-300 text-sm tracking-widest uppercase mb-5">Контакты</h4>
            <div className="space-y-3">
              <a href="https://wa.me/84342278161" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <span className="text-lg">💬</span> +84 34 227 8161
              </a>
              <a href="mailto:inturkeyofficial@mail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <span className="text-lg">📧</span> inturkeyofficial@mail.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gray-300 text-sm tracking-widest uppercase mb-5">Быстрые ссылки</h4>
            <div className="space-y-2">
              {["Портфолио", "Цветовые вариации", "Сравнение цен", "Как мы работаем", "Получить расчёт"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} InTurkey. Все права защищены.
          </p>
          <p className="text-gray-600 text-xs">
            Турецкое трикотажное производство · Прямой доступ к фабрикам
          </p>
        </div>
      </div>
    </footer>
  );
}
