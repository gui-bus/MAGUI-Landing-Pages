"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { LucasIcon } from "./icon";
import { lucasWhatsappHref } from "./data";
import s from "./page.module.css";

export function LucasContactSection() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const reduced = useReducedMotion();

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    if (name.length < 2) {
      setError("Me conte seu nome para começarmos.");
      (
        event.currentTarget.elements.namedItem("name") as HTMLInputElement
      ).focus();
      return;
    }
    setError("");
    setMessage(
      `Oi, Lucas! Meu nome é ${name}. Estou em busca do meu primeiro imóvel.\nMeu momento: ${values.get("interest")}.\nO que gostaria de contar: ${String(values.get("notes") ?? "").trim() || "Quero entender os próximos passos."}`,
    );
  }

  return (
    <section id="contato" className={s.section}>
      <div className={s.container}>
        <div className={s.contactWrap}>
          <div className={s.contactHeader} data-lucas-reveal>
            <div className={s.contactHeaderTitle}>
              <span className={s.kicker}>DIRETO PARA O LUCAS</span>
              <h2>
                O primeiro passo <span>é uma boa conversa.</span>
              </h2>
            </div>
            <p>
              Conte um pouco sobre você. Eu quero entender seu momento,
              responder às suas dúvidas e ajudar a organizar o próximo passo.
            </p>
          </div>

          <form
            noValidate
            onSubmit={prepare}
            onChange={() => setMessage("")}
            className={s.letterForm}
            data-lucas-reveal
          >
            <div className={s.letterMasthead}>
              <div className={s.letterRecipient}>
                <div className={s.recipientMonogram} aria-hidden="true">
                  <span>LM</span>
                </div>
                <p>
                  <span className={s.mono}>PARA</span>
                  <strong>Lucas Martins</strong>
                  <small>Seu corretor, do começo à chave.</small>
                </p>
              </div>
              <LucasIcon name="conversation" size={34} />
            </div>

            <div className={s.letterBody}>
              <span className={s.letterGreeting}>Olá, Lucas.</span>

              <div className={s.fieldGroup}>
                <label htmlFor="lucas-name">
                  Como você gosta de ser chamado?
                </label>
                <input
                  id="lucas-name"
                  name="name"
                  autoComplete="given-name"
                  placeholder="Meu nome é..."
                  maxLength={80}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "lucas-name-error" : undefined}
                  onInput={() => setError("")}
                  required
                />
                {error && (
                  <p role="alert" id="lucas-name-error" className={s.fieldError}>
                    {error}
                  </p>
                )}
              </div>

              <fieldset className={s.letterChoices}>
                <legend>Em que posso ajudar?</legend>
                {[
                  "Ainda estou pesquisando",
                  "Quero conhecer imóveis",
                  "Quero entender o financiamento",
                ].map((interest, index) => (
                  <label key={interest}>
                    <input
                      type="radio"
                      name="interest"
                      value={interest}
                      defaultChecked={index === 0}
                    />
                    <span>{interest}</span>
                    <LucasIcon name="check" size={16} />
                  </label>
                ))}
              </fieldset>

              <div className={s.fieldGroup}>
                <label htmlFor="lucas-notes">
                  Quer me contar mais alguma coisa? <small>(opcional)</small>
                </label>
                <textarea
                  id="lucas-notes"
                  name="notes"
                  rows={2}
                  maxLength={1000}
                  placeholder="Tenho um plano, uma dúvida, um bairro em mente..."
                />
              </div>

              <div className={s.letterSend}>
                <p>Você confere a mensagem antes de enviar pelo WhatsApp.</p>
                <button type="submit" className={s.button}>
                  Preparar minha mensagem <span aria-hidden="true">↗</span>
                </button>
              </div>

              <AnimatePresence>
                {message && (
                  <motion.div
                    key="message"
                    className={s.letterResult}
                    role="status"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduced ? 0 : 0.25 }}
                  >
                    <div className={s.letterResultInner}>
                      <strong>Pronto para conversar.</strong>
                      <p>{message}</p>
                      <Link
                        href={lucasWhatsappHref(message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.button}
                      >
                        Continuar no WhatsApp
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

          <div className={s.letterAlternative}>
            <span>Prefere ir direto ao assunto?</span>
            <Link
              href={lucasWhatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale comigo pelo WhatsApp ↗
            </Link>
            <span className={s.mono}>Curitiba e região metropolitana</span>
          </div>
        </div>
      </div>
    </section>
  );
}
