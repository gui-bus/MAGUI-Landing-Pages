"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { User, HouseLine, Wallet, NotePencil, WhatsappLogo, ShieldCheck, MapPin, Clock } from "@phosphor-icons/react";
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

  return <section id="contato" className={`${s.section} ${s.contact}`}>
    <div className={s.contactIntro}><p className={s.eyebrow}>O PRÓXIMO CAPÍTULO É SEU</p><h2>Vamos encontrar{" "}<br />o seu <em>lugar?</em></h2><p>Me conte o que você está buscando.{" "}<br />A boa escolha começa por aqui.</p><Link href={helenaWhatsappHref()} target="_blank" rel="noopener noreferrer" className={s.textLink}>Prefiro conversar pelo WhatsApp</Link><div className={s.contactMeta}><span><Clock size={17} /> Atendimento com hora marcada</span><span><MapPin size={17} /> Curitiba e região metropolitana</span></div></div>
    <form className={s.form} noValidate onSubmit={prepare} onChange={() => setMessage("")}>
      <div className={s.formHeading}><span><WhatsappLogo size={23} weight="light" /></span><div><h3>Uma boa conversa começa aqui.</h3><p>Atendimento direto com a Helena.</p></div></div>
      <div className={s.nameField}><label className={s.fieldLabel} htmlFor="helena-contact-name">Como posso chamar você?</label><div className={`${s.inputShell} ${error ? s.inputError : ""}`}><User size={19} /><input id="helena-contact-name" name="name" autoComplete="given-name" required minLength={2} maxLength={80} placeholder="Seu nome" aria-invalid={Boolean(error)} aria-describedby={error ? "helena-name-error" : undefined} onInput={() => setError("")} /></div>{error && <p id="helena-name-error" className={s.fieldError} role="alert">{error}</p>}</div>
      <div className={s.formRow}><HelenaSelectField label="Seu momento" name="goal" value={goal} options={goals} icon={<HouseLine size={19} />} onChange={value => { setGoal(value); setMessage(""); }} /><HelenaSelectField label="Investimento previsto" name="budget" value={budget} options={budgets} icon={<Wallet size={19} />} onChange={value => { setBudget(value); setMessage(""); }} /></div>
      <div className={s.notesField}><label className={s.fieldLabel} htmlFor="helena-contact-notes">O que não pode faltar?</label><div className={`${s.inputShell} ${s.textareaShell}`}><NotePencil size={19} /><textarea id="helena-contact-notes" name="notes" maxLength={1000} rows={4} placeholder="Uma varanda com sol, espaço para a família, seu bairro preferido…" /></div></div>
      <button type="submit" className={`${s.button} ${s.formSubmit}`}><WhatsappLogo size={21} /> Preparar minha conversa</button>
      <p className={s.formPrivacy}><ShieldCheck size={17} /> Você revisa a mensagem antes de enviar pelo WhatsApp.</p>
      <AnimatePresence>{message && <motion.div key="message" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reducedMotion ? 0 : .25 }} className={s.formResult} role="status"><strong>Sua conversa está pronta.</strong><p>{message}</p><Link href={helenaWhatsappHref(message)} target="_blank" rel="noopener noreferrer" className={s.button}>Continuar no WhatsApp</Link><small>Uma conversa direta comigo, com atenção ao seu momento e às suas prioridades.</small></motion.div>}</AnimatePresence>
    </form>
  </section>;
}
