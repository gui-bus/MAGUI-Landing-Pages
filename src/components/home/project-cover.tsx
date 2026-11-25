import Image from "next/image";
import { syncopate } from "@/components/vitta/fonts";
import { KromaWordmark } from "@/components/kroma/brand";
import { logoFont } from "@/components/la-creme/fonts";
import covers from "./portrait-covers.json";

export function ProjectCover({ slug, title, fallback }: { slug: string; title: string; fallback: string }) {
  const cover = covers[slug as keyof typeof covers];
  const position = cover && "position" in cover ? cover.position : "centre";
  return (
    <>
      <Image
        src={cover ? `/images/${cover.directory}/${cover.photo}` : fallback}
        style={{ objectPosition: position === "east" ? "right center" : position === "west" ? "left center" : "center" }}
        alt={`Projeto ${title}`}
        fill
        sizes="(max-width: 760px) 82vw, 31vw"
      />
      <span className="studio-project-cover-shade" aria-hidden="true" />
      <span className="studio-project-cover-hint" aria-hidden="true">Conheça o projeto <span>↗</span></span>
      {cover && (
        <span className="studio-project-cover-brand" aria-hidden="true">
          {cover.logo ? (
            <Image src={`/images/${cover.directory}/project-cover-mark.webp`} alt="" fill sizes="(max-width: 760px) 62vw, 24vw" />
          ) : slug === "vitta" ? (
            <span className={`${syncopate.className} studio-project-cover-vitta-text`}>VITTA</span>
          ) : slug === "kroma" ? (
            <KromaWordmark className="studio-project-cover-kroma" />
          ) : (
            <span className={`${logoFont.className} studio-project-cover-lacreme`}>La Crème</span>
          )}
        </span>
      )}
    </>
  );
}
