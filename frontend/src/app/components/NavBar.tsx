import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/850632f25b0036e7ab8a62829dc85c49f2ee4ef2.png";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Производство", href: "#production" },
  { label: "Цены", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-neutral-100 shadow-[0_1px_12px_rgba(0,0,0,0.06)]" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src={logo} alt="InTurkey" className="h-7 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-neutral-500 hover:text-neutral-900 transition-colors text-[13.5px] tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-[13.5px] transition-colors"
          >
            Получить расчёт
          </motion.a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-1 text-neutral-700"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-neutral-700 hover:text-red-600 transition-colors text-sm py-2.5 border-b border-neutral-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg text-sm transition-colors text-center mt-4"
              >
                Получить расчёт
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
