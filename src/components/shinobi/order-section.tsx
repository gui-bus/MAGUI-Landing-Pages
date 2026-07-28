"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, WhatsappLogo, X } from "@phosphor-icons/react";
import { useState } from "react";
import { shinobiFlavors, shinobiWhatsappHref } from "./data";

const SHINOBI_CAN_PRICE = "R$9,90";
const SHINOBI_TASTING_KIT_PRICE = "R$59,40";

const getFlavorWhatsappHref = (flavorName: string) =>
  `${shinobiWhatsappHref}%20Sabor%3A%20${encodeURIComponent(flavorName)}`;

const shinobiTastingKitHref = `${shinobiWhatsappHref}%20Quero%20o%20kit%20degustacao%20com%20os%206%20sabores.`;

export function ShinobiOrderSection() {
  const [activeLabelIndex, setActiveLabelIndex] = useState<number | null>(null);

  const activeLabelFlavor =
    activeLabelIndex === null ? null : shinobiFlavors[activeLabelIndex];

  return (
    <section
      id="pedido"
      className="relative overflow-hidden bg-black px-5 py-24 text-white md:px-8 lg:px-10"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* Keyframes de Revelação Inicial */
        @keyframes revealUp {
          0% { clip-path: inset(100% 0 0 0); transform: translateY(20px); }
          100% { clip-path: inset(0 0 0 0); transform: translateY(0); }
        }
        @keyframes revealDown {
          0% { clip-path: inset(0 0 100% 0); transform: translateY(-20px); }
          100% { clip-path: inset(0 0 0 0); transform: translateY(0); }
        }
        @keyframes revealCenter {
          0% { clip-path: inset(30% 30% 30% 30%); opacity: 0; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        /* Classes utilitárias de animação */
        .animate-reveal-up {
          animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-reveal-down {
          animation: revealDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-reveal-center {
          animation: revealCenter 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Efeitos de clip-path no Hover (Botões em Vidro) */
        .clip-hover-glass-top::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.08);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(100% 0 0 0);
          z-index: 0;
        }
        .clip-hover-glass-top:hover::before {
          clip-path: inset(0 0 0 0);
        }

        .clip-hover-glass-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.08);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(0 100% 0 0);
          z-index: 0;
        }
        .clip-hover-glass-left:hover::before {
          clip-path: inset(0 0 0 0);
        }

        .clip-hover-glass-bottom::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.04);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(0 0 100% 0);
          z-index: 0;
        }
        .clip-hover-glass-bottom:hover::before {
          clip-path: inset(0 0 0 0);
        }
      `}} />

      <div className="mx-auto max-w-[1540px]">
        <div className="relative grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">


          <div className="animate-reveal-up flex flex-col justify-between  bg-neutral-950/40 p-8 md:p-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 [font-family:var(--font-shinobi-display)]">
                pedido rápido
              </p>
              <h2 className="mt-6 text-4xl font-extrabold uppercase leading-[0.95] [font-family:var(--font-shinobi-display)] md:text-5xl lg:text-6xl">
                Escolha seu sabor. Peça por lata.
              </h2>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-neutral-400">
                Cada SHINOBI custa {SHINOBI_CAN_PRICE}. Monte seu pedido por
                sabor ou leve o kit degustação com a linha completa para provar
                tudo de uma vez.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="border border-neutral-800 bg-neutral-900/20 p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-600 [font-family:var(--font-shinobi-display)]">
                  preço por lata
                </p>
                <p className="mt-3 text-4xl font-extrabold text-white [font-family:var(--font-shinobi-display)]">
                  {SHINOBI_CAN_PRICE}
                </p>
              </div>


              <Link
                href={shinobiWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className="clip-hover-glass-top group relative flex items-center justify-between gap-4 overflow-hidden border border-white/20 bg-black/20 backdrop-blur-md p-6 text-xs font-bold uppercase text-white transition-all duration-300 [font-family:var(--font-shinobi-display)] hover:border-white"
              >
                <span className="relative z-10 inline-flex items-center gap-3">
                  <WhatsappLogo size={18} weight="bold" />
                  Pedir no WhatsApp
                </span>
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <article className="animate-reveal-down group relative min-h-[520px] overflow-hidden bg-neutral-950">
            <Image
              src="/images/shinobi/degustacao.webp"
              alt="Kit degustação SHINOBI com sabores variados"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-all duration-1000 ease-out group-hover:scale-103 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent" />

            <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-8 md:p-12">
              <div>
                <span className="inline-flex border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-300 [font-family:var(--font-shinobi-display)]">
                  kit degustação
                </span>
                <h3 className="mt-8 max-w-lg text-4xl font-extrabold uppercase leading-[0.95] [font-family:var(--font-shinobi-display)] md:text-5xl lg:text-6xl">
                  Os 6 sabores em uma missão.
                </h3>
                <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-300">
                  Uma lata de cada sabor para descobrir seu favorito, abastecer
                  o freezer ou dividir com a equipe.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-600 [font-family:var(--font-shinobi-display)]">
                    6 latas exclusivas
                  </p>
                  <p className="mt-3 text-4xl font-extrabold text-white [font-family:var(--font-shinobi-display)]">
                    {SHINOBI_TASTING_KIT_PRICE}
                  </p>
                </div>

                <Link
                  href={shinobiTastingKitHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-white/20 bg-black/30 backdrop-blur-md px-7 py-4 text-xs font-bold uppercase text-white transition-all duration-300 ease-out [font-family:var(--font-shinobi-display)] hover:-translate-y-0.5 hover:border-white"
                >
                  Quero o kit
                  <ArrowRight size={16} weight="bold" />
                </Link>
              </div>
            </div>
          </article>
        </div>


        <div className="relative mt-20 flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 [font-family:var(--font-shinobi-display)]">
              sabores avulsos
            </p>
            <h3 className="mt-3 text-3xl font-extrabold uppercase [font-family:var(--font-shinobi-display)] md:text-4xl">
              Escolha sua lata
            </h3>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-right">
            Escolha entre frutas intensas, perfis refrescantes e final marcante.
            Explore a complexidade de cada fórmula.
          </p>
        </div>


        <div className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shinobiFlavors.map((flavor, index) => (
            <article
              key={flavor.slug}
              className="animate-reveal-center group relative overflow-hidden border border-neutral-800 bg-neutral-950/40 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-950"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <figure className="relative h-[380px] overflow-hidden bg-neutral-900">
                <Image
                  src={flavor.final}
                  alt={`Lata SHINOBI sabor ${flavor.name}`}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-75 transition-all duration-700 ease-out group-hover:scale-103 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/80" />


                <span className="absolute left-6 top-6 border border-white/10 bg-black/40 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-300 [font-family:var(--font-shinobi-display)]">
                  {flavor.profile}
                </span>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] [font-family:var(--font-shinobi-display)]">
                      lata 269 ml
                    </p>
                    <h3 className="mt-2 text-4xl font-extrabold uppercase leading-none [font-family:var(--font-shinobi-display)]">
                      {flavor.name}
                    </h3>
                  </div>

                  <p className="shrink-0 border border-white/20 bg-white/[0.06] backdrop-blur-md px-4 py-2 text-2xl font-extrabold text-white [font-family:var(--font-shinobi-display)]">
                    {SHINOBI_CAN_PRICE}
                  </p>
                </div>
              </figure>

              <div className="grid gap-8 p-6">
                <p className="text-sm leading-relaxed text-neutral-400">
                  {flavor.description}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">

                  <Link
                    href={getFlavorWhatsappHref(flavor.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="clip-hover-glass-left group relative inline-flex items-center justify-between gap-3 overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md px-5 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 [font-family:var(--font-shinobi-display)] hover:border-white"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                       <WhatsappLogo size={16} />
                       Pedir sabor
                    </span>
                    <ArrowRight
                      size={15}
                      weight="bold"
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>


                  <button
                    type="button"
                    onClick={() => setActiveLabelIndex(index)}
                    className="clip-hover-glass-bottom group relative inline-flex items-center justify-center overflow-hidden border border-white/5 bg-transparent backdrop-blur-md px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-400 transition-all duration-300 [font-family:var(--font-shinobi-display)] hover:text-white hover:border-white/20"
                  >
                    <span className="relative z-10">
                      Tabela nutricional
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>


      {activeLabelFlavor ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="shinobi-label-gallery-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Fechar tabela nutricional"
            onClick={() => setActiveLabelIndex(null)}
            className="absolute inset-0 cursor-zoom-out"
          />

          <div className="relative z-10 flex h-[90svh] w-full max-w-5xl flex-col overflow-hidden border border-neutral-800 bg-black shadow-[0_30px_120px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-800 px-5 py-5 md:px-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600 [font-family:var(--font-shinobi-display)]">
                  tabela nutricional
                </p>
                <h3
                  id="shinobi-label-gallery-title"
                  className="mt-2 text-3xl font-extrabold uppercase leading-none [font-family:var(--font-shinobi-display)] md:text-4xl"
                >
                  {activeLabelFlavor.name}
                </h3>
              </div>

              <button
                type="button"
                aria-label="Fechar"
                onClick={() => setActiveLabelIndex(null)}
                className="grid size-12 place-items-center border border-white/10 bg-white/[0.02] text-neutral-400 transition hover:border-white hover:text-white"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-neutral-950">
              <Image
                src={activeLabelFlavor.rotulo}
                alt={`Tabela nutricional SHINOBI sabor ${activeLabelFlavor.name}`}
                fill
                sizes="90vw"
                className="object-contain p-4 md:p-10"
                priority
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 px-5 py-4 text-[11px] text-neutral-600 md:px-8">
              <span>
                {(activeLabelIndex ?? 0) + 1} de {shinobiFlavors.length}
              </span>
              <span>Clique fora da imagem ou no X para fechar.</span>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}