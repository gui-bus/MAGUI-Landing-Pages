import { HeroProjects } from "./hero-projects";
import Link from "next/link";

export function HeroSection() {
  return <section className="studio-hero" aria-labelledby="home-title">
    <div className="studio-hero-copy">
      <p className="studio-label">Estúdio digital · Design sob medida</p>
      <h1 id="home-title"><span className="studio-hero-line">Não é só</span><span className="studio-hero-line">sobre ver.</span><span className="studio-hero-line studio-hero-line-display">É sobre <span className="studio-hero-emphasis">sentir.</span></span></h1>
      <div className="studio-hero-intro"><span className="studio-star" aria-hidden="true">✳</span><p>Páginas que traduzem a essência da sua marca, com atenção especial aos detalhes.</p></div>
      <Link href="#destaques" className="studio-text-link studio-hero-cta">
        <span>Conheça nossos projetos</span>
        <svg className="studio-hero-cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.75M11.5 4.5V10.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
    <HeroProjects />
  </section>;
}

const marqueeUnits = [
  {
    statement: "De novos endereços a histórias de cuidado.",
    services: "Landing pages · Sites · Design sob medida",
  },
  {
    statement: "Landing pages e sites para negócios de todos os segmentos.",
    services: "Estratégia · Design · Desenvolvimento",
  },
];

export function HeroNote() {
  return <div className="studio-marquee" role="region" aria-label="A proposta da MAGUI.studio">
    <p className="studio-marquee-accessible sr-only">
      {marqueeUnits.map((unit) => `${unit.statement} ${unit.services}`).join(" ")}
    </p>
    <div className="studio-marquee-track" aria-hidden="true">
      {[0, 1].map((group) => <div className="studio-marquee-group" key={group}>
        {[0, 1].map((repeat) => marqueeUnits.map((unit, index) => (
          <div className="studio-marquee-unit" key={`${repeat}-${index}`}>
            <span className="studio-marquee-statement">{unit.statement}</span>
            <span className="studio-marquee-star">✳</span>
            <span className="studio-marquee-services">{unit.services}</span>
            <span className="studio-marquee-star">✳</span>
          </div>
        )))}
      </div>)}
    </div>
  </div>;
}
