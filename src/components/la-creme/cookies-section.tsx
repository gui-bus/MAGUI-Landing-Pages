"use client";

import { SealCheckIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { images } from "./data";
import { AnimatedSection, imageReveal, motion, staggerReveal } from "./motion";

export function LaCremeCookiesSection() {
  return (
    <>

        <AnimatedSection className="relative min-h-175 lg:min-h-212 w-full overflow-hidden flex items-center bg-[#2b1714]">
          <motion.div
            className="absolute inset-0 w-full h-full"
            variants={imageReveal}
          >
            <Image
              src={images.cookies}
              alt="Cookies de chocolate em close"
              fill
              quality={74}
              sizes="100vw"
              className="object-cover transition duration-1000 scale-100 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#2b1714]/80 to-[#2b1714]/20 lg:via-[#2b1714]/30" />
            <div className="absolute inset-0 bg-linear-to-t from-[#2b1714] via-transparent to-transparent md:hidden" />
          </motion.div>

          <div className="relative z-10 mx-auto w-full max-w-385 px-5 py-24 md:px-8 md:py-32 lg:px-10">
            <motion.div
              className="max-w-xl lg:max-w-2xl"
              variants={staggerReveal}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white bg-white/10 p-6 backdrop-blur-md shadow-lg px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em]">
                <SealCheckIcon size={15} weight="duotone" />
                rigor dos ingredientes
              </div>
              <h2 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white">
                A antítese do <br className="hidden sm:inline" />
                sabor industrial.
              </h2>

              <div className="mt-12 max-w-xl">
                <p className="text-lg leading-8 text-white/80">
                  Manteiga fresca, ovos selecionados, frutas da estação e
                  chocolate de origem. O que parece um preciosismo técnico se
                  revela no equilíbrio exato e no final limpo a cada mordida.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
    </>
  );
}
