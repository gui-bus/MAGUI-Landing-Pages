import Link from "next/link";
import s from "./page.module.css";

const numbers = [
  { value: "8", title: "anos de experiência", text: "Uma trajetória dedicada ao mercado imobiliário de São Paulo e região." },
  { value: "+240", title: "imóveis vendidos", text: "Experiência para orientar cada escolha, da primeira visita à entrega das chaves." },
  { value: "+200", title: "famílias atendidas", text: "Pessoas que encontraram orientação próxima para começar um novo capítulo." },
];

export function LucasNumbersSection() {
  return (
    <section className={s.numbersSection} aria-labelledby="lucas-numbers-title">
      <div className={s.numbersInner}>
        <div className={s.numbersHeading} data-lucas-reveal>
          <span className={s.kicker}>EXPERIÊNCIA QUE ACOMPANHA VOCÊ</span>
          <h2 id="lucas-numbers-title">Uma trajetória.<em>Muitos novos começos.</em></h2>
          <Link href="#contato">Converse com o Lucas <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={s.numbersGrid}>
          {numbers.map((item) => (
            <div className={s.numberItem} key={item.title} data-lucas-reveal>
              <span className={s.numberValue}>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
