import Image from "next/image";
import Link from "next/link";
import styles from "./mavelli-section.module.css";

export function MavelliSection() {
  return (
    <section id="mavelli" className={styles.section} aria-labelledby="mavelli-title">

      <h2 id="mavelli-title" className="sr-only">Mavelli, um produto MAGUI.studio</h2>
      <Link href="https://mavelli.com.br" target="_blank" rel="noopener noreferrer" className={styles.banner} aria-label="Conheça o Mavelli em mavelli.com.br">
        <picture>
          <source media="(max-width: 760px)" srcSet="/images/mavelli/banner-campanha-mobile-final.webp?v=20261125-final" width={1024} height={1536} />
          <Image
            src="/images/mavelli/banner-campanha-final.webp?v=20261125-final"
            alt="Mavelli: o próximo pedido começa aqui. Cardápio digital, pedidos e gestão para servir melhor. Um produto MAGUI.studio."
            width={2172}
            height={724}
            sizes="100vw"
            unoptimized
            className={styles.artwork}
          />
        </picture>
      </Link>
    </section>
  );
}
