import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import { Warning } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-900 bg-neutral-950 pt-12 pb-24 text-zinc-500">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between pb-8 border-b border-zinc-900/60">

          <div className="flex flex-col gap-3 max-w-sm">
            <div className="relative h-20 w-44 transition-opacity duration-300">
              <Image
                src="/images/cazetv/logo-caze-tv-texto-branco.webp"
                alt="CazéTV Logo"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Calendário interativo de jogos para a Copa do Mundo FIFA 2026. Acompanhe os resultados e o chaveamento eliminatório.
            </p>
          </div>


          <div className="flex flex-col gap-2 md:items-end text-xs">
            <p className="font-semibold text-zinc-400">
              © {new Date().getFullYear()} CazéTV • Projeto de Portfólio
            </p>
            <div className="flex items-center gap-3 text-zinc-500">
              <span>
                Oferecido por{" "}
                <Link
                  href="https://magui.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-zinc-400 hover:text-orange-500 transition duration-200"
                >
                  <strong>MAGUI</strong>.studio
                </Link>
              </span>
              <span className="text-zinc-800">|</span>
              <ScrollTopLink className="text-zinc-400 hover:text-orange-500 transition duration-200 cursor-pointer">
                Voltar ao topo ↑
              </ScrollTopLink>
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-2.5 mt-8 pb-6 border-b border-zinc-900/60 text-xs">
          <span className="font-black text-zinc-400 uppercase tracking-wider text-[9px]">Fontes de Informações e Dados Referenciados:</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-zinc-500">
            <Link
              href="https://www.thestatsapi.com/world-cup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition duration-200 font-semibold"
            >
              The Stats API (World Cup Data) ↗
            </Link>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <Link
              href="https://www.fifa.com/pt/tournaments/mens/worldcup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition duration-200 font-semibold"
            >
              FIFA World Cup Hub ↗
            </Link>
            <span className="text-zinc-800 hidden sm:inline">•</span>
            <Link
              href="https://www.instagram.com/cazetv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition duration-200 font-semibold"
            >
              Instagram Oficial CazéTV ↗
            </Link>
          </div>
        </div>


        <div className="mt-8 rounded-2xl bg-zinc-900/10 border border-zinc-900/50 p-6 text-[10px] text-zinc-500 leading-relaxed">
          <p className="font-extrabold uppercase text-zinc-300 mb-2 tracking-wider flex items-center gap-1.5 select-none">
            <Warning size={12} className="text-orange-500 shrink-0" />
            Aviso de Propriedade Intelectual e Isenção de Responsabilidade
          </p>
          <p>
            Este website é um projeto não-oficial desenvolvido exclusivamente como um estudo de caso profissional de design de interfaces e estudo de tecnologia. Todos os logotipos, marcas registradas, nomes comerciais e direitos de imagem associados à CazéTV pertencem à Live Mode / CazéTV. Todos os direitos e propriedade intelectual sobre o torneio Copa do Mundo FIFA 2026 e suas marcas associadas pertencem à FIFA e entidades parceiras. Este site não possui fins lucrativos, comerciais ou afiliação comercial, não pretendendo representar, agir em nome ou sugerir vínculo oficial com as entidades proprietárias das marcas.
          </p>
        </div>
      </div>
    </footer>
  );
}
