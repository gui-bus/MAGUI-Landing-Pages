"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CaretDown, Check } from "@phosphor-icons/react";
import s from "./page.module.css";

type SelectFieldProps = { label: string; name: string; value: string; options: string[]; onChange: (value: string) => void; icon: ReactNode };

export function HelenaSelectField({ label, name, value, options, onChange, icon }: SelectFieldProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    items.current[options.indexOf(value)]?.focus();
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open, options, value]);

  function choose(option: string) { onChange(option); setOpen(false); trigger.current?.focus(); }
  function keyboard(event: KeyboardEvent, index: number) {
    if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); setOpen(false); trigger.current?.focus(); }
    if (event.key === "Tab") setOpen(false);
    const next = event.key === "ArrowDown" ? (index + 1) % options.length : event.key === "ArrowUp" ? (index - 1 + options.length) % options.length : event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : null;
    if (next !== null) { event.preventDefault(); items.current[next]?.focus(); }
  }

  return <div ref={root} className={s.customSelect} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}>
    <span id={`${id}-label`} className={s.fieldLabel}>{label}</span>
    <input type="hidden" name={name} value={value} />
    <button ref={trigger} type="button" role="combobox" aria-labelledby={`${id}-label ${id}-value`} aria-haspopup="listbox" aria-expanded={open} aria-controls={`${id}-list`} className={s.selectTrigger} onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setOpen(true); } }}><span className={s.fieldIcon}>{icon}</span><span id={`${id}-value`}>{value}</span><CaretDown size={17} className={open ? s.caretOpen : ""} /></button>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -5 }} transition={{ duration: reducedMotion ? 0 : .18 }} className={s.selectPopover}>
      <div id={`${id}-list`} role="listbox" aria-labelledby={`${id}-label`}>{options.map((option, index) => <button ref={element => { items.current[index] = element; }} key={option} type="button" role="option" aria-selected={value === option} tabIndex={-1} onClick={() => choose(option)} onKeyDown={event => keyboard(event, index)}>{option}{value === option && <Check size={16} weight="bold" />}</button>)}</div>
    </motion.div>}</AnimatePresence>
  </div>;
}
