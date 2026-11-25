"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { User, HouseLine, Wallet, NotePencil, WhatsappLogo, ShieldCheck, MapPin, Clock, ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { helenaWhatsappHref } from "./data";
import { HelenaSelectField } from "./select-field";
import s from "./page.module.css";

const goals = ["Quero comprar", "Procuro um imóvel na planta", "Quero vender meu imóvel", "Quero conhecer possibilidades"];
const budgets = ["Prefiro conversar", "Até R$ 1 milhão", "De R$ 1 a 2 milhões", "De R$ 2 a 3 milhões", "Acima de R$ 3 milhões", "Não se aplica: quero vender"];

export function HelenaContactSection() {
  const [message, setMessage] = useState("");
  const [goal, setGoal] = useState(goals[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [error, setError] = useState("");
  const reducedMotion = useReducedMotion();

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") ?? "").trim();
    if (name.length < 2) {
      setError("Me conte seu nome para começarmos a conversa.");
      (event.currentTarget.elements.namedItem("name") as HTMLInputElement).focus();
      return;
    }
    setError("");
    setMessage(`Olá, Helena! Meu nome é ${name}.\nMeu objetivo: ${values.get("goal")}.\nInvestimento previsto: ${values.get("budget")}.\nO que procuro: ${String(values.get("notes") ?? "").trim() || "Gostaria de conversar para entender as possibilidades."}`);
  }

  return (
    <section id="contato" className={`${s.section} ${s.contactEditorial}`}>
      <div className={s.contactShell}>
        <div className={s.contactPanel} data-helena-reveal>
          <div>
            <p className={s.eyebrow}>O PRÓXIMO CAPÍTULO É SEU</p>
            <h2>
              Vamos encontrar <br />o seu <em>lugar?</em>
            </h2>
            <p className={s.contactPanelLead}>
              Me conte o que você está buscando. A boa escolha começa por uma
              conversa sem pressa.
            </p>
          </div>

          <div className={s.contactConcierge}>
            <div className={s.contactAvatar}>
              <Image
                src="/images/helena-duarte/helena.webp"
                alt="Helena Duarte"
                fill
                sizes="64px"
              />
            </div>
            <div>
              <strong>Helena Duarte</strong>
              <span>Atendimento pessoal e direto</span>
            </div>
          </div>

          <div className={s.contactPanelFooter}>
            <div className={s.contactPanelMeta}>
              <span><Clock size={16} /> Atendimento com hora marcada</span>
              <span><MapPin size={16} /> Curitiba e região metropolitana</span>
            </div>
            <Link
              href={helenaWhatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className={s.contactWhatsappDirect}
            >
              <span>Prefiro conversar pelo WhatsApp</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <form className={s.contactAtelierForm} noValidate onSubmit={prepare} onChange={() => setMessage("")}>
          <div className={s.contactFormHeader}>
            <span className={s.contactFormBadge}>
              <WhatsappLogo size={20} weight="light" />
            </span>
            <div>
              <h3>Uma boa conversa começa aqui.</h3>
              <p>Preencha o essencial e eu já preparo a mensagem para o WhatsApp.</p>
            </div>
          </div>

          <div className={s.nameField}>
            <label className={s.fieldLabel} htmlFor="helena-contact-name">Como posso chamar você?</label>
            <div className={`${s.inputShell} ${error ? s.inputError : ""}`}>
              <User size={19} />
              <input
                id="helena-contact-name"
                name="name"
                autoComplete="given-name"
                required
                minLength={2}
                maxLength={80}
                placeholder="Seu nome"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "helena-name-error" : undefined}
                onInput={() => setError("")}
              />
            </div>
            {error && <p id="helena-name-error" className={s.fieldError} role="alert">{error}</p>}
          </div>

          <div className={s.formRow}>
            <HelenaSelectField
              label="Seu momento"
              name="goal"
              value={goal}
              options={goals}
              icon={<HouseLine size={19} />}
              onChange={value => { setGoal(value); setMessage(""); }}
            />
            <HelenaSelectField
              label="Investimento previsto"
              name="budget"
              value={budget}
              options={budgets}
              icon={<Wallet size={19} />}
              onChange={value => { setBudget(value); setMessage(""); }}
            />
          </div>

          <div className={s.notesField}>
            <label className={s.fieldLabel} htmlFor="helena-contact-notes">O que não pode faltar?</label>
            <div className={`${s.inputShell} ${s.textareaShell}`}>
              <NotePencil size={19} />
              <textarea
                id="helena-contact-notes"
                name="notes"
                maxLength={1000}
                rows={4}
                placeholder="Uma varanda com sol, espaço para a família, seu bairro preferido…"
              />
            </div>
          </div>

          <button type="submit" className={`${s.button} ${s.formSubmit}`}>
            <WhatsappLogo size={20} /> Preparar minha conversa
          </button>

          <p className={s.formPrivacy}>
            <ShieldCheck size={16} /> Você revisa a mensagem antes de enviar pelo WhatsApp.
          </p>

          <AnimatePresence>
            {message && (
              <motion.div
                key="message"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.25 }}
                className={s.formResult}
                role="status"
              >
                <strong>Sua conversa está pronta.</strong>
                <p>{message}</p>
                <Link href={helenaWhatsappHref(message)} target="_blank" rel="noopener noreferrer" className={s.button}>
                  Continuar no WhatsApp
                </Link>
                <small>Uma conversa direta comigo, com atenção ao seu momento e às suas prioridades.</small>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
