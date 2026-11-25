import Link from "next/link";
import styles from "./process-section.module.css";

const steps = [
  {
    number: "01",
    label: "Direção",
    title: "Entendemos sua marca.",
    description: "Conhecemos seu negócio, seu público e seus objetivos para definir uma direção clara para a página.",
    outcome: "Objetivos e escopo alinhados",
  },
  {
    number: "02",
    label: "Criação",
    title: "Desenhamos a experiência.",
    description: "Criamos o conteúdo, o visual e a navegação. Você acompanha a proposta e participa dos ajustes.",
    outcome: "Conteúdo e visual definidos",
  },
  {
    number: "03",
    label: "Lançamento",
    title: "Colocamos no ar.",
    description: "Desenvolvemos, revisamos e conferimos a experiência no celular e no desktop antes da publicação.",
    outcome: "Página revisada e publicada",
  },
];

export function ProcessSection() {
  const whatsappUrl = `https://wa.me/5512981847553?text=${encodeURIComponent("Olá! Conheci o processo de criação da MAGUI.studio e gostaria de conversar sobre uma página para minha marca.")}`;

  return (
    <section className={styles.section} id="processo" aria-labelledby="process-title">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}><span aria-hidden="true" /> Como trabalhamos</p>
          <h2 id="process-title">Da primeira conversa<br />à página no ar.</h2>
        </div>
        <p className={styles.lead}>Você acompanha as decisões, da direção inicial à publicação.</p>
      </div>

      <ol className={styles.steps}>
        {steps.map((step) => (
          <li className={styles.step} key={step.number}>
            <div className={styles.stepTop}>
              <span className={styles.number}>{step.number}</span>
              <span className={styles.label}>{step.label}</span>
            </div>
            <h3>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
            <span className={styles.outcome}><span aria-hidden="true">↳</span>{step.outcome}</span>
          </li>
        ))}
      </ol>

      <div className={styles.bottom}>
        <p>O primeiro passo é uma boa conversa.</p>
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Vamos falar sobre sua ideia <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
