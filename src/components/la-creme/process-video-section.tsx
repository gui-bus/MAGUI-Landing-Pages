"use client";

import { images, video } from "./data";
import { logoFont } from "./fonts";
import { AnimatedSection, itemReveal, motion, staggerReveal } from "./motion";

export function LaCremeProcessVideoSection() {
  return (
    <>

        <AnimatedSection className="relative w-full bg-[#2b1714] text-white overflow-hidden min-h-170 md:min-h-150 p-6 sm:p-10 md:p-16 lg:p-20 flex items-start pb-24 sm:pb-10">
          <div className="absolute inset-0 z-0">
            <video
              aria-hidden="true"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              preload="none"
              playsInline
              poster={images.processo_la_creme}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <motion.div
            className="relative z-20 max-w-xl w-full rounded-none border border-white/10 bg-black/20 p-8 backdrop-blur-md sm:mr-44"
            variants={staggerReveal}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Processo Artesanal
            </p>

            <motion.h2
              className="mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl md:text-5xl text-white"
              variants={itemReveal}
            >
              O ponto perfeito <br />
              visto de perto.
            </motion.h2>

            <motion.p
              className="mt-4 text-sm sm:text-base leading-relaxed text-white/80"
              variants={itemReveal}
            >
              A busca constante pelo equilíbrio que transforma ingredientes em
              experiências memoráveis.
            </motion.p>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-20 h-24 w-full bg-[#2b1714] border-t border-white/10 flex flex-col justify-center items-center select-none pointer-events-none rounded-none sm:top-0 sm:right-0 sm:left-auto sm:h-full sm:w-44 sm:border-t-0 sm:border-l">
            <div className="flex items-center justify-center [writing-mode:horizontal-tb] sm:[writing-mode:vertical-lr] sm:rotate-180">
              <p className="text-3xl whitespace-nowrap">
                <span className={`${logoFont.className} text-[#ffd8df]`}>La Crème</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
    </>
  );
}
