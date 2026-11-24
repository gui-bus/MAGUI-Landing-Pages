import { HelenaHeader } from "@/components/helena-duarte/header";
import { HelenaHeroSection } from "@/components/helena-duarte/hero-section";
import { HelenaPropertiesSection } from "@/components/helena-duarte/properties-section";
import { HelenaAboutSection } from "@/components/helena-duarte/about-section";
import { HelenaNeighborhoodsSection } from "@/components/helena-duarte/neighborhoods-section";
import { HelenaProcessSection } from "@/components/helena-duarte/process-section";
import { HelenaFaqSection } from "@/components/helena-duarte/faq-section";
import { HelenaContactSection } from "@/components/helena-duarte/contact-section";
import { HelenaMotion } from "@/components/helena-duarte/motion";
import { HelenaFooter } from "@/components/helena-duarte/footer";
import { HelenaCredentialsSection } from "@/components/helena-duarte/credentials-section";
import { HelenaCareerSection } from "@/components/helena-duarte/career-section";
import { helenaDisplay, helenaText } from "@/components/helena-duarte/fonts";
import s from "@/components/helena-duarte/page.module.css";
export default function HelenaDuarteLanding() {
    return <div data-helena-page className={`${s.page} ${helenaDisplay.variable} ${helenaText.variable}`}><HelenaMotion /><HelenaHeader /><HelenaHeroSection /><HelenaCredentialsSection /><HelenaPropertiesSection /><HelenaAboutSection /><HelenaCareerSection /><HelenaNeighborhoodsSection /><HelenaProcessSection /><HelenaFaqSection /><HelenaContactSection /><HelenaFooter /></div>;
}
