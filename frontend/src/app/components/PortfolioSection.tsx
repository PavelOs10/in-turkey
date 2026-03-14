// Portfolio section — grid gallery with images 41–65 (15 images, 5×3)
import img41 from "@/assets/0ae4d073309d21158ae2636a34cfd77e946c9107.png";
import img42 from "@/assets/f96453294e277fa764a41d080f4458991e0e242d.png";
import img43 from "@/assets/b211b005c5a664445fcd449cfdcb859c63778334.png";
import img44 from "@/assets/c4a7f2eebcf57ef55ea597a2a38a537d6ce53e95.png";
import img45 from "@/assets/4c5296cb341aab1fb9bce961cbfb37ef257523ee.png";
import img51 from "@/assets/187205e3d62bcf85ac4748f0a63f316f44234f18.png";
import img52 from "@/assets/0ae4d073309d21158ae2636a34cfd77e946c9107.png";
import img53 from "@/assets/c4a7f2eebcf57ef55ea597a2a38a537d6ce53e95.png";
import img54 from "@/assets/f96453294e277fa764a41d080f4458991e0e242d.png";
import img55 from "@/assets/b211b005c5a664445fcd449cfdcb859c63778334.png";
import img61 from "@/assets/4c5296cb341aab1fb9bce961cbfb37ef257523ee.png";
import img62 from "@/assets/187205e3d62bcf85ac4748f0a63f316f44234f18.png";
import img63 from "@/assets/0ae4d073309d21158ae2636a34cfd77e946c9107.png";
import img64 from "@/assets/c4a7f2eebcf57ef55ea597a2a38a537d6ce53e95.png";
import img65 from "@/assets/f96453294e277fa764a41d080f4458991e0e242d.png";

const portfolioImages = [
  { id: "41", src: img41, label: "Чёрный свитер — вид спереди" },
  { id: "42", src: img42, label: "Деталь манжеты" },
  { id: "43", src: img43, label: "Деталь воротника" },
  { id: "44", src: img44, label: "Бордо — лайфстайл" },
  { id: "45", src: img45, label: "Бордо — вид сзади" },
  { id: "51", src: img51, label: "Бордо — предметная съёмка" },
  { id: "52", src: img52, label: "Чёрный — предметная съёмка" },
  { id: "53", src: img53, label: "Бордо — в полный рост" },
  { id: "54", src: img54, label: "Деталь фактуры ткани" },
  { id: "55", src: img55, label: "Модель в чёрном" },
  { id: "61", src: img61, label: "Силуэт сзади" },
  { id: "62", src: img62, label: "Деталь торса" },
  { id: "63", src: img63, label: "Деталь спереди" },
  { id: "64", src: img64, label: "Бордо лайфстайл" },
  { id: "65", src: img65, label: "Деталь манжеты и резинки" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-red-600" />
              <span className="text-red-600 text-sm tracking-widest uppercase">Портфолио</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-3">Примеры произведённых изделий</h2>
            <p className="text-gray-500 max-w-xl">
              Реальные образцы производства. Все изделия изготовлены на турецких фабриках из премиальной пряжи.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-700 px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Запросить расчёт
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* 5-column responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {portfolioImages.map((img, index) => (
            <div
              key={img.id}
              className={`group relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === 2 || index === 8 ? "row-span-2" : ""
              }`}
              style={{ aspectRatio: index === 2 || index === 8 ? "auto" : "3/4", minHeight: index === 2 || index === 8 ? "480px" : undefined }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white text-xs leading-snug">{img.label}</p>
                <p className="text-white/60 text-xs mt-0.5">#{img.id}</p>
              </div>
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Более 600 000 изделий произведено ежегодно для всех наших партнёров
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl transition-colors text-sm shadow-md shadow-red-100"
          >
            Получить расчёт стоимости производства
          </a>
        </div>
      </div>
    </section>
  );
}
