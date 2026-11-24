import { LucasMarqueeSection } from "@/components/lucas-martins/marquee-section";
import { LucasHeader } from "@/components/lucas-martins/header";
import { LucasHeroSection } from "@/components/lucas-martins/hero-section";
import { LucasPlanSection } from "@/components/lucas-martins/plan-section";
import { LucasPropertiesSection } from "@/components/lucas-martins/properties-section";
import { LucasHousingSection } from "@/components/lucas-martins/housing-section";
import { LucasAboutSection } from "@/components/lucas-martins/about-section";
import { LucasProcessSection } from "@/components/lucas-martins/process-section";
import { LucasFaqSection } from "@/components/lucas-martins/faq-section";
import { LucasFooter } from "@/components/lucas-martins/footer";
import { LucasMotion } from "@/components/lucas-martins/motion";
import { LucasLivingSection } from "@/components/lucas-martins/living-section";
import {
  lucasDisplay,
  lucasMono,
  lucasText,
} from "@/components/lucas-martins/fonts";
import s from "@/components/lucas-martins/page.module.css";

export default function LucasMartinsLanding() {
  return (
    <div
      data-lucas-page
      className={`${s.page} ${lucasDisplay.variable} ${lucasText.variable} ${lucasMono.variable}`}
    >
      <LucasMotion />
      <LucasHeader />
      <LucasHeroSection />
      <LucasMarqueeSection />
      <LucasAboutSection />
      <LucasLivingSection />
      <LucasHousingSection />
      <LucasProcessSection />
      <LucasPropertiesSection />
      <LucasFaqSection />
      <div id="contato" className={s.bottomPlan}><LucasPlanSection /></div>
      <LucasFooter />
    </div>
  );
}
