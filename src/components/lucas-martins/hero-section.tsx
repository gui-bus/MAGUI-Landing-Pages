import Image from "next/image";
import Link from "next/link";
import sunnyHero from "../../../public/images/lucas-martins/lucas-natural-bairro-ensolarado.webp";
import s from "./page.module.css";

export function LucasHeroSection() {
  return (
    <section id="inicio" className={s.hero}>
      <div className={s.heroPhoto}>
        <Image
          src={sunnyHero}
          alt="Lucas Martins percorrendo um bairro arborizado de São Paulo em um dia ensolarado"
          fill
          preload
          sizes="100vw"
        />
      </div>
      <div className={s.heroShade} />
      <div className={s.heroContent}>
        <span className={s.kicker}>SÃO PAULO · PRIMEIRO IMÓVEL</span>
        <h1>
          Primeiro imóvel. <br />
          <em>Próximo capítulo.</em>
        </h1>
        <div className={s.heroBottom}>
          <p>
            Sou Lucas Martins. Uma presença próxima para orientar a sua primeira
            compra, da conversa inicial à conquista da chave.
          </p>
          <Link href="#contato" className={s.heroCta}>
            Vamos conversar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
      <Link href="#sobre" className={s.exploreCircle}>
        <span>Conheça meu trabalho</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3V13M8 13L3.5 8.5M8 13L12.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}

