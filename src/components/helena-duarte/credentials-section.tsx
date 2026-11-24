import s from "./page.module.css";

export function HelenaCredentialsSection() {
  return (
    <section className={s.credentials} aria-label="Experiência e resultados de Helena Duarte">
      <div className={s.credentialsIntro}>
        <p className={s.eyebrow}>CONFIANÇA CONSTRUÍDA{" "}<br />ENDEREÇO POR ENDEREÇO</p>
        <p>Um olhar próximo.{" "}<br /><em>Uma trajetória consistente.</em></p>
      </div>
      <div className={s.metric} data-helena-reveal><strong>14<span> anos</span></strong><p>de experiência no{" "}<br />mercado imobiliário</p></div>
      <div className={s.metric} data-helena-reveal><strong>+320</strong><p>imóveis negociados com{" "}<br />acompanhamento pessoal</p></div>
      <div className={s.metric} data-helena-reveal><strong><span>R$ </span>280<span> mi</span></strong><p>em negócios que se{" "}<br />tornaram novas histórias</p></div>
    </section>
  );
}
