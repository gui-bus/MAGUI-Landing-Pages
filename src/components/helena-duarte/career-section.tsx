import Image from "next/image";
import Link from "next/link";
import s from "./page.module.css";

const milestones = [
  { year: "2012", title: "O começo de uma vocação", text: "Primeiros atendimentos em Curitiba e uma certeza: ouvir bem faz toda a diferença na hora de encontrar um imóvel." },
  { year: "2018", title: "Um olhar cada vez mais autoral", text: "A experiência se transforma em curadoria, com foco em imóveis de alto padrão, arquitetura e qualidade de vida." },
  { year: "2022", title: "200 encontros com novos endereços", text: "A marca de 200 imóveis negociados consolida uma trajetória feita de acompanhamento próximo e relações de confiança." },
  { year: "Hoje", title: "A próxima história pode ser a sua", text: "Mais de 320 negociações e R$ 280 milhões em negócios. A mesma atenção pessoal, do primeiro encontro às chaves." },
];

export function HelenaCareerSection() {
  return (
    <section id="trajetoria" className={`${s.section} ${s.career}`}>
      <div className={s.careerVisual} data-helena-reveal>
        <div className={s.careerImage}>
          <Image src="/images/helena-duarte/helena-atendimento.webp" alt="Helena Duarte analisando a planta de um imóvel durante uma visita" fill sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className={s.careerCaption}><span>CONHECIMENTO QUE SE TRADUZ EM CUIDADO</span><p>Presença em cada detalhe.{" "}<br /><em>Segurança em cada escolha.</em></p></div>
      </div>
      <div className={s.careerCopy} data-helena-reveal>
        <p className={s.eyebrow}>UMA TRAJETÓRIA DE BOAS ESCOLHAS</p>
        <h2>Os números contam.{" "}<br />As histórias <em>ficam.</em></h2>
        <p className={s.careerLead}>Cada conquista carrega uma mudança de vida. É isso que dá sentido ao meu trabalho, há mais de uma década.</p>
        <ol className={s.timeline}>{milestones.map(item => <li key={item.year}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol>
        <Link href="#contato" className={s.textLink}>Vamos escrever o seu próximo capítulo</Link>
      </div>
    </section>
  );
}
