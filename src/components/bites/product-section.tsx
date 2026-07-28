import Image from "next/image";
import Link from "next/link";
import { bitesImages, bitesWhatsapp } from "./data";
import { bitesHeading } from "./fonts";
import { BitesButton, BitesLabel } from "./ui";

const featuredProducts = [
  {
    name: "Mini Coxinha",
    text: "Massa leve de batata, recheio cremoso e uma crosta dourada feita para abrir o apetite antes da primeira mordida.",
    image: bitesImages.coxinha,
    tag: "A mais pedida",
  },
  {
    name: "Bolinha de Queijo",
    text: "Queijo puxando no ponto perfeito, formato milimetricamente esférico e aquela vontade imediata de pedir a próxima rodada.",
    image: bitesImages.bolinha,
    tag: "Cremosidade pura",
  },
] as const;

export function BitesProductSection() {
  return (
    <section
      id="linha"
      className="bg-[#F5F5F5] text-[#030401] py-16 antialiased md:py-24 border-t border-[#030401]/10 selection:bg-[#FB5F00] selection:text-white w-full"
    >

      <div className="w-full border-b border-[#030401] px-4 pb-12 md:px-12 md:pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 bg-[#FB5F00]" />
              <p className="text-xs uppercase tracking-[0.2em]  text-[#030401]/60">
                Linha quente
              </p>
            </div>
            <h2
              className={`${bitesHeading.className} text-6xl font-black tracking-tighter leading-[0.85] uppercase sm:text-7xl md:text-8xl lg:text-[9rem]`}
            >
              Crocância pura.
              <br />
              <span className="text-[#FB5F00]">Design no sabor.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:text-right border-l-2 border-[#FB5F00] pl-4 lg:border-l-0 lg:border-r-2 lg:pr-4 lg:pl-0">
            <p className="text-sm font-medium leading-relaxed text-[#030401]/80">
              Salgados clássicos com recheio generoso, crosta dourada e uma
              apresentação feita para dar vontade.
            </p>
          </div>
        </div>
      </div>


      <div className="grid w-full border-b border-[#030401] xl:grid-cols-12">

        <div className="relative xl:col-span-5 border-b xl:border-b-0 xl:border-r border-[#030401] bg-[#F5F5F5]">
          <div className="relative h-full min-h-160 lg:min-h-260">
            <Image
              src={bitesImages.cardapio}
              alt="Cardápio oficial Bites"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
              <span className="inline-flex bg-[#FB5F00] px-3 py-1 text-[10px] uppercase tracking-[0.22em] font-bold">
                Catálogo Oficial
              </span>

              <h2
                className={`${bitesHeading.className} mt-5 text-4xl md:text-5xl uppercase leading-none`}
              >
                Cardápio Bites
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                Salgados fritos preparados na hora para transformar qualquer
                momento em uma mordida memorável.
              </p>
            </div>
          </div>
        </div>


        <div className="xl:col-span-7 grid divide-y divide-[#030401]">
          {featuredProducts.slice(0, 2).map((product, index) => (
            <article
              key={product.name}
              className="group relative min-h-[380px] overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-bottom"
              />

              <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />


              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10 text-white">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-[#FB5F00]">
                    [ 0{index + 1} ]
                  </span>

                  <span className="border border-white/20 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
                    {product.tag}
                  </span>
                </div>

                <h3
                  className={`${bitesHeading.className} text-3xl md:text-5xl uppercase leading-none`}
                >
                  {product.name}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
                  {product.text}
                </p>

                <Link
                  href={bitesWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FB5F00] transition-transform duration-300 group-hover:translate-x-2"
                >
                  <span>Quero uma mordida</span>
                  <span className="font-bold">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#030401] text-[#F0F0F0]">
        <Image
          src={bitesImages.combo}
          alt="Combo de cento de salgados Bites com Coca-Cola"
          width={1600}
          height={1300}
          className="h-180 w-full object-cover opacity-72"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center p-6 md:p-12">
          <div className="max-w-3xl">
            <h2
              className={`${bitesHeading.className} mt-6 text-6xl font-extrabold leading-[0.86] tracking-[-0.05em] md:text-8xl`}
            >
              O cento que parece campanha.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
              Caixa pronta para compartilhar, bebida gelada do lado e salgados
              quentes para reunir todo mundo.
            </p>
            <div className="mt-8">
              <BitesButton>Quero Bites agora</BitesButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
