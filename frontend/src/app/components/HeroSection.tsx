import { motion } from "motion/react";
import logo from "@/assets/850632f25b0036e7ab8a62829dc85c49f2ee4ef2.png";

const sweaterImg = "https://images.unsplash.com/photo-1605131545453-6044234368a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd29vbCUyMHN3ZWF0ZXIlMjBmb2xkZWQlMjB3aGl0ZSUyMGNsZWFuJTIwbWluaW1hbHxlbnwxfHx8fDE3NzM0MDk0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Stagger children
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { num: "150 000", unit: "изделий / мес" },
  { num: "300 шт", unit: "мин. заказ" },
  { num: "−20%", unit: "vs рыночные цены" },
];

export function HeroSection() {
  return (
    <section className="min-h-screen bg-white flex flex-col">

      {/* ── MAIN GRID ─────────────────────────────────────────────── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center pt-28 pb-16">

        {/* LEFT — Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-2 mb-8">
            <span className="w-5 h-px bg-red-600" />
            <span className="text-xs text-neutral-400 tracking-[0.18em] uppercase">
              Производство в Турции
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[2.65rem] md:text-5xl lg:text-[3.4rem] text-neutral-900 leading-[1.08] tracking-[-0.02em] mb-6"
          >
            Производство<br />
            свитеров в Турции<br />
            <span className="text-red-600">для брендов</span> и<br />
            селлеров маркетплейсов
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-neutral-500 text-[1.05rem] leading-relaxed max-w-md mb-10"
          >
            Разрабатываем образцы и производим партии свитеров
            на проверенных турецких фабриках.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-14">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-lg text-sm transition-colors"
            >
              Получить расчёт
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-neutral-200 hover:border-neutral-400 text-neutral-700 hover:text-neutral-900 bg-white px-7 py-3.5 rounded-lg text-sm transition-all"
            >
              Смотреть портфолио
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="flex gap-8 border-t border-neutral-100 pt-8">
            {stats.map((s) => (
              <div key={s.unit}>
                <div className="text-xl text-neutral-900 tracking-tight mb-0.5">{s.num}</div>
                <div className="text-xs text-neutral-400 leading-snug">{s.unit}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          {/* Main photo card */}
          <div className="relative rounded-3xl overflow-hidden bg-neutral-100 aspect-[4/5]">
            <img
              src={sweaterImg}
              alt="Производство свитеров"
              className="w-full h-full object-cover"
            />
            {/* Subtle red corner accent */}
            <div className="absolute top-0 left-0 w-24 h-1.5 bg-red-600 rounded-br-lg" />
          </div>

          {/* Floating logo badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-5 -left-6 bg-white border border-neutral-100 shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-2xl px-5 py-4 flex items-center gap-4"
          >
            <img src={logo} alt="InTurkey" className="h-7 w-auto object-contain" />
            <div className="w-px h-8 bg-neutral-100" />
            <div>
              <div className="text-[11px] text-neutral-400 mb-0.5">Мощность</div>
              <div className="text-sm text-neutral-900">150 000 шт / мес</div>
            </div>
          </motion.div>

          {/* Floating trust badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="absolute -top-5 -right-4 bg-white border border-neutral-100 shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-2xl px-4 py-3 flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[12px] text-neutral-700">Фабричные цены · Турция</span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── BOTTOM TICKER ─────────────────────────────────────────── */}
      <div className="border-t border-neutral-100 overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(2)].flatMap((_, pass) =>
            [
              "Производство свитеров",
              "Проверенные фабрики",
              "От 300 штук",
              "Образцы за 14 дней",
              "Прямые фабричные цены",
              "150 000 изделий в месяц",
              "Высокое качество",
            ].map((text, i) => (
              <span
                key={`${pass}-${i}`}
                className="flex items-center gap-16 text-[11px] tracking-[0.22em] uppercase text-neutral-300"
              >
                {text}
                <span className="text-red-400">·</span>
              </span>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
