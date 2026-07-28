import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { sayegImages } from "./data";
import { sayegDisplay, sayegText } from "./fonts";
import { SayegBackdropWord, SayegImageReveal, SayegReveal } from "./motion";

export function SayegHeroSection() {
  return (
    <section
      id="inicio"
      className={`${sayegText.className} relative bg-[#fafafa] px-6 pt-40 pb-20 md:px-12 lg:px-16 w-full overflow-hidden`}
    >
      <SayegBackdropWord className="absolute right-[-2vw] bottom-[-2vw] pointer-events-none select-none hidden xl:block z-0">
        <span className={`${sayegDisplay.className} block text-[240px] font-bold leading-none tracking-tighter text-[#f0f0f0] 2xl:text-[280px]`}>
          BEATRIZ
        </span>
      </SayegBackdropWord>

      <div className="w-full relative z-10">


        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 w-full">

          <SayegReveal className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#806e68]">
              Visagismo · Brows · Lips
            </span>
            <h1 className={`${sayegDisplay.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-[#2c221e]`}>
              Beleza que respeita <br />
              <span className="font-serif italic text-[#8a7268] pl-4 md:pl-10">seus traços.</span>
            </h1>
          </SayegReveal>

          <SayegReveal delay={0.1} className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
            <p className="mb-6 text-base leading-relaxed text-[#665853] md:text-lg">
              Sobrancelhas, lábios e visagismo para revelar harmonia com precisão, leveza e intenção.
            </p>
            <div>
              <Link href="#especialidades" className="group inline-flex items-center gap-3 border-b border-[#2c221e] pb-1 text-[#2c221e] transition-colors duration-300 hover:border-[#8a7268] hover:text-[#8a7268] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7268] focus-visible:ring-offset-4">
                <span className="font-medium tracking-wide text-sm">Conhecer especialidades</span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </SayegReveal>
        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start lg:mt-16 w-full">


          <SayegImageReveal className="relative w-full md:col-span-7 lg:col-span-8">
            <div className="relative w-full bg-[#fffaf5] border border-[#f0e6e1]/60 overflow-hidden h-85 sm:h-110 md:h-125 lg:h-140">
              <Image
                src={sayegImages.studio}
                alt="Consultório reservado do estúdio Beatriz Sayeg"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] tracking-widest text-[#806e68] uppercase pl-5">
              <span>Editorial Natural</span>
              <span className="h-px w-6 bg-[#ebdcd5]" />
              <span>Visagismo Integrado</span>
            </div>
          </SayegImageReveal>


          <SayegImageReveal delay={0.12} className="relative w-full md:col-span-5 md:mt-12 lg:col-span-4 lg:mt-20">

            <div className="relative w-full overflow-hidden shadow-[0_20px_50px_rgba(70,42,38,0.04)] bg-[#fffaf5] h-70 sm:h-95 md:h-100 lg:h-112.5">
              <Image
                src={sayegImages.profile}
                alt="Beatriz Sayeg em retrato de apresentação"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="mt-6 text-left pl-5">
              <p className={`${sayegDisplay.className} text-2xl lg:text-3xl font-light tracking-wide text-[#2c221e]`}>
                Beatriz Sayeg
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#806e68] mt-1 font-medium">
                Lash, Brows & Visagismo
              </p>
            </div>

          </SayegImageReveal>

        </div>

      </div>
    </section>
  );
}
