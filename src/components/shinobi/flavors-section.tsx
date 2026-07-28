"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ShinobiFlavor, shinobiFlavors } from "./data";
import Link from "next/link";

type ShinobiFlavorsSectionProps = {
  onFlavorChange?: (flavor: ShinobiFlavor) => void;
};

export function ShinobiFlavorsSection({
  onFlavorChange,
}: ShinobiFlavorsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nutritionFlavor, setNutritionFlavor] =
    useState<ShinobiFlavor | null>(null);

  const activeFlavor = shinobiFlavors[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % shinobiFlavors.length;
        onFlavorChange?.(shinobiFlavors[nextIndex]);
        return nextIndex;
      });
    }, 4200);

    return () => clearInterval(interval);
  }, [onFlavorChange]);

  return (
    <section
      id="sabores"
      className="relative overflow-hidden bg-black text-white"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* Efeito de preenchimento sutil em vidro para o botão principal */
        .btn-flavor-glass-fill::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.08);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(0 100% 0 0);
          z-index: 0;
        }
        .btn-flavor-glass-fill:hover::before {
          clip-path: inset(0 0 0 0);
        }

        /* Efeito de preenchimento sutil em vidro para o botão secundário */
        .btn-flavor-glass-stroke::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.04);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(100% 0 0 0);
          z-index: 0;
        }
        .btn-flavor-glass-stroke:hover::before {
          clip-path: inset(0 0 0 0);
        }
      `}} />

      <Image
        key={activeFlavor.fundo}
        src={activeFlavor.fundo}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover transition-all duration-700"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/50" />

      <div className="relative z-10 mx-auto max-w-[1540px] items-center gap-10 px-5 py-24 md:px-8 lg:px-10">

        <h2 className="text-5xl font-extrabold uppercase tracking-tight leading-[0.9] [font-family:var(--font-shinobi-display)] sm:text-7xl md:text-8xl lg:text-[100px]">
          Seis sabores. <br />
          <span className="text-neutral-500">Um só destino.</span>
        </h2>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400">
          Descubra a coleção completa de energéticos SHINOBI. Cada lata possui
          uma identidade própria, notas sensoriais marcantes e o mesmo perfil
          essencial de foco.
        </p>


        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#pedido"
            className="btn-flavor-glass-fill group relative inline-flex items-center gap-3 border border-white/20 bg-black/20 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 [font-family:var(--font-shinobi-display)] hover:border-white w-full md:w-fit"
          >
            <span className="relative z-10 inline-flex items-center gap-3">
              Pedir seu sabor
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={16}
                weight="bold"
              />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setNutritionFlavor(activeFlavor)}
            className="btn-flavor-glass-stroke group relative inline-flex w-full md:w-fit items-center gap-3 border border-white/10 bg-white/[0.02] backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-wider text-neutral-400 transition-all duration-300 [font-family:var(--font-shinobi-display)] hover:text-white hover:border-white/30"
          >
            <span className="relative z-10">
              Tabela nutricional
            </span>
          </button>
        </div>


        <div className="relative z-20 h-[760px] w-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeFlavor.slug}
              initial={{ opacity: 0, x: "-115%", rotate: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: "0%", rotate: 0, scale: 1 }}
              exit={{ opacity: 0, x: "115%", rotate: 10, scale: 0.9 }}
              transition={{
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={activeFlavor.lata}
                alt={`Lata SHINOBI sabor ${activeFlavor.name}`}
                fill
                priority
                sizes="760px"
                className="object-cover drop-shadow-[0_45px_90px_rgba(0,0,0,0.95)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


      {nutritionFlavor ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="shinobi-nutrition-title"
          className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Fechar tabela nutricional"
            onClick={() => setNutritionFlavor(null)}
            className="absolute inset-0 cursor-default"
          />

          <div className="relative z-10 grid max-h-[92svh] w-full max-w-5xl overflow-hidden border border-neutral-800 bg-black shadow-[0_30px_120px_rgba(0,0,0,1)] lg:grid-cols-[0.36fr_0.64fr]">
            <div className="flex flex-col justify-between p-6  lg:p-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600 [font-family:var(--font-shinobi-display)]">
                  informação nutricional
                </p>
                <h3
                  id="shinobi-nutrition-title"
                  className="mt-4 text-3xl font-extrabold uppercase leading-none [font-family:var(--font-shinobi-display)] md:text-4xl"
                >
                  {nutritionFlavor.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  Confira os dados do rótulo antes de escolher seu sabor.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setNutritionFlavor(null)}
                className="mt-8 w-full border border-neutral-700 bg-neutral-900 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-black hover:border-white lg:w-fit"
              >
                Fechar
              </button>
            </div>

            <div className="max-h-[92svh] overflow-auto bg-neutral-950 p-6 flex items-center justify-center">
              <div className="relative mx-auto aspect-[720/1018] w-full max-w-2xl">
                <Image
                  src={nutritionFlavor.rotulo}
                  alt={`Tabela nutricional SHINOBI sabor ${nutritionFlavor.name}`}
                  fill
                  sizes="(min-width: 1024px) 640px, 92vw"
                  className="object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
