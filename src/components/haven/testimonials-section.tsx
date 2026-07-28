import Image from "next/image";

import { havenTestimonials } from "./data";
import { HavenImageReveal, HavenReveal } from "./motion";

export function HavenTestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="bg-[#f5f5f5] px-5 py-24 text-[#14283D] md:px-8 md:py-28 lg:px-10"
    >
      <div className="grid gap-12 xl:grid-cols-[0.32fr_0.68fr] xl:items-start">
        <HavenReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
            Depoimentos
          </p>
          <h2 className="mt-7 max-w-sm text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            Quem vive, sente.
          </h2>
        </HavenReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {havenTestimonials.map((item, index) => (
            <HavenImageReveal
              key={item.name}
              delay={index * 0.06}
              className="overflow-hidden rounded-[2rem] bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={`Depoimento de ${item.name}`}
                width={900}
                height={900}
                sizes="(min-width: 1024px) 24vw, 100vw"
                className="aspect-[0.96] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="grid gap-4 p-5">
                <p className="text-lg leading-8 text-[#14283D]/76">
                  &quot;{item.quote}&quot;
                </p>
                <div className="border-t border-[#14283D]/10 pt-4">
                  <p className="text-sm font-semibold text-[#14283D]">
                    {item.name}
                  </p>
                  <p className="text-sm text-[#14283D]/56">{item.role}</p>
                </div>
              </div>
            </HavenImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
