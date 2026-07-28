import Image from "next/image";
import {
  CalendarCheck,
  ClipboardText,
  Stethoscope,
} from "@phosphor-icons/react/dist/ssr";

import { arcoImages } from "./data";
import { ActionLink, Eyebrow } from "./ui";

const journey = [
  {
    icon: ClipboardText,
    title: "Primeiro contato",
    text: "Entendemos sua necessidade, seus objetivos e a urgência do caso antes de indicar o melhor caminho.",
  },
  {
    icon: Stethoscope,
    title: "Diagnóstico e planejamento",
    text: "A avaliação combina exames, imagens e uma conversa transparente sobre as possibilidades de tratamento.",
  },
  {
    icon: CalendarCheck,
    title: "Acompanhamento contínuo",
    text: "Cada etapa conta com planejamento, orientações e retornos para garantir segurança e previsibilidade ao tratamento.",
  },
];

export function ArcoExperienceSection() {
  return (
    <section className="bg-[#F8FCFE]  text-[#123A5C]">
      <div className="grid lg:grid-cols-[0.56fr_0.44fr]">
        <figure className="relative min-h-[520px] bg-[#D7EAF5] lg:min-h-[760px]">
          <Image
            src={arcoImages.clinicRoom}
            alt="Consultorio moderno da ARCO Odontologia"
            fill
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover"
          />
        </figure>
        <div className="flex flex-col justify-center px-5 py-20 md:px-10 lg:px-14">
          <Eyebrow>Experiencia ARCO</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Clareza para decidir. Tranquilidade para tratar.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4A6477]">
            Trabalhamos com equipamentos modernos, diagnostico digital e um
            acompanhamento proximo para reduzir incertezas e tornar cada fase
            mais previsivel.
          </p>
          <div className="mt-10 grid gap-4">
            {journey.map(({ title, text }) => (
              <article
                key={title}
                className="rounded-lg p-5"
              >
                <div className="flex gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-7 text-[#4A6477]">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9">
            <ActionLink>Agendar primeira avaliacao</ActionLink>
          </div>
        </div>
      </div>

      <div className="grid gap-px bg-[#1F5687]/12 md:grid-cols-3">
        {[
          {
            image: arcoImages.planning,
            alt: "Dentista explicando um procedimento odontológico ao paciente",
            title: "Atendimento transparente",
          },
          {
            image: arcoImages.team,
            alt: "Equipe da ARCO Odontologia durante atendimento",
            title: "Acompanhamento próximo",
          },
          {
            image: arcoImages.facade,
            alt: "Fachada da clínica ARCO Odontologia",
            title: "Estrutura acolhedora",
          },
        ].map((item) => (
          <figure
            key={item.title}
            className="relative min-h-[360px] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-lg bg-white/92 px-4 py-3 text-sm font-bold text-[#123A5C] shadow-[0_18px_40px_rgba(18,58,92,0.14)] backdrop-blur">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
