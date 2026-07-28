"use client";

import { HeartIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { sweets } from "./data";
import { AnimatedSection, ease, itemReveal, motion, staggerReveal } from "./motion";

export function LaCremeProductsSection() {
  return (
    <>

        <AnimatedSection className="px-5 pb-24 md:px-8 md:pb-32 lg:px-10">
          <motion.div
            className="mx-auto grid max-w-385 gap-6 lg:grid-cols-[0.38fr_0.62fr]"
            variants={staggerReveal}
          >
            <motion.div
              className="relative overflow-hidden rounded-none bg-[#9d2d40] p-8 text-white md:p-10 flex flex-col justify-between min-h-100"
              variants={itemReveal}
            >
              <div className="absolute -right-12 -top-24 text-[#ffd8df]/05 pointer-events-none select-none">
                <HeartIcon size={950} weight="duotone" className="opacity-25" />
              </div>

              <div className="relative z-10 mt-auto flex flex-col items-start w-full">
                <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-6xl">
                  O cuidado em cada detalhe, do forno à entrega.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed border-l pl-8">
                  Explore nossa seleção de vitrine. Cada receita é desenvolvida
                  de forma artesanal para equilibrar perfeitamente texturas,
                  sabores e criar memórias reais em torno da mesa.
                </p>
              </div>
            </motion.div>

            <motion.div className="overflow-hidden" variants={itemReveal}>
              <div
                className="sweet-carousel flex w-max gap-6 hover:[animation-play-state:paused] cursor-pointer"
                style={{ animation: "pastry-carousel 42s linear infinite" }}
              >
                {[...sweets, ...sweets].map((item, index) => (
                  <motion.figure
                    key={`${item.title}-${index}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: (index % sweets.length) * 0.03,
                      ease,
                    }}
                    className="w-82.5 shrink-0 overflow-hidden rounded-none bg-white md:w-96"
                  >
                    <div className="relative h-90">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={72}
                        sizes="390px"
                        className="object-cover transition duration-700 hover:scale-[1.04]"
                      />
                    </div>
                    <figcaption className="p-6">
                      <h3 className="mt-6 text-3xl font-semibold">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-black/50">
                        {item.note}
                      </p>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
    </>
  );
}
