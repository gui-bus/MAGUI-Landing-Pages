import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";

export function LucasAboutSection() {
  return (
    <section id="sobre" className={s.advisorSection}>
      <div className={s.advisorSplit}>
        <figure className={s.advisorPortrait} data-lucas-reveal>
          <div className={s.advisorPortraitImage}>
            <Image
              src="/images/lucas-martins/lucas-natural-atendimento.webp"
              alt="Lucas Martins explicando uma planta durante um atendimento"
              fill
              sizes="(max-width: 760px) 88vw, 46vw"
            />
          </div>
          <figcaption>ATENÇÃO A CADA PERGUNTA. PROXIMIDADE EM CADA ESCOLHA.</figcaption>
        </figure>
        <div className={s.advisorStory} data-lucas-reveal>
          <span className={s.kicker}>01 / O PROFISSIONAL AO SEU LADO</span>
          <h2>Confiança começa <em>com uma boa conversa.</em></h2>
          <p className={s.advisorLead}>Atenção para ouvir.<br />Experiência para orientar.</p>
          <p className={s.advisorDescription}>
            Sou especialista no primeiro imóvel. Meu trabalho é entender a sua
            rotina, esclarecer as possibilidades e acompanhar cada decisão com você.
          </p>
          <div className={s.advisorSignature}>
            <span>SEU CORRETOR</span>
            <h3>Lucas Martins.</h3>
          </div>
          <Link href="#contato" className={s.advisorContact}>
            Vamos nos conhecer <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
