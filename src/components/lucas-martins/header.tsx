"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import houseIcon from "../../../public/images/lucas-martins/brand-icon-house.png";
import { lucasNav } from "./data";
import s from "./page.module.css";

export function LucasHeader() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const pending = useRef<string | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const query = matchMedia("(min-width: 1051px)");
    const resize = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", resize);
    return () => {
      document.body.style.overflow = previous;
      query.removeEventListener("change", resize);
    };
  }, [open]);

  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    pending.current = href;
    setOpen(false);
  }

  function finish() {
    dialog.current?.close();
    trigger.current?.focus({ preventScroll: true });
    const href = pending.current;
    pending.current = null;
    if (!href) return;
    const target = document.getElementById(href.slice(1));
    history.pushState(null, "", href);
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ behavior: reduced ? "instant" : "smooth" });
  }

  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.headerInner}`}>
        <Link href="#inicio" aria-label="Lucas Martins, início" className={s.logo}>
          <Image
            src="/images/lucas-martins/wordmark-stacked-light.webp"
            alt="Lucas Martins"
            width={1361}
            height={582}
            sizes="(max-width: 600px) 96px, 120px"
            preload
          />
        </Link>

        <nav aria-label="Navegação principal" className={s.desktopNav}>
          {lucasNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contato" className={`${s.button} ${s.headerCta}`}>
          Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          ref={trigger}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-controls="lucas-menu"
          className={s.menuTrigger}
          onClick={() => setOpen(true)}
        >
          <List size={22} />
        </button>
      </div>

      <dialog
        ref={dialog}
        id="lucas-menu"
        className={s.menuDialog}
        aria-label="Menu de navegação"
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
      >
        <AnimatePresence onExitComplete={finish}>
          {open && (
            <motion.div
              className={s.menuPanel}
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                closed: { x: reduced ? 0 : "100%", opacity: reduced ? 0 : 1, transition: { duration: reduced ? 0 : 0.3, ease: [0.76, 0, 0.24, 1] } },
                open: { x: 0, opacity: 1, transition: { duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delayChildren: reduced ? 0 : 0.15, staggerChildren: reduced ? 0 : 0.065 } },
              }}
            >
              <Image src={houseIcon} alt="" aria-hidden="true" className={s.menuHouse} sizes="420px" />
              <div className={s.menuTop}>
                <span className={s.menuBrand}>
                  <Image src="/images/lucas-martins/wordmark-stacked-light.webp" alt="Lucas Martins" width={1361} height={582} sizes="128px" />
                </span>
                <button
                  autoFocus
                  aria-label="Fechar menu"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>

              <div className={s.menuLinks}>
                <span>UM NOVO CAPÍTULO COMEÇA AQUI</span>
                <nav aria-label="Navegação mobile">
                  {lucasNav.map((item, index) => (
                    <motion.div key={item.href} variants={{ closed: { opacity: 0, y: reduced ? 0 : 24 }, open: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.45 } } }}>
                    <Link
                      href={item.href}
                      onClick={(event) => navigate(event, item.href)}
                    >
                      <span className={s.menuNumber}>0{index + 1}</span>
                      <span>{item.label}</span>
                      <ArrowUpRight size={24} aria-hidden="true" />
                    </Link>
                    </motion.div>
                  ))}
                </nav>
                <Link
                  href="#contato"
                  className={s.menuContact}
                  onClick={(event) => navigate(event, "#contato")}
                >
                  Vamos conversar <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </div>

              <p className={s.menuBottom}>
                <span>ATENDIMENTO PESSOAL</span><span>São Paulo e região</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </dialog>
    </header>
  );
}
