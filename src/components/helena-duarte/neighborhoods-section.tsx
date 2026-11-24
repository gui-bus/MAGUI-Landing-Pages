import Image from "next/image";
import Link from "next/link";
import { AmbientIcon } from "./ambient-icon";
import s from "./page.module.css";
export function HelenaNeighborhoodsSection() {
    return <section id="regioes" className={s.neighborhoods}><div className={s.neighborhoodImage} data-helena-reveal><Image src="/images/helena-duarte/casa.webp" alt="Arquitetura integrada a um jardim, referência de uma rotina mais próxima do verde" fill sizes="(max-width: 800px) 100vw, 50vw"/></div><div className={s.neighborhoodCopy}><AmbientIcon kind="plant" /><p className={s.eyebrow}>O ENDEREÇO TAMBÉM É UMA ESCOLHA DE VIDA</p><h2>Não é só onde.{" "}<br />É <em>como viver.</em></h2><p>O caminho até o trabalho, o café a pé, a luz que entra pela janela. Vamos olhar para o que acontece além da porta.</p><div className={s.neighborhoodList}>{[{ name: "Jardim Botânico", text: "Para quem quer o verde como parte da paisagem e da rotina." }, { name: "Cabral", text: "Para quem valoriza uma vida urbana com serviços por perto." }, { name: "Santa Felicidade", text: "Para quem procura espaço, encontros e um ritmo mais residencial." }].map(n => <Link data-helena-reveal key={n.name} href={`#contato`}><h3>{n.name}</h3><p>{n.text}</p><span>Explorar possibilidades</span></Link>)}</div></div></section>;
}
