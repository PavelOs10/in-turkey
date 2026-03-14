// Top Models section — images 21–25 and 31–35
import img21 from "@/assets/b211b005c5a664445fcd449cfdcb859c63778334.png";
import img22 from "@/assets/0ae4d073309d21158ae2636a34cfd77e946c9107.png";
import img23 from "@/assets/c4a7f2eebcf57ef55ea597a2a38a537d6ce53e95.png";
import img24 from "@/assets/4c5296cb341aab1fb9bce961cbfb37ef257523ee.png";
import img25 from "@/assets/187205e3d62bcf85ac4748f0a63f316f44234f18.png";
import img31 from "@/assets/c4a7f2eebcf57ef55ea597a2a38a537d6ce53e95.png";
import img32 from "@/assets/0ae4d073309d21158ae2636a34cfd77e946c9107.png";
import img33 from "@/assets/4c5296cb341aab1fb9bce961cbfb37ef257523ee.png";
import img34 from "@/assets/187205e3d62bcf85ac4748f0a63f316f44234f18.png";
import img35 from "@/assets/b211b005c5a664445fcd449cfdcb859c63778334.png";

const model1Images = [
  { id: "21", src: img21, label: "Детальный вид" },
  { id: "22", src: img22, label: "Вид спереди" },
  { id: "23", src: img23, label: "Лайфстайл" },
  { id: "24", src: img24, label: "Вид сзади" },
  { id: "25", src: img25, label: "Предметная съёмка" },
];

const model2Images = [
  { id: "31", src: img31, label: "Вид спереди" },
  { id: "32", src: img32, label: "Лайфстайл" },
  { id: "33", src: img33, label: "Вид сзади" },
  { id: "34", src: img34, label: "Предметная съёмка" },
  { id: "35", src: img35, label: "Детальный вид" },
];

export function TopModelsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-red-600" />
            <span className="text-red-600 text-sm tracking-widest uppercase">Топ-модели</span>
          </div>
          <h2 className="text-4xl text-gray-900 mb-4">Самые продаваемые модели свитеров</h2>
          <p className="text-gray-500 max-w-xl">
            Наши самые популярные модели трикотажа с доказанным спросом на маркетплейсах и стабильными повторными заказами.
          </p>
        </div>

        {/* Model 1 — Mock turtleneck */}
        <div className="mb-20">
          <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
            <div>
              <h3 className="text-2xl text-gray-900">Свитер с воротником-стойкой</h3>
              <p className="text-gray-500 mt-1">Популярная модель на маркетплейсах · Высокий процент повторных заказов</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-red-50 text-red-700 text-xs px-3 py-1.5 rounded-full border border-red-100">
                №1 на маркетплейсах
              </span>
              <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                От 300 шт
              </span>
              <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                От 670 руб.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {model1Images.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={img.src}
                  alt={`Воротник-стойка модель ${img.id}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    #{img.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Model 2 — Classic round neck */}
        <div>
          <div className="flex items-start justify-between mb-6 gap-4 flex-wrap">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {model2Images.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={img.src}
                  alt={`Круглый вырез модель ${img.id}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    #{img.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
