"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Para quais segmentos a MAGUI.studio desenvolve projetos?",
    answer:
      "Um lançamento que precisa apresentar um novo jeito de morar. Uma clínica que quer transmitir confiança antes da primeira consulta. Cada negócio tem uma história e uma decisão a facilitar. Criamos landing pages e sites que traduzem isso em conteúdo, design e navegação, para marcas de diferentes segmentos.",
  },
  {
    question: "Tenho uma barbearia, uma loja ou outro negócio. Vocês também me atendem?",
    answer:
      "Sim. Atendemos barbearias, restaurantes, lojas, profissionais autônomos e outros negócios. Começamos pela sua oferta, pelo seu público e pelo que torna sua marca única. A partir disso, criamos uma página com identidade própria e um caminho claro para agendar, pedir um orçamento ou conversar com você.",
  },
  {
    question: "Como funciona o processo de criação do início ao lançamento?",
    answer:
      "Começamos com uma conversa de alinhamento para entender seu negócio, público e objetivo de conversão. Em seguida, estruturamos a direção visual, o texto estratégico e o desenvolvimento sob medida, com validações claras em cada etapa até a publicação.",
  },
  {
    question: "Qual é o prazo médio para entrega de um projeto?",
    answer:
      "Landing pages de lançamento e páginas institucionais de alto padrão costumam ser entregues entre 10 e 20 dias úteis, dependendo da complexidade visual, integrações e volume de conteúdo. Todo cronograma é combinado antes de iniciarmos.",
  },
  {
    question: "As páginas são otimizadas para celular, velocidade e Google (SEO)?",
    answer:
      "Sim. Cada página é pensada desde o início para oferecer uma experiência impecável no celular e no desktop, com carregamento rápido, código limpo e estrutura semântica preparada para indexação no Google e campanhas de tráfego pago.",
  },
  {
    question: "Vocês oferecem suporte após a publicação do site?",
    answer:
      "Oferecemos acompanhamento pós-lançamento para garantir que tudo rode com estabilidade, além de planos opcionais de evolução contínua, ajustes de campanha e novas páginas conforme o crescimento da sua marca.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="studio-faq" aria-labelledby="faq-title">
      <div className="studio-faq-grid">
        <div className="studio-faq-intro">
          <p className="studio-label">Dúvidas frequentes</p>
          <h2 id="faq-title">Perguntas frequentes.</h2>
          <p className="studio-faq-lead">
            Respostas para as dúvidas antes de começarmos.
          </p>
        </div>

        <div className="studio-faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={item.question}
                className={`studio-faq-item${isOpen ? " is-open" : ""}`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="studio-faq-trigger"
                  >
                    <span className="studio-faq-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="studio-faq-question">{item.question}</span>
                    <span className="studio-faq-icon" aria-hidden="true">
                      <Plus size={15} weight="bold" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="studio-faq-panel"
                    >
                      <p className="studio-faq-answer">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
