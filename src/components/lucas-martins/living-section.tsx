import Image from "next/image";
import { LucasIcon } from "./icon";
import s from "./page.module.css";
const principles = [
 {icon:"conversation" as const,title:"Escutar vem primeiro.",text:"Eu quero entender seu momento, sua rotina e o que essa mudança representa."},
 {icon:"document" as const,title:"Clareza em cada etapa.",text:"Custos, documentos e possibilidades explicados em uma conversa direta."},
 {icon:"key" as const,title:"Presença até a chave.",text:"Um acompanhamento pessoal para decidir com mais tranquilidade."},
];
export function LucasLivingSection() {
 return <section id="meu-jeito" className={s.livingSection}><span className={s.backdropWord} aria-hidden="true">Perto.</span><div className={s.livingHeader} data-lucas-reveal><span className={s.kicker}>02 / MEU JEITO DE ACOMPANHAR</span><h2>O imóvel é sobre{" "}<br /><em>a vida que cabe nele.</em></h2><p>Antes de falar de metros quadrados, vamos falar de você. O caminho até o trabalho, os planos de família e o bairro que combina com a sua rotina.</p></div>
 <div className={s.livingGallery}><figure className={s.livingInterior} data-lucas-reveal><div className={s.livingPhotoWrap}><Image src="/images/lucas-martins/interior-editorial.webp" alt="Sala com luz natural e vista para árvores" fill sizes="(max-width: 800px) 100vw, 65vw" /></div><figcaption>UM ESPAÇO PARA O QUE VEM DEPOIS.</figcaption></figure><figure className={s.livingPortrait} data-lucas-reveal><div className={s.livingPhotoWrap}><Image src="/images/lucas-martins/lucas-natural-retrato.webp" alt="Retrato de Lucas Martins em seu escritório" fill loading="eager" unoptimized sizes="(max-width: 540px) 42vw, 27vw" /></div><figcaption><strong>Olhar atento.{" "}<br /><em>Conversa aberta.</em></strong></figcaption></figure></div>
 <div className={s.principles}>{principles.map((item,i)=><article className={s.principleItem} key={item.title} data-lucas-reveal><div className={s.principleMeta}><span>0{i+1}</span></div><LucasIcon name={item.icon} size={170} className={s.principleBackdrop}/><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>;
}

