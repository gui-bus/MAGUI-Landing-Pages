"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { lucasWhatsappHref } from "./data";
import s from "./page.module.css";
const topics=[
 {label:"Primeiros passos",question:"Posso conversar sem saber se consigo comprar?",answer:"Pode. A nossa primeira conversa é para entender seu momento, suas prioridades e o que você precisa organizar. Não é preciso chegar com todas as respostas."},
 {label:"Entrada",question:"Preciso ter toda a entrada agora?",answer:"A entrada varia conforme o imóvel, o seu perfil e as condições da operação. Eu ajudo a organizar o orçamento e as perguntas que você deve levar para a análise financeira."},
 {label:"Financiamento",question:"Quem aprova o meu financiamento?",answer:"A instituição financeira faz a análise e define as condições. Meu papel é explicar as etapas, ajudar na organização das informações e acompanhar as dúvidas durante a compra."},
 {label:"MCMV",question:"Todo imóvel entra no Minha Casa, Minha Vida?",answer:"Não. As regras do programa, o enquadramento do imóvel e o perfil de quem compra precisam ser verificados. Podemos olhar juntos para essas possibilidades antes de avançar."},
];
export function LucasFaqSection(){
 const [active,setActive]=useState(0);
 const tabs=useRef<(HTMLButtonElement|null)[]>([]);
 const reduced=useReducedMotion();
 function move(event:KeyboardEvent<HTMLButtonElement>,index:number){
  const next=event.key==="ArrowRight"?(index+1)%topics.length:event.key==="ArrowLeft"?(index+topics.length-1)%topics.length:event.key==="Home"?0:event.key==="End"?topics.length-1:null;
  if(next===null)return;event.preventDefault();setActive(next);tabs.current[next]?.focus();
 }
 return <section id="duvidas" className={`${s.section} ${s.questionsSection}`}><div className={s.container}>
  <div className={s.questionsHeading} data-lucas-reveal><span className={s.kicker}>INFORMAÇÃO PARA DECIDIR MELHOR</span><h2>Dúvidas sobre{" "}<br/><span>o primeiro imóvel.</span></h2><p>Da primeira conversa ao financiamento, entenda os pontos que costumam gerar perguntas.</p></div>
  <div className={s.questionsTabs} role="tablist" aria-label="Assuntos sobre a primeira compra">{topics.map((topic,index)=><button key={topic.label} type="button" role="tab" id={`lucas-topic-${index}`} aria-controls="lucas-topic-panel" aria-selected={active===index} tabIndex={active===index?0:-1} ref={node=>{tabs.current[index]=node;}} onKeyDown={event=>move(event,index)} onClick={()=>setActive(index)}><span>0{index+1}</span>{topic.label}<span aria-hidden="true">↗</span></button>)}</div>
  <div className={s.questionsCard}><div className={s.questionsPhoto}><Image src="/images/lucas-martins/lucas-natural-escuta.webp" alt="Lucas Martins em atendimento" fill loading="eager" unoptimized sizes="(max-width: 700px) 88vw, 32vw"/></div><div className={s.questionsContent}><div id="lucas-topic-panel" role="tabpanel" aria-labelledby={`lucas-topic-${active}`} tabIndex={0} className={s.questionsPanel}>
   <AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.15}}><span className={s.questionSubject}>{topics[active].label} / 0{active+1}</span><h3>{topics[active].question}</h3><p>{topics[active].answer}</p></motion.div></AnimatePresence>
  </div><div className={s.questionsAuthor}><div className={s.questionsPerson}><p><strong>Lucas Martins</strong><span>Orientação pessoal na sua primeira compra.</span></p></div><Link href={lucasWhatsappHref()} target="_blank" rel="noopener noreferrer">Ficou outra dúvida? Fale comigo <span aria-hidden="true">↗</span></Link></div></div></div>
 </div></section>;
}

