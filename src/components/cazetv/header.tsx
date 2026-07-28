import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-neutral-950 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-4">

          <div className="relative h-10 w-28 sm:h-12 sm:w-32">
            <Image
              src="/images/cazetv/logo-caze-tv-texto-branco.webp"
              alt="CazéTV Logo"
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="object-contain"
              priority
            />
          </div>

          <span className="h-6 w-px bg-zinc-800" />


          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/images/cazetv/logo-copa-2026.webp"
              alt="Copa do Mundo FIFA 2026 Logo"
              fill
              sizes="(max-width: 640px) 40px, 48px"
              className="object-contain"
              priority
            />
          </div>
        </div>


        <div className="flex-wrap gap-8 hidden md:flex">
          <div className="flex flex-col items-center gap-1">
            <div className="text-4xl font-black text-white">104</div>

            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Jogos
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-4xl font-black text-white">48</div>

            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Seleções
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-4xl font-black text-white">3</div>

            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Países
            </div>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <span className="hidden text-[10px] font-bold uppercase tracking-widest text-zinc-400 sm:inline-block">
            Transmissão Oficial
          </span>
          <Link
            href="https://www.youtube.com/@CazeTV"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-6 w-20 sm:h-7 sm:w-24 block hover:opacity-80 transition duration-200"
          >
            <Image
              src="/images/cazetv/logo-youtube.webp"
              alt="YouTube Logo"
              fill
              sizes="(max-width: 640px) 80px, 96px"
              className="object-contain"
              priority
            />
          </Link>
        </div>
      </div>


      <div className="flex-wrap gap-8 flex items-center justify-center mt-10 md:hidden">
        <div className="flex flex-col items-center gap-1">
          <div className="text-4xl font-black text-white">104</div>

          <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Jogos
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="text-4xl font-black text-white">48</div>

          <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Seleções
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="text-4xl font-black text-white">3</div>

          <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Países
          </div>
        </div>
      </div>
    </header>
  );
}
