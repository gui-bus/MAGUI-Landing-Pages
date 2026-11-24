import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";

export function LucasHeroSection() {
  return <section id="inicio" className={s.hero}>
    <div className={s.heroPhoto}><Image src="/images/lucas-martins/lucas-natural-bairro.webp" alt="Lucas Martins percorrendo um bairro de Curitiba" fill preload sizes="100vw" /></div>
    <div className={s.heroShade} />
    <div className={s.heroTopline}><span>CONSULTORIA PARA O PRIMEIRO IMÓVEL</span><span>CURITIBA · PARANÁ</span></div>
    <div className={s.heroContent}><span className={s.kicker}>PESSOAS ANTES DE ENDEREÇOS</span><h1>Primeiro imóvel.{" "}<br /><em>Próximo capítulo.</em></h1><div className={s.heroBottom}><p>Sou Lucas Martins. Uma presença próxima para orientar a sua primeira compra, da conversa inicial à conquista da chave.</p><Link href="#contato" className={s.heroCta}>Vamos conversar <span aria-hidden="true">↗</span></Link></div></div>
    <div className={s.heroSignature}><strong>Lucas Martins</strong><span>Seu corretor. Do começo à chave.</span></div>
    <Link href="#sobre" className={s.exploreCircle}>Conheça meu trabalho <span aria-hidden="true">↓</span></Link>
  </section>;
}

