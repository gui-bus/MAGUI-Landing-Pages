import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";

export function HelenaAboutSection() {
  return (
    <section id="sobre" className={`${s.section} ${s.about}`}>
      <div className={s.portrait} data-helena-reveal>
        <Image src="/images/helena-duarte/helena.webp" alt="Helena Duarte em seu espaço de atendimento, com luz natural e vista para o jardim" fill sizes="(max-width: 800px) 100vw, 45vw" />
        <span>Escuta antes da busca.{" "}<br />Cuidado até a entrega.</span>
      </div>
      <div className={s.aboutCopy} data-helena-reveal>
        <p className={s.eyebrow}>HELENA DUARTE · CORRETORA DE IMÓVEIS</p>
        <h2>Experiência para orientar.{" "}<br />Sensibilidade para <em>entender.</em></h2>
        <p>Há 14 anos, acompanho pessoas em uma das decisões mais importantes da vida. Nesse caminho, já participei de mais de 320 negociações — e aprendi que nenhum endereço conta a mesma história.</p>
        <p>Minha especialidade é conectar pessoas a imóveis de alto padrão em Curitiba. Conheço o mercado, observo os detalhes e faço questão de estar presente: na escolha, nas visitas, na negociação e no momento de receber as chaves.</p>
        <blockquote className={s.aboutQuote}>“A melhor negociação é aquela em que você tem certeza de que fez a escolha certa para a sua vida.”</blockquote>
        <div className={s.signature}>Helena Duarte</div>
        <p className={s.signatureCaption}>CURADORIA PESSOAL. RELAÇÕES QUE PERMANECEM.</p>
        <Link href="#contato" className={s.textLink}>Quero conversar com a Helena</Link>
      </div>
    </section>
  );
}
