"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HouseLine, List, X } from "@phosphor-icons/react";
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
            src="/images/lucas-martins/logo-red-dark.webp"
            alt="Lucas Martins — seu primeiro imóvel"
            width={600}
            height={170}
            sizes="(max-width: 560px) 168px, 196px"
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
          Fale com o Lucas
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
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
      >
        <AnimatePresence onExitComplete={finish}>
          {open && (
            <motion.div
              className={s.menuPanel}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.22 }}
            >
              <div className={s.menuTop}>
                <span className={s.menuBrand}>
                  LUCAS MARTINS
                  <small>PRIMEIRO IMÓVEL</small>
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
                <span>SEU PRIMEIRO IMÓVEL COMEÇA AQUI</span>
                <nav aria-label="Navegação mobile">
                  {lucasNav.map((item) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      onClick={(event) => navigate(event, item.href)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Link
                  href="#contato"
                  className={`${s.button} ${s.accentButton}`}
                  onClick={(event) => navigate(event, "#contato")}
                >
                  Converse sobre o seu primeiro imóvel
                </Link>
              </div>

              <p className={s.menuBottom}>
                <HouseLine size={20} /> Curitiba e região, do seu jeito.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </dialog>
    </header>
  );
}
