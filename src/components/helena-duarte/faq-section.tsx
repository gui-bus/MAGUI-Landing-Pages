"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import s from "./page.module.css";

const questions = [
  ["Ainda não sei exatamente o que procuro. Podemos conversar?", "Sim. A primeira conversa serve justamente para organizar prioridades, entender o orçamento e descobrir o que faz sentido para a sua rotina. Você não precisa chegar com todas as respostas."],
  ["Posso pedir uma seleção além dos imóveis desta página?", "Sim. A curadoria parte do seu perfil, e não de uma lista fechada. Informe bairros, tipo de imóvel e características indispensáveis para orientar a busca."],
  ["Como funciona uma visita?", "Depois de entender seu interesse, alinhamos a disponibilidade do imóvel e um horário adequado. A ideia é visitar com tempo para observar os ambientes, o entorno e esclarecer dúvidas."],
  ["Vocês também trabalham com imóveis na planta?", "A proposta de atendimento inclui imóveis prontos e na planta. Apresento as condições, o registro de incorporação, o cronograma e a documentação para que você possa comparar as opções com clareza."],
  ["Tenho um imóvel para vender. Por onde começo?", "Conte onde fica, quais são as características e o seu objetivo. A partir daí, podemos conversar sobre apresentação, documentação e posicionamento."],
];

export function HelenaFaqSection() {
  const [active, setActive] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  return <section className={`${s.section} ${s.faq}`}><div><p className={s.eyebrow}>CONVERSA ABERTA</p><h2>Antes de dar{" "}<br />o próximo <em>passo.</em></h2></div><div className={s.faqList}>{questions.map(([question, answer], index) => <div className={s.faqItem} key={question}>
    <h3><button type="button" id={`helena-question-${index}`} aria-expanded={active === index} aria-controls={`helena-answer-${index}`} onClick={() => setActive(active === index ? null : index)}><span>{question}</span><Plus size={21} className={active === index ? s.faqIconOpen : ""} /></button></h3>
    <AnimatePresence initial={false}>{active === index && <motion.div key={index} id={`helena-answer-${index}`} role="region" aria-labelledby={`helena-question-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ height: { duration: reducedMotion ? 0 : .35, ease: [.22, 1, .36, 1] }, opacity: { duration: reducedMotion ? 0 : .22 } }} className={s.faqAnswer}><p>{answer}</p></motion.div>}</AnimatePresence>
  </div>)}</div></section>;
}
