import Image from "next/image";
import { bitesImages } from "./data";
import { bitesHeading } from "./fonts";

const experiencePoints = [
  {
    number: "01",
    title: "Atendimento direto",
    text: "Pedido simples, equipe presente e uma experiência leve do balcao ate a entrega.",
  },
  {
    number: "02",
    title: "Loja com identidade",
    text: "Fachada, uniforme e embalagem trabalhando juntos para tornar a Bites reconhecivel.",
  },
  {
    number: "03",
    title: "Vontade de voltar",
    text: "Sabor consistente e uma experiência facil de repetir sempre que bater a fome.",
  },
] as const;

export function BitesExperienceSection() {
  return (
    <section
      id="sabor"
      className="w-full bg-[#F5F5F5] text-[#030401] antialiased selection:bg-[#FB5F00] selection:text-white"
    >

      <div className="grid w-full md:grid-cols-3">
        {experiencePoints.map((point) => (
          <article
            key={point.number}
            className="px-5 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-10 md:last:border-r-0"
          >
            <span className="text-xs font-bold text-[#FB5F00]">
              [ {point.number} ]
            </span>

            <h3
              className={`${bitesHeading.className} mt-7 text-3xl font-black uppercase leading-none md:text-4xl`}
            >
              {point.title}
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#030401]/62">
              {point.text}
            </p>
          </article>
        ))}
      </div>


      <div className="relative overflow-hidden">
        <div className="relative min-h-[760px]">
          <Image
            src={bitesImages.atendimento}
            alt="Equipe Bites apresentando caixa de mini salgados"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />


          <div className="absolute inset-0 bg-linear-to-r from-[#030401]/82 via-[#030401]/42 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030401]/72 via-transparent to-transparent" />


          <div className="relative z-10 flex min-h-[760px] flex-col justify-end px-5 py-10 md:px-10 lg:px-14">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 bg-[#FB5F00]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/62">
                  Experiência Bites
                </p>
              </div>

              <h2
                className={`${bitesHeading.className} mt-6 text-5xl font-black uppercase leading-[0.86] tracking-tight text-[#F0F0F0] sm:text-6xl md:text-7xl lg:text-[7rem]`}
              >
                Uma mordida
                <br />e você entende.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                Crocância, sabor e uma experiência feita para marcar desde o
                primeiro pedido até a última mordida.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-[#FB5F00]">
                <span>Bites / Loja viva</span>
                <span className="h-[1px] w-12 bg-[#FB5F00]/50" />
                <span>Comfort food premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
