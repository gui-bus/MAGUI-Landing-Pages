import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, AsclepiusIcon, CaretDown } from "@phosphor-icons/react/ssr";

import { heroMetrics, images, links } from "./data";
import { syncopate } from "./fonts";

export function VittaHeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-center overflow-hidden bg-[#161616] px-6 py-28 text-white md:px-12 md:py-36 lg:py-40 selection:bg-[#D7A98B]/30"
    >

      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          fill
          alt="Tratamento facial em ambiente de estética clínica"
          className="vitta-hero-primary object-cover saturate-[0.85]"
          sizes="100vw"
          priority
        />
        <Image
          src={images.heroSecondary}
          fill
          alt=""
          aria-hidden="true"
          className="vitta-hero-secondary object-cover saturate-[0.85]"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#161616]/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#161616] via-transparent to-[#161616]/60" />
      </div>


      <div className="relative z-10 mx-auto w-full max-w-400">

        <div className="flex flex-col justify-center pr-0 lg:pr-12">
          <div className="vitta-reveal w-full">

            <p className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-[#D7A98B]">
              <AsclepiusIcon
                size={24}
                weight="duotone"
                className="animate-pulse text-[#D7A98B]"
              />
              clínica estética para pele saudável
            </p>


            <h1
              className={`${syncopate.className} mt-8 uppercase text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl xl:text-[80px] drop-shadow-sm`}
            >
              Sua pele guiando
              <br />
              cada escolha estética
            </h1>


            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg md:leading-relaxed font-light">
              Consultas, protocolos e produtos pensados para melhorar textura,
              manchas, sensibilidade, viço e firmeza sem ignorar a rotina real
              de cada pele.
            </p>


            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#D7A98B] border border-[#D7A98B] px-8 py-5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#161616] transition-all duration-300 hover:bg-transparent hover:text-white rounded-none"
              >
                Agendar avaliação
                <ArrowUpRight
                  size={14}
                  className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#pele"
                className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-black/30 px-8 py-5 text-[10px] font-mono uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#161616] hover:border-white rounded-none"
              >
                Ver protocolos
                <CaretDown
                  size={14}
                  className="text-white/60 transition-colors duration-300 group-hover:text-current"
                />
              </Link>
            </div>

            <div className="mt-20 grid max-w-3xl grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-10">
              {heroMetrics.map((metric) => (
                <div key={metric.value} className="flex flex-col gap-1.5">
                  <span
                    className={`${syncopate.className} text-2xl font-light tracking-tight text-[#D7A98B] md:text-3xl drop-shadow-sm`}
                  >
                    {metric.value}
                  </span>

                  <span className="font-mono text-[9px] uppercase leading-normal tracking-widest text-white/70 drop-shadow-sm">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
