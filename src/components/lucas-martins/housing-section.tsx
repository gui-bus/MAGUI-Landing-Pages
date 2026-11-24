import Image from "next/image";
import Link from "next/link";
import { LucasIcon } from "./icon";
import { housingSource } from "./data";
import s from "./page.module.css";
const highlights = [
 {number:"01",icon:"home" as const,title:"Possibilidade de subsídio",text:"O benefício depende da renda familiar, da localização e das regras de enquadramento."},
 {number:"02",icon:"credit" as const,title:"FGTS no planejamento",text:"O saldo pode ajudar na entrada, desde que sejam atendidas as condições de uso."},
 {number:"03",icon:"document" as const,title:"Financiamento com clareza",text:"A instituição financeira avalia o crédito e apresenta as condições para a contratação."},
];
export function LucasHousingSection() {
 return <section id="minha-casa-minha-vida" className={`${s.section} ${s.mcmvSection}`}><div className={s.container}>
  <div className={s.mcmvHeading} data-lucas-reveal><span className={s.mcmvLabel}>MCMV</span><h2>Entender as possibilidades{" "}<br/><span>também abre portas.</span></h2><p>Eu ajudo você a compreender o Minha Casa, Minha Vida e a organizar as informações para uma análise do seu perfil.</p></div>
  <figure className={s.mcmvPhoto} data-lucas-reveal><Image src="/images/lucas-martins/detalhes-do-lar.webp" alt="Chave, café e uma planta de apartamento sobre uma mesa iluminada" fill sizes="88vw"/><figcaption>PLANEJAR A COMPRA TAMBÉM É CUIDAR DO SEU FUTURO.</figcaption></figure>
  <div className={s.mcmvTopics}>{highlights.map(item=><article key={item.title} className={s.mcmvTopic} data-lucas-reveal><div className={s.mcmvTopicTop}><LucasIcon name={item.icon} size={30}/><span>{item.number}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
  <div className={s.mcmvNextStep}><div><span className={s.kicker}>O PRÓXIMO PASSO É ENTENDER O SEU MOMENTO</span><p>Vamos conversar sobre as suas possibilidades?</p></div><Link href="#contato" className={s.button}>Converse com o Lucas <span aria-hidden="true">↗</span></Link></div>
  <div className={s.mcmvFootnote}><Link href={housingSource} target="_blank" rel="noopener noreferrer">Informações oficiais do programa ↗</Link><p>Atendimento imobiliário independente. Aprovação e benefícios são definidos pelos agentes responsáveis pelo programa.</p></div>
 </div></section>;
}

