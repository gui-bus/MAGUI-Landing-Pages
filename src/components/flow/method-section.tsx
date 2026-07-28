import { ArrowRight } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { flowImages, flowMethod } from "./data";

export function FlowMethodSection() {
  return (
    <section id="metodo" className="py-20 px-5 md:px-8 lg:px-10">
      <div className="flex flex-col lg:flex-row-reverse lg:gap-20">

        <div className="mt-20 flex flex-col lg:mt-0 lg:w-1/2">
          {flowMethod.map(([number, title, text]) => (
            <div key={title} className="flex gap-8 border-b border-[#061421]/10 py-10 last:border-0">
              <span className="text-sm font-bold text-[#061421]/30">{number}</span>
              <div>
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#061421]/60">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/2">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#061421]/50">Atendimento técnico</p>
            <h2 className="mt-6 text-5xl font-medium leading-none tracking-tight text-[#061421] md:text-7xl">
              Orientação para o reef amadurecer bem.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[#061421]/70">
              Mais do que vender produtos, a FLOW acompanha escolhas. O atendimento
              traduz técnica em decisão clara para montar, manter e evoluir aquários
              marinhos com segurança.
            </p>
            <Link
              href="https://wa.me/5500000000000?text=Oi%2C%20FLOW.%20Quero%20orientacao%20para%20montar%20ou%20evoluir%20meu%20aquario%20marinho."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-[#061421] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#061421] transition hover:bg-[#061421] hover:text-white"
            >
              Falar com a FLOW
              <ArrowRight size={15} weight="bold" />
            </Link>
          </div>


          <div className="relative aspect-[4/3] w-full bg-slate-100">
            <Image
              src={flowImages.familyGuidance}
              alt="Família recebendo instruções técnicas"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}