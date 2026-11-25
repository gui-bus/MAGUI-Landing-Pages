import Image from "next/image";
import s from "./page.module.css";

// Exemplos de composição: substituir por relatos autorizados antes de apresentá-los como reais.
const testimonials = [
  { name: "Mariana Oliveira", image: "/images/lucas-martins/avatar-mariana.webp", topic: "Clareza para começar", quote: "Eu tinha muitas dúvidas sobre a entrada e a documentação. Ter cada etapa explicada com calma fez a compra parecer um plano possível." },
  { name: "Rafael Santos", image: "/images/lucas-martins/avatar-rafael.webp", topic: "Escolhas com contexto", quote: "O que mais fez diferença foi olhar além da planta: pensar no bairro, no trajeto do trabalho e no custo total antes de escolher." },
  { name: "Camila Ferreira", image: "/images/lucas-martins/avatar-camila.webp", topic: "Proximidade no caminho", quote: "Foi bom ter espaço para perguntar e entender o próximo passo, sem aquela sensação de precisar decidir tudo de uma vez." },
];

export function LucasTestimonialsSection() {
  return (
    <section className={s.testimonialsSection} aria-labelledby="lucas-testimonials-title">
      <div className={s.testimonialsInner}>
        <div className={s.testimonialsHeading} data-lucas-reveal>
          <div><span className={s.kicker}>ESPAÇO PARA HISTÓRIAS DE NOVOS COMEÇOS</span><h2 id="lucas-testimonials-title">Mais que imóveis.<br /><em>Histórias de pessoas.</em></h2></div>
        </div>
        <div className={s.testimonialsGrid}>
          {testimonials.map((item, index) => (
            <figure className={s.testimonialCard} key={item.name} data-lucas-reveal>
              <div className={s.testimonialTop}><span aria-hidden="true">“</span><span>0{index + 1} / NOVOS COMEÇOS</span></div>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <Image src={item.image} alt={`Retrato de ${item.name}`} width={64} height={64} sizes="56px" />
                <div><strong>{item.name}</strong><span>{item.topic}</span></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
