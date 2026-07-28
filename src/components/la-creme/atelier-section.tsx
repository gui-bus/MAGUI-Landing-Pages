"use client";

import { ChefHatIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { images } from "./data";
import { AnimatedSection, imageReveal, itemReveal, motion, staggerReveal } from "./motion";

export function LaCremeAtelierSection() {
  return (
    <>

        <AnimatedSection
          id="atelier"
          className="bg-[#F3F3F3] px-5 py-24 md:px-8 md:py-32 lg:px-10"
        >
          <motion.div
            className="mx-auto grid max-w-385 gap-6 lg:grid-cols-[0.58fr_0.42fr]"
            variants={staggerReveal}
          >
            <motion.figure
              className="relative min-h-165 overflow-hidden rounded-none"
              variants={imageReveal}
            >
              <Image
                src={images.processo_la_creme}
                alt="Bolo de chocolate sendo preparado com frutas"
                fill
                quality={74}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-right md:object-center"
              />
            </motion.figure>

            <motion.div
              className="grid content-between gap-12 rounded-none bg-[#2b1714] p-8 text-white md:p-10"
              variants={itemReveal}
            >
              <ChefHatIcon size={45} />
              <div>
                <h2 className="text-5xl font-semibold leading-none tracking-tighter md:text-6xl">
                  Receita boa tem técnica, mas também tem gesto.
                </h2>
                <p className="mt-8 text-lg leading-8 text-white/50">
                  Montamos doces em lotes pequenos para controlar textura,
                  brilho, ponto de creme e conservação até a hora de servir.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
    </>
  );
}
