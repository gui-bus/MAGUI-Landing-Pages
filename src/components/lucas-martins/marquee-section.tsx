import s from "./page.module.css";

const items = [
  "Seu primeiro imóvel",
  "Atendimento pessoal",
  "São Paulo e região",
  "Do começo à chave",
];

const repeatedItems = [...items, ...items, ...items, ...items];

export function LucasMarqueeSection() {
  return (
    <section
      id="acompanhamento"
      className={s.marquee}
      aria-label="Seu primeiro imóvel, atendimento pessoal em São Paulo e região"
    >
      <div className={s.marqueeWindow}>
        <div className={s.marqueeTrack} aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className={s.marqueeGroup} key={copy}>
              {repeatedItems.map((item, index) => (
                <span key={`${copy}-${index}`}>
                  <i className={s.marqueeDivider} />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

