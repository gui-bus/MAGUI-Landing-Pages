import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";
export function LucasAboutSection() {
 return <section id="sobre" className={s.aboutSection}>
  <div className={s.advisorHeading} data-lucas-reveal><span className={s.kicker}>01 / O PROFISSIONAL AO SEU LADO</span><h2>Confiança começa{" "}<br /><em>com uma boa conversa.</em></h2><p>Atenção para ouvir. Experiência para orientar.</p></div>
  <div className={s.aboutComposition}><figure className={s.aboutWideFigure} data-lucas-reveal><div className={s.aboutWidePhoto}><Image src="/images/lucas-martins/lucas-natural-atendimento.webp" alt="Lucas Martins explicando uma planta durante um atendimento" fill sizes="88vw"/></div><figcaption><span>ATENÇÃO A CADA PERGUNTA.</span><span>PROXIMIDADE EM CADA ESCOLHA.</span></figcaption></figure>
   <div className={s.advisorIntroduction} data-lucas-reveal><div className={s.advisorName}><span>SEU CORRETOR</span><h3>Lucas Martins.</h3></div><p>Sou especialista no primeiro imóvel. Meu trabalho é entender a sua rotina, esclarecer as possibilidades e acompanhar cada decisão com você.</p><Link href="#contato" className={s.advisorContact}>Vamos nos conhecer <span aria-hidden="true">↗</span></Link></div>
  </div>
 </section>;
}

