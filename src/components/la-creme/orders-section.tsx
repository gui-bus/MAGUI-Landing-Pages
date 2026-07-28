"use client";

import { steps } from "./data";
import { AnimatedSection, ease, itemReveal, motion, staggerReveal } from "./motion";

export function LaCremeOrdersSection() {
  return (
    <>

        <AnimatedSection
          id="encomendas"
          className="px-5 py-24 md:px-8 md:py-32 lg:px-10 bg-[#F3F3F3]"
        >
          <motion.div className="mx-auto max-w-385" variants={staggerReveal}>
            <motion.div
              className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:items-end pb-6"
              variants={itemReveal}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                  encomendas exclusivas
                </p>
                <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-7xl text-[#2b1714]">
                  Do conceito à entrega final.
                </h2>
              </div>
              <p className="text-lg leading-8 text-black/50 md:max-w-xl">
                Desenvolvemos projetos sob medida para celebrações íntimas,
                eventos corporativos e momentos que exigem o máximo cuidado, sem
                qualquer excesso.
              </p>
            </motion.div>


            <div className="mt-8 grid gap-0">
              {steps.map(([number, title, text], index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease }}
                  whileHover={{ x: 10 }}
                  className="group relative grid gap-4 border-b border-[#2b1714]/10 py-10 last:border-b-0 md:grid-cols-[0.10fr_0.38fr_0.52fr] md:items-center transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 w-0 h-px bg-[#9d2d40]/40 transition-all duration-500 group-hover:w-full" />

                  <span className="text-7xl font-black text-black/10 transition-colors pl-5">
                    {number}
                  </span>

                  <h3 className="text-2xl font-semibold tracking-tight text-[#2b1714] md:text-3xl">
                    {title}
                  </h3>

                  <p className="text-base leading-7 text-black/50 md:max-w-2xl">
                    {text}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
    </>
  );
}
