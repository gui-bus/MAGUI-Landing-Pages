"use client";

import Image from "next/image";
import { WhatsAppCTA } from "./actions";
import { images, menu, occasions } from "./data";
import { AnimatedSection, imageReveal, itemReveal, motion, staggerReveal } from "./motion";

export function LaCremeClosingSections() {
  return (
    <>

        <>
          <AnimatedSection className="bg-[#F3F3F3] px-5 pt-24 md:px-8 md:pt-32 pb-12 lg:px-10 overflow-hidden">
            <motion.div className="mx-auto max-w-385" variants={staggerReveal}>
              <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
                <motion.div
                  className="flex flex-col lg:sticky lg:top-12"
                  variants={itemReveal}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                    contexto & presença
                  </p>
                  <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl text-[#2b1714]">
                    Estruturas feitas para ditar o tom da mesa.
                  </h2>

                  <div className="mt-12 flex flex-col border-t border-[#2b1714]/10">
                    {occasions.map((item, index) => (
                      <motion.div
                        key={item}
                        variants={itemReveal}
                        whileHover={{ x: 8 }}
                        className="group flex items-center justify-between border-b border-[#2b1714]/10 py-5 text-sm text-[#2b1714]/80 font-medium cursor-default transition-colors duration-300 hover:text-[#2b1714]"
                      >
                        <span className="pr-4 leading-relaxed">{item}</span>
                        <span className="text-[10px] font-mono text-[#9d2d40]/40 group-hover:text-[#9d2d40] transition-colors duration-300 shrink-0">
                          [ 0{index + 1} ]
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="relative w-full pt-12 md:pt-20 lg:pt-0"
                  variants={imageReveal}
                >
                  <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] group">
                    <Image
                      src={images.copo_da_felicidade}
                      alt="Copos da felicidade"
                      fill
                      quality={74}
                      sizes="(min-width: 1024px) 62vw, 100vw"
                      className="object-cover transition duration-1000 group-hover:scale-[1.02]"
                    />
                  </figure>
                  <figure className="absolute -bottom-12 -left-4 md:-bottom-20 md:left-12 w-[42%] aspect-[3/4] overflow-hidden rounded-[20px] border-8 border-[#F3F3F3] hidden sm:block group pastry-drift">
                    <Image
                      src={images.cupcake_morango}
                      alt="Cupcakes e doces decorados"
                      fill
                      quality={72}
                      sizes="25vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                  </figure>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection
            id="menu"
            className="px-5 pb-24 md:px-8 md:pb-32 lg:px-10 bg-[#F3F3F3] pt-12"
          >
            <motion.div className="mx-auto max-w-385" variants={staggerReveal}>
              <div className="flex flex-col gap-12">
                <motion.div
                  className="lg:sticky lg:top-16"
                  variants={itemReveal}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                    catálogo técnico
                  </p>
                  <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl text-[#2b1714]">
                    Menu de assinatura e edições sazonais.
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-[#2b1714]/10">
                  {menu.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={itemReveal}
                      whileHover={{ x: 8 }}
                      className="group flex items-baseline justify-between border-b border-[#2b1714]/10 py-6 cursor-default transition-colors duration-300"
                    >
                      <div className="flex items-baseline justify-between w-full gap-6 pr-4">
                        <p className="text-lg font-medium text-[#2b1714]/90 group-hover:text-[#9d2d40] transition-colors duration-300 tracking-tight">
                          {item}
                        </p>
                        <span className="text-[10px] font-mono text-[#9d2d40]/50 tracking-wider shrink-0">
                          [ 0{index + 1} ]
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </>

        <>
          <AnimatedSection className="relative min-h-120 overflow-hidden px-5 py-24 text-white md:px-8 md:py-32 lg:px-10 flex items-center">
            <motion.div className="absolute inset-0 z-0" variants={imageReveal}>
              <Image
                src={images.floresta_negra}
                alt="Bolo floresta negra"
                fill
                quality={74}
                sizes="100vw"
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-[#2b1714] to-transparent z-10" />

            <motion.div
              className="relative z-20 mx-auto w-full max-w-385"
              variants={staggerReveal}
            >
              <motion.h2
                className="mt-8 max-w-6xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl text-white"
                variants={itemReveal}
              >
                A harmonia visual que transforma grandes celebrações em memórias
                permanentes.
              </motion.h2>
            </motion.div>
          </AnimatedSection>

          <section id="contato" className="w-full bg-[#2b1714] text-white">
            <motion.div
              className="mx-auto max-w-385 px-5 pt-12 pb-24 md:px-8 lg:px-10"
              variants={staggerReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
                <motion.div className="lg:col-span-7" variants={itemReveal}>
                  <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl">
                    Agende a sua data. <br />
                    Nós cuidamos do resto.
                  </h2>
                </motion.div>

                <motion.div
                  className="lg:col-span-5 flex flex-col items-start"
                  variants={itemReveal}
                >
                  <p className="text-sm sm:text-base leading-relaxed text-white/80 max-w-lg">
                    Diga-nos o que você está planejando e o número de
                    convidados. Nós cuidamos de cada detalhe, desde a combinação
                    de sabores até a apresentação final na mesa.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full">
                    <WhatsAppCTA className="w-full" light />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </>
    </>
  );
}
