import {
  ArrowRight,
  ArrowUpRight,
  Package,
  ShieldCheck,
  Truck,
} from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import { pulseImages, pulseNav, pulseWhatsapp } from "./data";

const shopLinks = [
  ["#colecao", "Feminino"],
  ["#colecao", "Masculino"],
  ["#colecao", "Todos os sets"],
  ["#tecnologia", "Tecnologia dos tecidos"],
  ["#guia", "Guia de compra"],
];

const supportLinks = [
  [pulseWhatsapp, "Atendimento WhatsApp", true],
  ["https://www.instagram.com/", "Instagram", true],
  ["#colecao", "Trocas e tamanhos", false],
  ["#tecnologia", "Cuidados com a peça", false],
] as const;

const benefits = [
  {
    icon: Truck,
    title: "Frete Cortesia",
    text: "Disponível para pedidos acima de R$ 499",
  },
  {
    icon: Package,
    title: "Garantia de Caimento",
    text: "Primeira troca sem custo e sem burocracia",
  },
  {
    icon: ShieldCheck,
    title: "Suporte Privado",
    text: "Atendimento exclusivo para escolha de tamanhos e conjuntos",
  },
];

export function PulseFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto px-5 py-10 md:px-8 lg:px-10 lg:py-14 flex flex-col gap-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl">
                Performance premium <br />
                <span>
                  para a rotina inteira.
                </span>
              </h2>
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/60">
                Acesse drops exclusivos, avisos de reposições e garanta suas
                peças antes que o estoque esgote.
              </p>
            </div>


            <form className="mt-10 flex w-full flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <label className="sr-only" htmlFor="pulse-newsletter">
                  E-mail
                </label>
                <input
                  id="pulse-newsletter"
                  type="email"
                  placeholder="Seu e-mail principal"
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 text-sm font-medium text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#F97316]"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#F97316]"
              >
                Cadastrar
                <ArrowRight
                  size={15}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          <div className="grid gap-px lg:col-span-5 sm:grid-cols-3 lg:grid-cols-1">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-[#0F0F0F] p-6 md:p-8 flex flex-col justify-between lg:flex-row lg:items-start lg:gap-6"
              >
                <div className="p-2 w-fit self-start">
                  <Icon size={20} weight="bold" className="text-[#F97316]" />
                </div>
                <div className="mt-6 lg:mt-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-white">
                    {title}
                  </p>
                  <p className="mt-1.5 text-xs font-medium leading-relaxed text-white/50">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_0.7fr_0.7fr_1fr]">
          <div>
            <Image
              src={pulseImages.logo_text}
              alt="Pulse"
              width={150}
              height={46}
              className="h-8 w-auto object-contain"
            />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/54">
              Roupas fitness premium para homens e mulheres que treinam,
              circulam e vivem movimento com presença.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#F97316]">
              navegar
            </p>
            <nav className="mt-5 grid gap-3 text-sm text-white/54">
              {pulseNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit transition hover:text-[#F97316]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#F97316]">
              loja
            </p>
            <nav className="mt-5 grid gap-3 text-sm text-white/54">
              {shopLinks.map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  className="w-fit transition hover:text-[#F97316]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#F97316]">
              atendimento
            </p>
            <nav className="mt-5 grid gap-3 text-sm text-white/54">
              {supportLinks.map(([href, label, external]) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group inline-flex w-fit items-center gap-2 transition hover:text-[#F97316]"
                >
                  {label}
                  {external && (
                    <ArrowUpRight
                      size={13}
                      weight="bold"
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <Link
              href={pulseWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 bg-white px-5 py-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0B0B0B] transition hover:bg-[#F97316]"
            >
              comprar com suporte
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-5 text-xs text-white/44 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Pulse. Tecnologia, performance e
            estilo.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition hover:text-[#F97316] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              >
                <strong className="font-black">MAGUI</strong>
                <span className="text-[#0094C8]">.</span>
                <span>studio</span>
              </Link>
            </span>
            <span aria-hidden="true" className="text-white/20">
              |
            </span>
            <ScrollTopLink
              className="inline-flex cursor-pointer items-center gap-1 text-white transition hover:text-[#F97316] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
            >
              Voltar ao topo
              <span aria-hidden="true">↑</span>
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
