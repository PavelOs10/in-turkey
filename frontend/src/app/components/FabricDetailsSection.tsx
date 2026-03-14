// Fabric Details section — close-up images 14, 33, 34, 44, 64, 65
import img14 from "@/assets/f96453294e277fa764a41d080f4458991e0e242d.png";
import img33 from "@/assets/c4a7f2eebcf57ef55ea597a2a38a537d6ce53e95.png";
import img34 from "@/assets/4c5296cb341aab1fb9bce961cbfb37ef257523ee.png";
import img44 from "@/assets/0ae4d073309d21158ae2636a34cfd77e946c9107.png";
import img64 from "@/assets/187205e3d62bcf85ac4748f0a63f316f44234f18.png";
import img65 from "@/assets/b211b005c5a664445fcd449cfdcb859c63778334.png";

const fabricImages = [
  {
    id: "14",
    src: img14,
    title: "Rib-knit cuffs",
    description: "Precision-finished ribbed cuffs maintain shape wash after wash",
    tag: "Construction detail",
  },
  {
    id: "33",
    src: img33,
    title: "Drape & fit",
    description: "Fine-gauge knit drapes naturally with a structured silhouette",
    tag: "Garment fit",
  },
  {
    id: "34",
    src: img34,
    title: "Back panel finish",
    description: "Clean seamlines and consistent tension throughout the back panel",
    tag: "Quality control",
  },
  {
    id: "44",
    src: img44,
    title: "Crew neck construction",
    description: "Reinforced neckline with even rib-knit collar for lasting comfort",
    tag: "Neck finish",
  },
  {
    id: "64",
    src: img64,
    title: "Body weight & texture",
    description: "Medium-weight knitwear with a soft hand feel and premium drape",
    tag: "Fabric weight",
  },
  {
    id: "65",
    src: img65,
    title: "Collar detail",
    description: "Uniform collar rib with no pilling — premium Turkish yarn quality",
    tag: "Yarn quality",
  },
];

export function FabricDetailsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-red-600" />
              <span className="text-red-600 text-sm tracking-widest uppercase">Fabric Details</span>
            </div>
            <h2 className="text-4xl text-gray-900 mb-3">Premium quality, every stitch</h2>
            <p className="text-gray-500 max-w-xl">
              We use modern knitting equipment and premium Turkish yarn. Every garment meets strict quality standards before it leaves our factory.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            {["Merino Wool", "Mohair", "Cashmere", "Cotton blend"].map((mat) => (
              <span
                key={mat}
                className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-4 py-2 rounded-full"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Hero close-up + detail grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Large featured image (img14 - close-up sleeve) */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 group h-[480px]">
            <img
              src={img14}
              alt="Fabric detail #14 — rib-knit cuffs"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-xs text-red-400 tracking-widest uppercase mb-2 block">Construction detail · #14</span>
              <h3 className="text-white text-2xl mb-2">Rib-knit cuffs</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Precision-finished ribbed cuffs maintain shape wash after wash — a hallmark of Turkish factory craftsmanship.
              </p>
            </div>
          </div>

          {/* 2×2 detail grid of the remaining 5 images */}
          <div className="grid grid-cols-2 gap-4">
            {fabricImages.slice(1).map((img) => (
              <div
                key={img.id}
                className="relative rounded-2xl overflow-hidden bg-gray-100 group aspect-square"
              >
                <img
                  src={img.src}
                  alt={`Fabric detail #${img.id} — ${img.title}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-red-400 tracking-widest block mb-1">#{img.id}</span>
                  <h4 className="text-white text-sm leading-tight">{img.title}</h4>
                  <p className="text-white/60 text-xs mt-1 leading-snug hidden group-hover:block">
                    {img.description}
                  </p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {img.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Turkish yarn", sub: "Premium quality sourcing" },
            { label: "Modern equipment", sub: "Computer-controlled knitting" },
            { label: "QC at every stage", sub: "Defect rate < 0.5%" },
            { label: "Any complexity", sub: "Patterns, cables, colorwork" },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="w-2 h-2 rounded-full bg-red-600 mb-3" />
              <div className="text-gray-900 text-sm mb-1">{item.label}</div>
              <div className="text-gray-500 text-xs">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
