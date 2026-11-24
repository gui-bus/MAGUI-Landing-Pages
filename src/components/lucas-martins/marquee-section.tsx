import s from "./page.module.css";
const items = ["Seu primeiro imóvel", "Atendimento pessoal", "Curitiba e região", "Do começo à chave"];
export function LucasMarqueeSection() {
 return <section id="acompanhamento" className={s.marquee} aria-label="Seu primeiro imóvel, atendimento pessoal em Curitiba e região"><div className={s.marqueeWindow}><div className={s.marqueeTrack} aria-hidden="true">{[0,1].map(i=><div className={s.marqueeGroup} key={i}>{items.map(item=><span key={item}><i className={s.marqueeDivider}/>{item}</span>)}</div>)}</div></div></section>;
}

