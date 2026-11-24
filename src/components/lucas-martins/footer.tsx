import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";
import { LucasIcon } from "./icon";
import { housingSource, lucasNav, lucasWhatsappHref } from "./data";
import s from "./page.module.css";

export function LucasFooter() {
 return <footer id="rodape" className={s.footer}>
  <div className={s.footerCanvas}>
   <div className={s.footerEyebrow}><span className={s.footerAvailability}><i/>UMA CONVERSA PARA COMEÇAR</span><span>CURITIBA · PARANÁ</span></div>
   <div className={s.footerStatement}><h2>Seu primeiro imóvel.<br/><span>Vamos dar o próximo passo?</span></h2><Link href={lucasWhatsappHref()} target="_blank" rel="noopener noreferrer" className={s.footerAction}>Fale com o Lucas <span aria-hidden="true">↗</span></Link></div>
   <p className={s.footerSubline}>Orientação pessoal para transformar suas dúvidas em escolhas bem informadas.</p>
   <div className={s.footerBrandRow}><Link href="#inicio" className={s.footerSignature} aria-label="Lucas Martins, início"><Image src="/images/lucas-martins/logo-red-light.webp" alt="Lucas Martins — primeiro imóvel" width={600} height={170} sizes="250px"/></Link><span className={s.footerMotto}>Pessoas.<br/>Planos.<br/><strong>Novos começos.</strong></span></div>
   <nav className={s.footerNavigation} aria-label="Navegação do rodapé">{lucasNav.map(item=><Link href={item.href} key={item.href}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>
   <div className={s.footerDetails}><span>Curitiba e região metropolitana</span><span>Atendimento com horário combinado</span><Link href={housingSource} target="_blank" rel="noopener noreferrer">Informações oficiais do MCMV ↗</Link></div>
   <div className={s.footerCredits}><span>© {new Date().getFullYear()} Lucas Martins</span><span>Oferecido por <Link href="https://magui.studio" target="_blank" rel="noopener noreferrer">MAGUI.studio</Link></span><ScrollTopLink>Voltar ao topo ↑</ScrollTopLink></div>
   <LucasIcon name="key" size={380} className={s.footerKey}/>
  </div>
 </footer>;
}

