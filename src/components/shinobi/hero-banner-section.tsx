"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export function ShinobiHeroBannerSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="shinobi-awakening-title"
      className="group relative overflow-hidden bg-black text-white flex flex-col justify-end pt-38"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        /* Estado Inicial: O samurai está escondido em uma linha diagonal invisível no canto superior direito */
        .hero-bg-samurai {
          clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
          transition: clip-path 1.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Estado Hover: O corte atravessa a tela na diagonal e abre instantaneamente */
        .group:hover .hero-bg-samurai {
          clip-path: polygon(0 0, 120% 0, 100% 100%, -20% 100%);
        }

        /* Efeito opcional: Uma leve puxada na escala da imagem para dar impacto ao corte */
        .hero-bg-samurai img {
          transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Efeito de revelação suave para o texto no load */
        @keyframes heroTextReveal {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-hero-text {
          animation: heroTextReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Hover dos Botões com Clip-Path e efeito Glass Sutil */
        .btn-clip-glass-fill::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.08);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(0 100% 0 0);
          z-index: 0;
        }
        .btn-clip-glass-fill:hover::before {
          clip-path: inset(0 0 0 0);
        }

        .btn-clip-glass-stroke::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.04);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          clip-path: inset(100% 0 0 0);
          z-index: 0;
        }
        .btn-clip-glass-stroke:hover::before {
          clip-path: inset(0 0 0 0);
        }
      `}} />

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/shinobi/homem.webp"
          alt="Latas SHINOBI em destaque"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-20 bg-linear-to-r from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-96 bg-linear-to-t from-black via-black/80 to-transparent" />

      <Image
        src="/images/shinobi/logo-icon.webp"
        alt=""
        width={420}
        height={420}
        aria-hidden="true"
        className="pointer-events-none hidden! lg:block! absolute bottom-32 right-32 z-25 w-40 mix-blend-screen md:w-64"
      />

      <div className="animate-hero-text relative z-30 mx-auto w-full max-w-[1540px] px-5 py-20 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <h1
            id="shinobi-awakening-title"
            className="text-5xl font-extrabold uppercase tracking-tight leading-[0.9] [font-family:var(--font-shinobi-display)] sm:text-7xl md:text-8xl lg:text-[100px]"
          >
            Um gole. <br />
            <span className="text-neutral-400">O samurai acorda.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            SHINOBI transforma o instante em ritual: energia intensa, presença
            escura e uma fórmula milimetricamente desenhada para foco absoluto.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#sabores"
              className="btn-clip-glass-fill group/btn relative inline-flex items-center gap-3 border border-white/20 bg-black/20 backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 [font-family:var(--font-shinobi-display)] hover:border-white"
            >
              <span className="relative z-10 inline-flex items-center gap-3">
                Ver sabores
                <ArrowRight
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  size={16}
                  weight="bold"
                />
              </span>
            </Link>

            <Link
              href="#pedido"
              className="btn-clip-glass-stroke group/btn relative inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] backdrop-blur-md px-8 py-4 text-xs font-bold uppercase tracking-wider text-neutral-400 transition-all duration-300 [font-family:var(--font-shinobi-display)] hover:text-white hover:border-white/30"
            >
              <span className="relative z-10">
                Pedir agora
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex gap-12">
          {[
            ["06", "sabores complexos"],
            ["100%", "modo shinobi"],
          ].map(([value, label]) => (
            <div key={label} className="group/metric">
              <p className="text-3xl font-extrabold uppercase text-white [font-family:var(--font-shinobi-display)] md:text-4xl">
                {value}
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
