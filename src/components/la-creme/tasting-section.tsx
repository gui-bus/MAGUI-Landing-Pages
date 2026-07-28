"use client";

import { tastingNotes } from "./data";
import { AnimatedSection, ease, itemReveal, motion, staggerReveal } from "./motion";

export function LaCremeTastingSection() {
  return (
    <>

        <AnimatedSection className="px-5 py-20 md:px-8 md:py-24 lg:px-10 bg-[#F3F3F3]">
          <motion.div className="mx-auto max-w-385" variants={staggerReveal}>
            <motion.div
              className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between pb-12"
              variants={itemReveal}
            >
              <div className="max-w-4xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                  alta degustação
                </p>
                <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl text-[#2b1714]">
                  Desenhamos a experiência da mordida antes da estética do topo.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-black/50 lg:mb-2">
                Antes do adorno, da linha e da apresentação, projetamos o
                equilíbrio: a textura que quebra, o recheio que envolve e o
                frescor que permanece.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {tastingNotes.map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.04, ease }}
                  className="group flex flex-col pt-6 border-t border-[#2b1714]/10"
                >
                  <span className="text-[10px] font-medium tracking-[0.15em] text-[#9d2d40]/50 group-hover:text-[#9d2d40] transition-colors duration-300">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#2b1714]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#2b1714]/60">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
    </>
  );
}
