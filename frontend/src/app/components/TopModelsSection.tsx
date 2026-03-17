// Top Models section — only classic round neck sweater with masonry photo grid
import sw1 from "@/assets/sweater_1.png";
import sw2 from "@/assets/sweater_2.jpg";
import sw3 from "@/assets/sweater_3.jpg";
import sw4 from "@/assets/sweater_4.png";
import sw5 from "@/assets/sweater_5.png";
import sw6 from "@/assets/sweater_6.png";
import sw7 from "@/assets/sweater_7.jpg";
import sw8 from "@/assets/sweater_8.jpg";
import sw9 from "@/assets/sweater_9.jpg";
import sw10 from "@/assets/sweater_10.jpg";
import sw11 from "@/assets/sweater_11.jpg";
import sw12 from "@/assets/sweater_12.jpg";
import sw13jpg from "@/assets/sweater_13.jpg";
import sw13png from "@/assets/sweater_13.png";
import sw14 from "@/assets/sweater_14.jpg";
import sw15 from "@/assets/sweater_15.png";
import sw22 from "@/assets/sweater_22.jpg";

/*
  Masonry grid layout matching the reference image.
  5 columns, 4 rows. Some cells span 2 rows for variety.
  Images are mapped to match the reference screenshot layout.
*/

interface GridImage {
  id: string;
  src: string;
  alt: string;
  col: string;
  row: string;
}

const gridImages: GridImage[] = [
  // ---- Row 1 ----
  { id: "r1c1", src: sw1,     alt: "Свитер коричневый крупный план",      col: "1 / 2", row: "1 / 2" },
  { id: "r1c2", src: sw2,     alt: "Свитер серый детали горловины",        col: "2 / 3", row: "1 / 2" },
  { id: "r1c3", src: sw3,     alt: "Свитер чёрный крупный план",          col: "3 / 4", row: "1 / 3" },
  { id: "r1c4", src: sw4,     alt: "Свитер белый полный вид",             col: "4 / 5", row: "1 / 2" },
  { id: "r1c5", src: sw5,     alt: "Свитер синий крупный план",           col: "5 / 6", row: "1 / 2" },
  // ---- Row 2 ----
  { id: "r2c1", src: sw6,     alt: "Свитер чёрный вид спереди",           col: "1 / 2", row: "2 / 3" },
  { id: "r2c2", src: sw7,     alt: "Свитер коричневый детали горловины",   col: "2 / 3", row: "2 / 3" },
  { id: "r2c4", src: sw8,     alt: "Свитер бордовый полный вид",          col: "4 / 5", row: "2 / 3" },
  { id: "r2c5", src: sw9,     alt: "Свитер серый детали рукава",          col: "5 / 6", row: "2 / 4" },
  // ---- Row 3 ----
  { id: "r3c1", src: sw13png,  alt: "Свитер оливковый вид спереди",       col: "1 / 2", row: "3 / 4" },
  { id: "r3c2", src: sw11,     alt: "Свитер синий полный вид",            col: "2 / 3", row: "3 / 4" },
  { id: "r3c3", src: sw14,     alt: "Свитер бежевый полный вид",          col: "3 / 4", row: "3 / 4" },
  { id: "r3c4", src: sw13jpg,  alt: "Свитер чёрный с джинсами",           col: "4 / 5", row: "3 / 5" },
  // ---- Row 4 ----
  { id: "r4c1", src: sw12,    alt: "Свитер бежевый деталь руки",           col: "1 / 2", row: "4 / 5" },
  { id: "r4c2", src: sw15,    alt: "Свитер чёрный крупный план с часами",  col: "2 / 3", row: "4 / 5" },
  { id: "r4c3", src: sw10,    alt: "Свитер оливковый вид сзади",          col: "3 / 4", row: "4 / 5" },
  { id: "r4c5", src: sw22,    alt: "Свитер бордовый вид сзади",           col: "5 / 6", row: "4 / 5" },
];

export function TopModelsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-red-600" />
            <span className="text-red-600 text-sm tracking-widest uppercase">Топ-модели</span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">Самые продаваемые модели свитеров</h2>
          <p className="text-gray-500 max-w-2xl">
            Реальные образцы производства. Все изделия изготовлены на турецких фабриках из премиальной пряжи.
          </p>
        </div>

        {/* Sub-header with tags */}
        <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h3 className="text-2xl text-gray-900">Классический свитер с круглым вырезом</h3>
            <p className="text-gray-500 mt-1">Универсальная модель со стабильным спросом · Бестселлер круглый год</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="bg-red-50 text-red-700 text-xs px-3 py-1.5 rounded-full border border-red-100">
              Стабильный спрос
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
              От 300 шт
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
              От 670 руб.
            </span>
          </div>
        </div>

        {/* Link above the grid */}
        <div className="flex justify-end mb-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            Запросить расчёт
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* -------- Masonry photo grid -------- */}
        <div
          className="rounded-3xl overflow-hidden bg-[#1a1a1a] p-2.5 sm:p-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(4, minmax(160px, 210px))",
            gap: "5px",
          }}
        >
          {gridImages.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-xl group"
              style={{
                gridColumn: img.col,
                gridRow: img.row,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
