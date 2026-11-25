import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import houseIcon from "../../../public/images/lucas-martins/brand-icon-house.png";
import { housingSource, lucasNav, lucasWhatsappHref } from "./data";
import s from "./page.module.css";

export function LucasFooter() {
 return <footer id="rodape" className={s.footer}>
  <div className={s.footerCanvas}>
   <div className={s.footerEyebrow}><span className={s.footerAvailability}><i/>UMA CONVERSA PARA COMEÇAR</span><span>SÃO PAULO · SP</span></div>
   <div className={s.footerStatement}><h2>Seu primeiro imóvel.<br/><span>Vamos dar o próximo passo?</span></h2><Link href={lucasWhatsappHref()} target="_blank" rel="noopener noreferrer" className={s.footerAction}>Fale com o Lucas <span aria-hidden="true">↗</span></Link></div>
   <p className={s.footerSubline}>Orientação pessoal para transformar suas dúvidas em escolhas bem informadas.</p>
   <div className={s.footerBrandRow}><Link href="#inicio" className={s.footerSignature} aria-label="Lucas Martins, início"><Image src="/images/lucas-martins/wordmark-stacked-light.webp" alt="Lucas Martins" width={1361} height={582} sizes="250px"/></Link><span className={s.footerMotto}>Pessoas.<br/>Planos.<br/><strong>Novos começos.</strong></span></div>
   <nav className={s.footerNavigation} aria-label="Navegação do rodapé">{lucasNav.map(item=><Link href={item.href} key={item.href}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>
   <div className={s.footerDetails}><span>São Paulo e região metropolitana</span><span>Atendimento com horário combinado</span><Link href={housingSource} target="_blank" rel="noopener noreferrer">Informações oficiais do MCMV ↗</Link></div>
   <div className={s.footerCredits}>
    <span>© {new Date().getFullYear()} Lucas Martins</span>
    <span>Oferecido por <Link href="https://magui.studio" target="_blank" rel="noopener noreferrer">MAGUI.studio</Link></span>
    <ScrollTopLink className={s.backToTop}>
     <span>Voltar ao topo</span>
     <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
    </ScrollTopLink>
   </div>
  </div>
  <Image src={houseIcon} alt="" aria-hidden="true" className={s.footerHouse} sizes="(max-width: 540px) 420px, (max-width: 1000px) 600px, 820px" />
 </footer>;
}

