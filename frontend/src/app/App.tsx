import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { ProductionSection } from "./components/ProductionSection";
import { TopModelsSection } from "./components/TopModelsSection";
import { PriceSection } from "./components/PriceSection";

import { SampleSection } from "./components/SampleSection";
import { SpecialOfferSection } from "./components/SpecialOfferSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="pt-16">
        {/* 1. Герой */}
        <HeroSection />

        {/* 2. О нас */}
        <section id="about">
          <AboutSection />
        </section>

        {/* 3. Преимущества */}
        <AdvantagesSection />

        {/* 4. Производственные возможности */}
        <ProductionSection />

        {/* 5. Топ-модели */}
        <section id="portfolio">
          <TopModelsSection />
        </section>

        {/* 6. Сравнение цен */}
        <section id="pricing">
          <PriceSection />
        </section>


        {/* 8. Разработка образца */}
        <SampleSection />

        {/* 9. Специальное предложение */}
        <SpecialOfferSection />

        {/* 10. Форма обратной связи */}
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
