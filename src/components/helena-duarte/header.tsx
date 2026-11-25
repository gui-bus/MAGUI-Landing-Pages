"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MapPin, WhatsappLogo, X } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import helenaWordmark from "../../../public/images/helena-duarte/wordmark-white.webp";
import { helenaNav, helenaWhatsappHref } from "./data";
import s from "./page.module.css";

export function HelenaHeader() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const destination = useRef<string | null>(null);
  const reducedMotion = useReducedMotion();

  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    destination.current = href;
    setOpen(false);
  }

  function finishClosing() {
    dialog.current?.close();
    trigger.current?.focus({ preventScroll: true });
    const href = destination.current;
    destination.current = null;
    if (!href) return;
    const target = document.getElementById(href.slice(1));
    window.history.pushState(null, "", href);
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
  }

  useEffect(() => {
    if (!open) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const breakpoint = window.matchMedia("(min-width: 901px)");
    const onResize = () => { if (breakpoint.matches) setOpen(false); };
    breakpoint.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      breakpoint.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className={s.header}>
      <Link href="#inicio" className={s.headerLogo} aria-label="Helena Duarte, início"><Image src={helenaWordmark} alt="Helena Duarte" width={1348} height={661} sizes="(max-width: 540px) 125px, 150px" preload /></Link>
      <nav aria-label="Navegação principal" className={s.desktopNav}>{helenaNav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link href="#contato" className={`${s.button} ${s.headerCta}`}>Vamos conversar</Link>
      <button ref={trigger} className={s.menuButton} type="button" aria-label="Abrir menu" aria-expanded={open} aria-haspopup="dialog" aria-controls="helena-menu" onClick={() => setOpen(true)}><span /><span /></button>
      <dialog ref={dialog} id="helena-menu" className={s.mobileMenuDialog} aria-labelledby="helena-menu-title" onCancel={event => { event.preventDefault(); setOpen(false); }} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
        <AnimatePresence onExitComplete={finishClosing}>
          {open && <motion.div className={s.mobileMenuPanel} initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -12 }} transition={{ duration: reducedMotion ? 0 : .28 }}>
            <div className={s.mobileMenuTop}><Link href="#inicio" onClick={event => navigate(event, "#inicio")} aria-label="Helena Duarte, início"><Image src={helenaWordmark} alt="Helena Duarte" width={1348} height={661} sizes="145px" /></Link><button autoFocus type="button" aria-label="Fechar menu" className={s.menuClose} onClick={() => setOpen(false)}><X size={22} weight="light" /></button></div>
            <div className={s.mobileMenuMain}><p id="helena-menu-title" className={s.eyebrow}>O SEU PRÓXIMO LUGAR</p><nav aria-label="Navegação mobile">{helenaNav.map((item, index) => <motion.div key={item.href} initial={{ opacity: 0, x: reducedMotion ? 0 : 14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .3, delay: reducedMotion ? 0 : .06 * index }}><Link href={item.href} onClick={event => navigate(event, item.href)}>{item.label}<span aria-hidden="true">+</span></Link></motion.div>)}</nav><Link href="#contato" className={`${s.button} ${s.buttonLight}`} onClick={event => navigate(event, "#contato")}>Vamos conversar</Link></div>
            <div className={s.mobileMenuBottom}><span><MapPin size={16} /> Curitiba e região</span><Link href={helenaWhatsappHref()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}><WhatsappLogo size={19} /> Atendimento pessoal</Link></div>
          </motion.div>}
        </AnimatePresence>
      </dialog>
    </header>
  );
}
