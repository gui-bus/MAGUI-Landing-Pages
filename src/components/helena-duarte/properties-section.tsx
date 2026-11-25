"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { properties, money, helenaWhatsappHref } from "./data";
import s from "./page.module.css";
type Property = typeof properties[number];
export function HelenaPropertiesSection() {
    const [filter, setFilter] = useState("Todos os imóveis");
    const [neighborhood, setNeighborhood] = useState("Todos os bairros");
    const [selected, setSelected] = useState<Property | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);
    const opener = useRef<HTMLButtonElement | null>(null);
    const reducedMotion = useReducedMotion();
    useEffect(() => {
        if (!selected)
            return;
        if (!dialog.current?.open) {
            dialog.current?.showModal();
        }
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = previous; };
    }, [selected]);
    function finishClosing() {
        dialog.current?.close();
        opener.current?.focus({ preventScroll: true });
    }
    const shown = properties.filter(p => (filter === "Todos os imóveis" || p.type === filter || p.status === filter) && (neighborhood === "Todos os bairros" || p.neighborhood === neighborhood));
    return <section id="imoveis" className={`${s.section} ${s.properties}`}>
    <div className={s.sectionHeading} data-helena-reveal><div><p className={s.eyebrow}>A CURADORIA</p><h2>Endereços que merecem{" "}<br />um olhar <em>mais atento.</em></h2></div><p>Imóveis escolhidos pela arquitetura, pela localização e pelo que podem significar na sua rotina.</p></div>
    <div className={s.filters}><div className={s.tabs} role="group" aria-label="Filtrar imóveis">{["Todos os imóveis", "Apartamento", "Casa", "Na planta"].map(f => <button type="button" key={f} aria-pressed={filter === f} className={filter === f ? s.activeTab : ""} onClick={() => setFilter(f)}>{f === "Apartamento" ? "Apartamentos" : f === "Casa" ? "Casas" : f}</button>)}</div><label className={s.selectLabel}><span className={s.srOnly}>Filtrar por bairro</span><select value={neighborhood} onChange={e => setNeighborhood(e.target.value)}>{["Todos os bairros", ...properties.map(p => p.neighborhood)].map(n => <option key={n}>{n}</option>)}</select></label></div>
    <p className={s.resultCount} aria-live="polite">{shown.length} {shown.length === 1 ? "imóvel nesta seleção" : "imóveis nesta seleção"}</p>
    <div className={s.propertyGrid}>{shown.map(p => <article key={p.id} className={s.propertyCard}><button type="button" className={s.propertyImageButton} aria-label={`Ver detalhes de ${p.name}`} onClick={e => { opener.current = e.currentTarget; setSelected(p); }}><Image src={p.image} alt={p.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"/><span className={s.propertyBadge}>{p.status}</span><span className={s.imageOpen}>Conhecer imóvel +</span></button><div className={s.propertyInfo}><p className={s.propertyLocation}>{p.neighborhood} · Curitiba</p><h3>{p.name}</h3><div className={s.propertySpecs}><span>{p.area} m²</span><span>{p.bedrooms} quartos</span><span>{p.parking} vagas</span></div><div className={s.priceRow}><span>{p.status === "Na planta" ? "A partir de" : "Investimento"}<strong>{money(p.price)}</strong></span><button type="button" aria-label={`Abrir ficha de ${p.name}`} onClick={e => { opener.current = e.currentTarget; setSelected(p); }}>Detalhes <span aria-hidden="true">+</span></button></div></div></article>)}</div>
    {shown.length === 0 && <div className={s.empty}><h3>O seu lugar pode estar fora desta seleção.</h3><p>Conte o que procura e vamos ampliar as possibilidades.</p><button className={s.button} onClick={() => { setFilter("Todos os imóveis"); setNeighborhood("Todos os bairros"); }}>Limpar filtros</button><Link href="#contato" className={s.textLink}>Pedir uma curadoria personalizada</Link></div>}
    <div className={s.collectionNote}><p>Não encontrou o que imaginava?</p><Link href="#contato" className={s.textLink}>Conte como é o seu lugar ideal</Link><span>Curadoria pessoal · Curitiba e região</span></div>
    <dialog aria-labelledby="helena-property-title" ref={dialog} className={s.propertyDialog} onCancel={e => { e.preventDefault(); setSelected(null); }} onClick={e => { if (e.target === e.currentTarget) setSelected(null); }}>
      <AnimatePresence onExitComplete={finishClosing}>
        {selected && (
          <motion.div
            key={selected.id}
            className={s.dialogPanel}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button type="button" autoFocus className={s.dialogClose} aria-label="Fechar detalhes do imóvel" onClick={() => setSelected(null)}>×</button>
            <div className={s.dialogImage}><Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 800px) 95vw, 850px"/></div>
            <div className={s.dialogBody}><p className={s.eyebrow}>{selected.id} · {selected.status}</p><h3 id="helena-property-title">{selected.name}</h3><p>{selected.neighborhood} · Curitiba</p><p>{selected.description}</p><div className={s.propertySpecs}><span>{selected.area} m² privativos</span><span>{selected.bedrooms} quartos</span><span>{selected.parking} vagas</span></div><ul>{selected.features.map(f => <li key={f}>{f}</li>)}</ul><strong className={s.dialogPrice}>{money(selected.price)}</strong><Link className={s.button} target="_blank" rel="noopener noreferrer" href={helenaWhatsappHref(`Olá, Helena! Tenho interesse no imóvel ${selected.name} (${selected.id}), em ${selected.neighborhood}. Gostaria de receber mais informações e conversar sobre uma visita.`)}>Conversar sobre este imóvel</Link><small>{selected.note}</small></div>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  </section>;
}
