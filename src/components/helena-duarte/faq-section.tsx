"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Plus } from "@phosphor-icons/react";
import Link from "next/link";
import s from "./page.module.css";

const questions = [
  ["Ainda não sei exatamente o que procuro. Podemos conversar?", "Sim. A primeira conversa serve justamente para organizar prioridades, entender o orçamento e descobrir o que faz sentido para a sua rotina. Você não precisa chegar com todas as respostas."],
  ["Posso pedir uma seleção além dos imóveis desta página?", "Sim. A curadoria parte do seu perfil, e não de uma lista fechada. Informe bairros, tipo de imóvel e características indispensáveis para orientar a busca."],
  ["Como funciona uma visita?", "Depois de entender seu interesse, alinhamos a disponibilidade do imóvel e um horário adequado. A ideia é visitar com tempo para observar os ambientes, o entorno e esclarecer dúvidas."],
  ["Vocês também trabalham com imóveis na planta?", "A proposta de atendimento inclui imóveis prontos e na planta. Apresento as condições, o registro de incorporação, o cronograma e a documentação para que você possa comparar as opções com clareza."],
  ["Tenho um imóvel para vender. Por onde começo?", "Conte onde fica, quais são as características e o seu objetivo. A partir daí, podemos conversar sobre apresentação, documentação e posicionamento."],
];

export function HelenaFaqSection() {
  const [active, setActive] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();

  return (
    <section className={`${s.section} ${s.faqEditorial}`}>
      <div className={s.faqIntro} data-helena-reveal>
        <p className={s.eyebrow}>CONVERSA ABERTA</p>
        <h2>
          Antes de dar <br />o próximo <em>passo.</em>
        </h2>
        <p className={s.faqLead}>
          Respostas diretas sobre como funciona a curadoria, as visitas e o
          acompanhamento em cada etapa.
        </p>
        <Link href="#contato" className={s.faqJump}>
          <span>Tem outra pergunta? Fale comigo</span>
          <ArrowDownRight size={17} />
        </Link>
      </div>

      <div className={s.faqEditorialList}>
        {questions.map(([question, answer], index) => {
          const isOpen = active === index;
          return (
            <div
              className={`${s.faqEditorialItem} ${isOpen ? s.faqEditorialItemOpen : ""}`}
              key={question}
            >
              <h3>
                <button
                  type="button"
                  id={`helena-question-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`helena-answer-${index}`}
                  onClick={() => setActive(isOpen ? null : index)}
                >
                  <span className={s.faqNumber}>0{index + 1}</span>
                  <span className={s.faqQuestionText}>{question}</span>
                  <span className={s.faqPlusWrap} aria-hidden="true">
                    <Plus size={16} className={isOpen ? s.faqIconOpen : ""} />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={index}
                    id={`helena-answer-${index}`}
                    role="region"
                    aria-labelledby={`helena-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: reducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: reducedMotion ? 0 : 0.22 },
                    }}
                    className={s.faqEditorialAnswer}
                  >
                    <p>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
