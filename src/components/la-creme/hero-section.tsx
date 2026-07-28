"use client";

import { CakeIcon, ClockIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { CTA, WhatsAppCTA } from "./actions";
import { heroBadges, images, whatsapp } from "./data";
import { ease, motion } from "./motion";

export function LaCremeHeroSection() {
  return (
    <>

        <motion.section
          id="inicio"
          className="relative min-h-260 overflow-hidden px-6 py-14 text-white md:px-12 md:py-18 lg:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <Image
            src={images.hero}
            alt="Bolo de chocolate com cobertura cremosa e morangos"
            fill
            priority
            quality={86}
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,rgba(255,216,223,0.16),transparent_28%),linear-gradient(110deg,rgba(28,18,16,0.96)_0%,rgba(28,18,16,0.86)_42%,rgba(28,18,16,0.34)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-230 max-w-400 flex-col justify-between pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease }}
              className="grid gap-12 lg:grid-cols-[0.66fr_0.34fr] lg:items-start"
            >
              <div className="pl-4 md:pl-8">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-lg px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em]">
                    <CakeIcon size={15} weight="duotone" />
                    confeitaria artesanal
                  </p>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 p-6 backdrop-blur-md shadow-lg px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                    <ClockIcon size={15} weight="duotone" />
                    fornadas pequenas
                  </p>
                </div>

                <h1 className="mt-14 max-w-6xl text-5xl font-light leading-[0.95] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[124px] xl:text-[142px]">
                  Sobremesas feitas para virar lembrança.
                </h1>

                <p className="mt-9 max-w-2xl text-lg font-light leading-9 text-white/76 md:text-2xl md:leading-10">
                  Bolos, tortas e caixas autorais preparados em pequenas
                  fornadas, com fruta fresca, creme leve e acabamento de ateliê.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18, rotate: 1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease }}
                className="hidden border border-white/14 bg-[#F3F3F3] p-5 text-[#2b1714] shadow-[0_28px_80px_rgba(0,0,0,0.22)] lg:block scale-80"
                style={{ animation: "pastry-float 7s ease-in-out infinite" }}
              >
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={images.redvelvet}
                    alt="Naked cake de red velvet com morangos"
                    fill
                    quality={74}
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9d2d40]">
                      o clássico
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold leading-none tracking-[-0.04em]">
                      Red Velvet
                    </h3>
                  </div>
                  <p className="text-right text-xs leading-6 text-[#2b1714]/58">
                    Massa aveludada
                    <br />
                    Creme de ninho e Morangos
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 pl-4 md:pl-8 lg:grid-cols-12 lg:gap-8 lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease }}
                className="max-w-2xl lg:col-span-7 xl:col-span-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <CTA light>Ver menu de encomendas</CTA>
                  <WhatsAppCTA light />
                </div>

                <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/15 py-5">
                  {[
                    ["24h", "pedido mínimo"],
                    ["12", "sabores sazonais"],
                    ["100%", "feito no ateliê"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="border-r border-white/15 pl-8 last:border-r-0 first:pl-0"
                    >
                      <p className="text-3xl font-semibold tracking-tighter">
                        {value}
                      </p>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease }}
                className="w-full max-w-md border-l border-white/15 pl-6 lg:col-span-5 lg:ml-auto"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] ">
                  assinatura da casa
                </p>
                <h3 className="mt-4 text-3xl font-light leading-tight text-white">
                  Camadas leves, fruta viva e aquele acabamento que chega bonito
                  na mesa.
                </h3>
                <div className="mt-8 flex flex-wrap gap-2">
                  {heroBadges.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 backdrop-blur-md shadow-lg px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 flex flex-col gap-6 pt-8 pl-4 sm:flex-row sm:items-center sm:justify-between md:pl-8"
            >
              <p className="max-w-5xl text-sm leading-7">
                Para aniversários, jantares, presentes e mesas pequenas que
                pedem um doce com presença, sem excesso.
              </p>
              <Link
                href={whatsapp}
                className="inline-flex items-center gap-3 self-start text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-colors hover: sm:self-auto"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#25d366] animate-pulse" />
                reservar sua data via whatsapp
              </Link>
            </motion.div>
          </div>
        </motion.section>
    </>
  );
}
