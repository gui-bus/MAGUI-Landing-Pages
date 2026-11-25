import Image from "next/image";
import Link from "next/link";

export function HomeHeader() {
  return (
    <header className="studio-header">
      <div className="studio-brand-lockup">
        <Link href="/" className="studio-wordmark" aria-label="MAGUI.studio — início">
          <Image
            src="/utils/logo-dark.svg"
            alt="MAGUI.studio"
            width={499}
            height={55}
            sizes="(max-width: 760px) 130px, 178px"
            preload
          />
        </Link>
        <span className="studio-brand-divider" aria-hidden="true">|</span>
        <span className="studio-brand-tagline">Páginas de alto padrão</span>
      </div>
      <nav aria-label="Navegação principal">
        <Link href="#destaques">Destaques</Link>
        <Link href="#projetos">Projetos</Link>
        <Link
          className="studio-contact-link"
          href={`https://wa.me/5512981847553?text=${encodeURIComponent("Olá! Conheci o portfólio da MAGUI.studio e gostaria de conversar sobre meu projeto.")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos conversar
        </Link>
      </nav>
    </header>
  );
}
