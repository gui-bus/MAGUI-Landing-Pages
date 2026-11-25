"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { LucasIcon, type LucasIconName } from "./icon";
import { lucasWhatsappHref } from "./data";
import s from "./page.module.css";

const steps = [
  {
    question: "Em que momento você está?",
    hint: "Pode começar do começo. Está tudo bem.",
    options: [
      "Quero sair do aluguel",
      "Quero conquistar minha independência",
      "Quero um espaço para a família",
    ],
  },
  {
    question: "O que você mais quer entender?",
    hint: "Vamos dar atenção ao que está te deixando com dúvidas.",
    options: [
      "Entrada e financiamento",
      "Minha Casa, Minha Vida",
      "Quais imóveis combinam comigo",
    ],
  },
  {
    question: "Onde você gostaria de morar?",
    hint: "A rotina importa tanto quanto a planta do apartamento.",
    options: [
      "São Paulo",
      "Santo André",
      "Estou aberto a conhecer a região",
    ],
  },
];

export function LucasPlanSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [done, setDone] = useState(false);
  const title = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const icons: LucasIconName[] = ["home", "credit", "map"];
  const stepIcon = icons[step];
  const focusPending = useRef(false);

  function advance() {
    focusPending.current = true;
    if (step === steps.length - 1) setDone(true);
    else setStep(step + 1);
  }

  function focusStep(definition: unknown) {
    if (
      focusPending.current &&
      typeof definition === "object" &&
      definition !== null &&
      "opacity" in definition &&
      definition.opacity === 1
    ) {
      title.current?.focus({ preventScroll: true });
      focusPending.current = false;
    }
  }

  const message = `Oi, Lucas! Quero organizar a compra do meu primeiro imóvel.\nMeu momento: ${answers[0]}.\nMinha principal dúvida: ${answers[1]}.\nRegião: ${answers[2]}.`;

  return (
    <section id="seu-plano" className={s.section}>
      <div className={s.container}>
        <div className={s.planWrap}>
          <div className={s.planHeader} data-lucas-reveal>
            <span className={s.kicker}>O SEU PONTO DE PARTIDA</span>
            <h2>
              Seu próximo passo, <span>com mais clareza.</span>
            </h2>
            <p>
              Três perguntas para entender o seu momento e preparar uma conversa
              mais próxima do que você procura.
            </p>
          </div>

          <div className={s.planModule} data-lucas-reveal>
            <div className={s.planBannerPhoto}>
              <Image
                src="/images/lucas-martins/primeiro-lar.webp"
                alt="Casal organizando a mudança para o primeiro lar"
                fill
                sizes="(max-width: 960px) 100vw, 900px"
              />
            </div>

            <div className={s.planBody}>
              <div
                className={s.progress}
                aria-label={done ? "Plano organizado" : `Etapa ${step + 1} de 3`}
              >
                {steps.map((_, index) => (
                  <span
                    key={index}
                    className={done || index <= step ? s.progressActive : ""}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {done ? (
                  <motion.div
                    onAnimationComplete={focusStep}
                    key="done"
                    className={s.planResult}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: reduced ? 0 : 0.2 }}
                  >
                    <span className={s.planResultIcon}>
                      <LucasIcon name="check" size={32} />
                    </span>
                    <h3 ref={title} tabIndex={-1}>
                      Um ponto de partida para a sua compra.
                    </h3>
                    <p>Para o seu momento, nossa conversa vai passar por:</p>
                    <ul>
                      <li>
                        <Check size={18} weight="bold" />
                        Organizar entrada, parcelas e custos da compra.
                      </li>
                      <li>
                        <Check size={18} weight="bold" />
                        Esclarecer{" "}
                        {answers[1] === "Minha Casa, Minha Vida"
                          ? "as regras e as possibilidades do Minha Casa, Minha Vida"
                          : answers[1] === "Entrada e financiamento"
                            ? "as possibilidades de entrada e financiamento"
                            : "as características indispensáveis do seu primeiro lar"}
                        .
                      </li>
                      <li>
                        <Check size={18} weight="bold" />
                        Buscar opções em{" "}
                        {answers[2] === "Estou aberto a conhecer a região"
                          ? "São Paulo e região"
                          : answers[2]}
                        .
                      </li>
                    </ul>
                    <div className={s.planResultActions}>
                      <Link
                        href={lucasWhatsappHref(message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.button}
                      >
                        Levar meu plano para o Lucas
                      </Link>
                      <button
                        type="button"
                        className={s.resetButton}
                        onClick={() => {
                          focusPending.current = true;
                          setDone(false);
                          setStep(0);
                          setAnswers(["", "", ""]);
                        }}
                      >
                        Refazer minhas respostas
                      </button>
                    </div>
                    <small>
                      Este roteiro organiza a conversa. Condições de
                      financiamento dependem da análise da instituição
                      financeira.
                    </small>
                  </motion.div>
                ) : (
                  <motion.div
                    onAnimationComplete={focusStep}
                    key={step}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: reduced ? 0 : 0.18 }}
                  >
                    <span className={`${s.stepCaption} ${s.mono}`}>
                      <LucasIcon name={stepIcon} size={18} /> PASSO {step + 1}{" "}
                      DE 3
                    </span>
                    <h3 ref={title} tabIndex={-1}>
                      {steps[step].question}
                    </h3>
                    <p className={s.stepHint}>{steps[step].hint}</p>

                    <fieldset className={s.planChoices}>
                      <legend className={s.srOnly}>
                        {steps[step].question}
                      </legend>
                      {steps[step].options.map((option) => (
                        <label
                          key={option}
                          className={
                            answers[step] === option ? s.choiceSelected : ""
                          }
                        >
                          <input
                            type="radio"
                            name={`lucas-step-${step}`}
                            value={option}
                            checked={answers[step] === option}
                            onChange={() =>
                              setAnswers((current) =>
                                current.map((answer, index) =>
                                  index === step ? option : answer,
                                ),
                              )
                            }
                          />
                          <span>{option}</span>
                          <span className={s.radioIndicator} aria-hidden="true">
                            {answers[step] === option && (
                              <Check size={13} weight="bold" />
                            )}
                          </span>
                        </label>
                      ))}
                    </fieldset>

                    <div className={s.planControls}>
                      {step > 0 && (
                        <button
                          type="button"
                          className={s.resetButton}
                          onClick={() => {
                            focusPending.current = true;
                            setStep(step - 1);
                          }}
                        >
                          Voltar
                        </button>
                      )}
                      <button
                        type="button"
                        className={s.button}
                        disabled={!answers[step]}
                        onClick={advance}
                      >
                        {step === 2 ? "Ver meu ponto de partida" : "Continuar"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
