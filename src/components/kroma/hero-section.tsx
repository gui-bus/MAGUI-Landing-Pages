import Image from "next/image";
import Link from "next/link";
import { images, proof } from "./data";
import { alexandria } from "./fonts";


export function KromaHeroSection() {
  return (
<section
  id="inicio"
  className="relative bg-[#2A2A2A] text-white overflow-hidden flex flex-col justify-between"
>
  <div className="absolute inset-0 z-0">
    <Image
      src={images.hero}
      alt="Telhado industrial com paineis solares instalados"
      fill
      priority
      sizes="100vw"
      className="kroma-kenburns object-cover"
    />

    <div className="absolute inset-0 bg-[#2A2A2A]/40 mix-blend-multiply" />
  </div>

  <div className="relative z-10 mx-auto w-full max-w-400 px-5 pt-32 md:px-8 lg:px-10 flex-grow flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_0.35fr] gap-16 lg:gap-24 w-full items-start">
      <div
        className="kroma-reveal flex flex-col items-start"
      >
        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#FFBC4F]">
          [ KROMA
        </div>

        <h1 className={`mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl xl:text-[100px] text-white uppercase ${alexandria.className}`}>
          Energia que move o futuro.
        </h1>

        <p className="mt-10 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
          Transformamos estruturas arquitetônicas e complexos industriais
          em matrizes de geração autônoma. Engenharia de precisão
          integrada para reduzir dependência e garantir previsibilidade
          absoluta.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="#contato"
            className="kroma-cta inline-flex items-center justify-center bg-[#FFBC4F] px-8 py-4.5 text-xs font-bold uppercase tracking-widest text-[#2A2A2A] transition duration-300 hover:bg-white rounded-none"
          >
            Solicitar Estudo Técnico
          </Link>
          <Link
            href="#produtos"
            className="kroma-cta inline-flex items-center justify-center border border-white/20 px-8 py-4.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#2A2A2A] rounded-none"
          >
            Ver Ecossistema
          </Link>
        </div>
      </div>

      <div
        className="kroma-card-hover kroma-reveal kroma-delay-2 hidden w-full flex-col border border-white/12 bg-[#2A2A2A]/42 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-md lg:flex"
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#FFBC4F]">
              entrega integrada
            </span>
            <p className="mt-2 text-sm font-medium text-white/76">
              Engenharia, equipamento e regulatorio no mesmo fluxo.
            </p>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-white/10">
          {[
            {
              num: "01",
              title: "Paineis de alta eficiencia",
              desc: "Modulos dimensionados para area, consumo e curva de geracao.",
            },
            {
              num: "02",
              title: "Inversores e armazenamento",
              desc: "Arquitetura eletrica preparada para protecao, telemetria e expansao.",
            },
            {
              num: "03",
              title: "Homologacao técnica",
              desc: "Documentacao, aprovacoes e comissionamento ate o sistema entrar em operacao.",
            },
          ].map((item) => (
            <div
              key={item.num}
            className="group grid grid-cols-[42px_1fr] gap-4 py-5 transition duration-300 hover:translate-x-1"
            >
              <span className="pt-1 font-mono text-[11px] text-[#FFBC4F]">
                {item.num}
              </span>
              <div>
                <h3
                  className={`text-base font-semibold tracking-[-0.02em] text-white ${alexandria.className}`}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-3 border-t border-white/10 pt-5">
          {["projeto", "equipamento", "suporte"].map((item) => (
            <span
              key={item}
              className="border-r border-white/10 text-center font-mono text-[9px] uppercase tracking-[0.22em] text-white/46 last:border-r-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>


  <div
    className="kroma-reveal kroma-delay-3 relative z-10 w-full border-t border-white/10 bg-[#2A2A2A]/40 backdrop-blur-md mt-24"
  >
    <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-between">
        <div className="kroma-drift flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#FFBC4F]">
            KROMA Core
          </span>
          <span className="mt-2 text-xs text-white/60">
            Infraestrutura solar corporativa e residencial.
          </span>
        </div>
        {proof.slice(1).map((item) => (
          <div
            key={item.label}
            className="flex flex-col border-l border-white/10 pl-6 transition duration-300 hover:border-[#FFBC4F] hover:pl-8"
          >
            <span className="font-mono text-2xl font-light tracking-tight text-white">
              {item.value}
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-wider text-white/40 font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
