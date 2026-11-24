import { LucasIcon, type LucasIconName } from "./icon";
import s from "./page.module.css";
const stages: {title:string;text:string;icon:LucasIconName}[]=[
 {title:"Primeiro, você.",text:"Uma conversa sobre a sua rotina, suas prioridades e o que você espera dessa mudança.",icon:"conversation"},
 {title:"Um plano possível.",text:"Entrada, orçamento e documentação organizados para avaliar as condições com a instituição financeira.",icon:"credit"},
 {title:"Escolher com clareza.",text:"Visitas e comparações de localização, planta e custo total, sempre com orientação próxima.",icon:"map"},
 {title:"Até a sua chave.",text:"Acompanhamento da proposta à documentação, com cada etapa explicada para você.",icon:"key"},
];
export function LucasProcessSection() {
 return <section id="como-trabalho" className={`${s.section} ${s.journeySection}`}><div className={s.container}>
  <div className={s.journeyHeading} data-lucas-reveal><span className={s.kicker}>COMO EU ACOMPANHO A SUA COMPRA</span><h2>Um passo de cada vez.{" "}<br /><em>Com direção.</em></h2></div>
  <ol className={s.journeyList}>{stages.map((stage,index)=><li key={stage.title} data-lucas-reveal><span className={s.journeyNumber}>0{index+1}</span><h3>{stage.title}</h3><p>{stage.text}</p><LucasIcon name={stage.icon} size={30}/></li>)}</ol>
  <div className={s.journeyNote} data-lucas-reveal><LucasIcon name="document" size={29}/><p><strong>A organização também faz parte do caminho.</strong> Eu oriento você sobre os documentos necessários e os canais seguros para compartilhar as informações. A lista final depende da operação e da instituição financeira.</p></div>
 </div></section>;
}

