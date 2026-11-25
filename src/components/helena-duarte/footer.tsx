import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import { helenaNav, helenaWhatsappHref } from "./data";
import { AmbientIcon } from "./ambient-icon";
import s from "./page.module.css";

export function HelenaFooter() {
  return (
    <footer id="rodape" className={s.footer}>
      <AmbientIcon kind="plant" className={s.footerAmbient} />
      <Image className={s.footerMonogram} src="/images/helena-duarte/monogram-white.svg" alt="" width={150} height={120} aria-hidden="true" />
      <div className={s.footerInvitation} data-helena-reveal>
        <div>
          <p className={s.eyebrow}>BONS ENDEREÇOS. GRANDES HISTÓRIAS.</p>
          <h2>Alguns encontros{" "}<br />mudam <em>tudo.</em></h2>
          <div className={s.footerConversation}><Link href={helenaWhatsappHref()} target="_blank" rel="noopener noreferrer">O nosso pode começar aqui.</Link><span>Uma conversa. Novas possibilidades.</span></div>
        </div>
        <Link href="#sobre" className={s.footerPortraitLink} aria-label="Conheça Helena Duarte">
          <div className={s.footerPortrait}><Image src="/images/helena-duarte/helena-footer.webp" alt="Helena Duarte na varanda de uma residência" fill sizes="(max-width: 540px) 155px, 220px" /></div>
          <span>Helena Duarte</span><small>Seu próximo lugar, comigo.</small>
        </Link>
      </div>
      <div className={s.footerDirectory} data-helena-reveal>
        <div className={s.footerBrandBlock}><Link href="#inicio" aria-label="Helena Duarte, início"><Image src="/images/helena-duarte/logo-white.webp" alt="Helena Duarte — Curadoria Imobiliária" width={580} height={160} sizes="(max-width: 540px) 245px, 290px" /></Link><p>Arquitetura, afeto e novos começos.{" "}<br />Curadoria imobiliária em Curitiba.</p></div>
        <nav aria-label="Navegação do rodapé"><p className={s.footerLabel}>Explore</p>{helenaNav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <div className={s.footerContact}><p className={s.footerLabel}>Mais perto</p><Link href={helenaWhatsappHref()} target="_blank" rel="noopener noreferrer">Converse comigo no WhatsApp</Link><span>Curitiba e região metropolitana</span><span>Atendimento com hora marcada</span><Link href="#contato" className={s.footerAppointment}>Encontre o seu lugar</Link></div>
      </div>
      <div className={s.footerBottom}>
        <span>© {new Date().getFullYear()} Helena Duarte</span>
        <span>Oferecido por <Link href="https://magui.studio" target="_blank" rel="noopener noreferrer">MAGUI.studio</Link></span>
        <ScrollTopLink className={s.backToTop}>
          <span>Voltar ao topo</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ScrollTopLink>
      </div>
    </footer>
  );
}
