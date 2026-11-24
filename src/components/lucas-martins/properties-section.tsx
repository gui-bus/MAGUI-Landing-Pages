"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import { formatPrice, lucasProperties, lucasWhatsappHref } from "./data";
import { LucasIcon } from "./icon";
import s from "./page.module.css";

export function LucasPropertiesSection() {
  const [city, setCity] = useState("Todas as regiões");
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const shown = lucasProperties.filter(
    (property) => city === "Todas as regiões" || property.place.endsWith(city),
  );

  return (
    <section id="imoveis" className={s.section}>
      <div className={s.container}>
        <div className={s.propertiesTop} data-lucas-reveal>
          <div className={s.propertiesTopTitle}>
            <span className={s.kicker}>ESPAÇO PARA OS SEUS PLANOS</span>
            <h2>
              Seu primeiro endereço pode estar <span>por aqui.</span>
            </h2>
          </div>
          <p>
            Vamos olhar para localização, planta e custo total. O melhor imóvel
            é o que combina com a sua vida.
          </p>
        </div>

        <div className={s.propertyToolbar}>
          <div
            className={s.propertyTabs}
            role="group"
            aria-label="Filtrar imóveis por região"
          >
            {["Todas as regiões", "Curitiba", "São José dos Pinhais"].map(
              (value) => (
                <button
                  type="button"
                  key={value}
                  aria-pressed={city === value}
                  onClick={() => setCity(value)}
                >
                  {value}
                </button>
              ),
            )}
          </div>
          <p className={`${s.propertyCount} ${s.mono}`} aria-live="polite">
            {shown.length}{" "}
            {shown.length === 1
              ? "opção para conhecer"
              : "opções para conhecer"}
          </p>
        </div>

        <div className={s.propertyCatalog}>
          {shown.map((property) => (
            <article key={property.id} className={s.propertyRow}>
              <div className={s.propertyPhoto}>
                <Image
                  src={property.image}
                  alt={property.alt}
                  fill
                  sizes="(max-width: 700px) 88vw, 44vw"
                />
                <div className={s.propertyTags}>
                  <span className={`${s.propertyStatus} ${s.mono}`}>
                    {property.status}
                  </span>
                  <span className={`${s.propertyCode} ${s.mono}`}>
                    {property.id}
                  </span>
                </div>
              </div>

              <div className={s.propertySpecCol}>
                <div>
                  <div className={s.propertyHead}>
                    <p className={s.location}>
                      <LucasIcon name="pin" size={18} />
                      {property.place}
                    </p>
                    <h3>{property.name}</h3>
                  </div>

                  <div className={s.specs}>
                    <span>
                      <LucasIcon name="bed" size={20} />
                      {property.bedrooms} quartos
                    </span>
                    <span>
                      <LucasIcon name="area" size={20} />
                      {property.area} m² privativos
                    </span>
                  </div>
                </div>

                <div>
                  <div className={s.propertyPrice}>
                    <div>
                      <small>A partir de</small>
                      <strong>{formatPrice(property.price)}</strong>
                    </div>
                    <button
                      type="button"
                      className={s.propertyExpandBtn}
                      aria-expanded={expanded === property.id}
                      aria-controls={`lucas-property-${property.id}`}
                      onClick={() =>
                        setExpanded(
                          expanded === property.id ? null : property.id,
                        )
                      }
                    >
                      Conhecer melhor
                      <Plus
                        size={16}
                        weight="bold"
                        className={expanded === property.id ? s.rotateIcon : ""}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {expanded === property.id && (
                      <motion.div
                        id={`lucas-property-${property.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduced ? 0 : 0.28 }}
                        className={s.propertyDetails}
                      >
                        <div className={s.propertyDetailsInner}>
                          <p>{property.description}</p>
                          <ul>
                            {property.features.map((feature) => (
                              <li key={feature}>
                                <LucasIcon name="check" size={18} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href={lucasWhatsappHref(
                              `Oi, Lucas! Quero conhecer o ${property.name} (${property.id}), em ${property.place}, e entender se ele faz sentido para meu primeiro imóvel.`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.button}
                          >
                            Conversar sobre este apê
                          </Link>
                          <small>
                            Valores e disponibilidade sujeitos a confirmação. O
                            enquadramento em programas habitacionais e o
                            financiamento dependem de análise.
                          </small>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={s.propertyHelp} data-lucas-reveal>
          <LucasIcon name="map" size={28} />
          <div>
            <strong>Seu primeiro lar não precisa caber em uma lista.</strong>
            <p>
              Me conte o que você procura. Vamos encontrar outras possibilidades
              juntos.
            </p>
          </div>
          <Link href="#contato" className={s.textLink}>
            Quero uma busca do meu jeito
          </Link>
        </div>
      </div>
    </section>
  );
}
