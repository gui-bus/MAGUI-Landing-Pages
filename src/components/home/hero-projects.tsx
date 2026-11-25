"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const heroProjects = [
  { slug: "piramide-parque-una", title: "Parque Una SJC", desktop: "/utils/home-projects/parque-una.webp?v=50160c2811" },
  { slug: "piramide-blog", title: "Blog Editorial", desktop: "/utils/home-projects/blog.webp?v=bfe40101c4" },
  { slug: "powervet", title: "POWERVET", desktop: "/utils/home-projects/powervet.webp?v=2e100d3297" },
  { slug: "arco-odontologia", title: "ARCO Odontologia", desktop: "/utils/home-projects/arco.webp?v=ccd88f0b7e" },
];

export function HeroProjects() {
  const [active, setActive] = useState(0);
  const [measured, setMeasured] = useState(false);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const markLoaded = (key: string) => setLoaded((current) => current[key] ? current : { ...current, [key]: true });
  const sceneReady = (index: number) => measured && loaded[`background-${index}`] && loaded[`desktop-${index}`];
  const activeReady = Boolean(sceneReady(active));
  const nextReady = Boolean(sceneReady((active + 1) % heroProjects.length));

  useEffect(() => {
    if (!activeReady || !nextReady) return;
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % heroProjects.length);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [active, activeReady, nextReady]);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = carousel.current;
    const intro = root?.closest<HTMLElement>(".studio-intro");
    if (!root || !intro) return;
    function resize() {
      if (!root || !intro) return;
      const compact = window.matchMedia("(max-width: 1450px)").matches;
      const mobile = window.matchMedia("(max-width: 760px)").matches;
      const rect = intro.getBoundingClientRect();
      const ratio = mobile ? 0.4 : compact ? 1.5 : 1860 / 845;
      const width = Math.max(rect.width, rect.height * ratio);
      root.style.setProperty("--scene-width", `${width}px`);
      root.style.setProperty("--scene-height", `${width / ratio}px`);
      setMeasured(true);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(intro);
    window.addEventListener("resize", resize);
    resize();
    return () => { observer.disconnect(); window.removeEventListener("resize", resize); };
  }, []);

  return <div ref={carousel} className="studio-hero-carousel" role="region" aria-roledescription="carrossel" aria-label="Projetos da MAGUI.studio">
    {heroProjects.map((item, index) => <div key={item.slug} className={`studio-hero-slide${active === index ? " is-active" : ""}`} aria-hidden={active !== index}>
      <div className={`studio-hero-scene${sceneReady(index) ? " is-ready" : ""}`}>
        <picture><source media="(max-width: 760px)" srcSet="/images/piramide-imoveis/hero-room-mobile-wall-brand-soft.webp?v=paint-soft-1" /><source media="(max-width: 1450px)" srcSet="/images/piramide-imoveis/hero-room-compact-wall-brand.webp?v=painted-1" /><Image src="/images/piramide-imoveis/parque-una-hero-wide-wall-brand.webp?v=painted-1" alt="Monitor sobre uma mesa com iluminação natural" fill unoptimized loading="eager" onLoad={() => markLoaded(`background-${index}`)} /></picture>
        <div className="studio-screen-desktop"><Image src={item.desktop} loading="eager" onLoad={() => markLoaded(`desktop-${index}`)} alt={`Captura original da versão desktop de ${item.title}`} fill sizes="(max-width: 760px) 75vw, 40vw" unoptimized /></div>
      </div>
    </div>)}
    <div className="studio-hero-carousel-shade" aria-hidden="true" />

  </div>;
}
