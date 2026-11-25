import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
export function HelenaHeroSection() {
    return <section id="inicio" className={s.hero}>
    <Image src="/images/helena-duarte/apartamento.webp" alt="Sala iluminada com varanda aberta para um jardim arborizado" fill sizes="100vw" preload className={s.heroImage}/>
    <div className={s.heroShade}/>
    <div className={s.heroContent}><p className={s.eyebrow}>CURITIBA · IMÓVEIS COM IDENTIDADE</p><h1>O seu próximo{" "}<br />capítulo começa{" "}<br />com um <em>lugar.</em></h1><p>Mais do que encontrar um imóvel.{" "}<br />Reconhecer onde a sua vida faz sentido.</p><Link href="#imoveis" className={`${s.button} ${s.buttonLight}`}>Encontre o seu lugar</Link></div>
    <Link href="#sobre" className={s.heroAdvisor} aria-label="Conheça Helena Duarte, 14 anos de experiência"><Image src="/images/helena-duarte/helena.webp" alt="Helena Duarte" width={80} height={100} sizes="80px" /><span><small>SUA CORRETORA EM CURITIBA</small><strong>Helena Duarte</strong><span>14 anos conectando{" "}<br />pessoas e bons endereços.</span></span></Link>
    <div className={s.heroBottom}><span>Uma seleção cuidadosa.{" "}<br />Uma escolha inteiramente sua.</span><Link href="#sobre">Conheça o meu olhar <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V13M8 13L3.5 8.5M8 13L12.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></Link></div>
    <span className={s.heroSide}>ARQUITETURA, AFETO E NOVOS COMEÇOS</span>
  </section>;
}
