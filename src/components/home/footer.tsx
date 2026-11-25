import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import styles from "./footer.module.css";

function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function HomeFooter() {
  return (
    <footer className={styles.footer} id="contato" aria-labelledby="footer-title">
      <div className={styles.panel}>
        <Image className={styles.backgroundIcon} src="/utils/icon.svg" alt="" aria-hidden="true" width={980} height={940} sizes="(max-width: 760px) 90vw, 50vw" />
        <div className={styles.topline}>
          <Link href="/" aria-label="MAGUI.studio — início" className={styles.brand}>
            <Image src="/utils/logo-dark.svg" alt="MAGUI.studio" width={499} height={55} sizes="180px" />
          </Link>
          <span className={styles.signature}>Design com intenção. Presença com personalidade.</span>
        </div>

        <div className={styles.invitation}>
          <div>
            <p className={styles.eyebrow}><span aria-hidden="true" /> O próximo projeto pode ser o seu</p>
            <h2 id="footer-title">Sua essência.<br />Uma nova <span>presença.</span></h2>
            <p className={styles.intro}>Da primeira ideia ao último detalhe, criamos páginas que fazem a sua marca ser vista, lembrada e sentida.</p>
          </div>
          <Link href={`https://wa.me/5512981847553?text=${encodeURIComponent("Olá! Conheci o portfólio da MAGUI.studio e gostaria de conversar sobre meu projeto.")}`} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            <span className={styles.projectLinkTop}><span>Vamos tirar sua<br />ideia do papel?</span><Arrow /></span>
            <span className={styles.projectLinkBottom}>Conversar sobre meu projeto <span aria-hidden="true">↗</span></span>
          </Link>
        </div>

        <div className={styles.details}>
          <div className={styles.emailBlock}>
            <span className={styles.label}>Prefere escrever?</span>
            <Link href="mailto:contato@magui.studio" className={styles.email}>contato@magui.studio <Arrow /></Link>
          </div>
          <nav className={styles.navigation} aria-label="Navegação do rodapé">
            <span className={styles.label}>Explore</span>
            <Link href="#destaques">Projetos em destaque</Link>
            <Link href="#projetos">Portfólio selecionado</Link>
          </nav>
          <div className={styles.networks}>
            <span className={styles.label}>Acompanhe o estúdio</span>
            <Link href="https://www.instagram.com/_magui.studio" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></Link>
            <Link href="https://www.linkedin.com/company/magui-studio" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
      <div className={styles.colophon}>
        <p>Oferecido por <Link href="https://magui.studio">MAGUI.studio</Link></p>
        <span>© {new Date().getFullYear()} · Design sob medida.</span>
        <ScrollTopLink>Voltar ao topo <span aria-hidden="true">↑</span></ScrollTopLink>
      </div>
    </footer>
  );
}
