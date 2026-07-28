import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react/dist/ssr";

import { ProjectWhatsappButton } from "@/components/project-whatsapp-button";
import {
  sectionMap,
  sections,
  visibleSections,
} from "@/components/sections/registry";
import {
  buildProjectMetadata,
  createBreadcrumbJsonLd,
  createProjectJsonLd,
  getRequestSiteUrl,
  sanitizeText,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata(
  props: PageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const entry = sectionMap[slug];
  const baseUrl = await getRequestSiteUrl();

  if (!entry) {
    return {
      title: "MAGUI.studio | Projeto não encontrado",
    };
  }

  return buildProjectMetadata(entry, baseUrl);
}

export default async function ProjectPage(props: PageProps) {
  const { slug } = await props.params;
  const entry = sectionMap[slug];
  const baseUrl = await getRequestSiteUrl();

  if (!entry) {
    notFound();
  }

  const SectionComponent = entry.component;
  const currentIndex = visibleSections.findIndex(
    (section) => section.slug === entry.slug,
  );
  const previousEntry =
    currentIndex >= 0
      ? visibleSections[
          (currentIndex - 1 + visibleSections.length) % visibleSections.length
        ]
      : null;
  const nextEntry =
    currentIndex >= 0
      ? visibleSections[(currentIndex + 1) % visibleSections.length]
      : null;

  return (
    <main className="bg-[var(--canvas)]">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createProjectJsonLd(entry, baseUrl)),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createBreadcrumbJsonLd(entry, baseUrl)),
        }}
      />
      <SectionComponent />
      {entry.slug !== "cazetv" && (
        <ProjectWhatsappButton
          projectSlug={entry.slug}
          projectTitle={sanitizeText(entry.title)}
        />
      )}
      {previousEntry && nextEntry ? (
        <nav
          aria-label="Navegação entre projetos"
          className="fixed inset-x-0 bottom-8 z-80 flex justify-center px-4"
        >
          <div className="flex w-fit items-center gap-1 rounded-lg border border-black/10 bg-white px-3 py-2 shadow-sm">
            <Link
              href={`/projetos/${previousEntry.slug}`}
              title={`Anterior: ${sanitizeText(previousEntry.title)}`}
              className="inline-flex size-7 items-center justify-center rounded-md text-black transition-colors hover:bg-neutral-50"
            >
              <ArrowLeft size={14} weight="bold" />
            </Link>

            <Link
              href={`/projetos/${nextEntry.slug}`}
              title={`Próximo: ${sanitizeText(nextEntry.title)}`}
              className="inline-flex size-7 items-center justify-center rounded-md text-black transition-colors hover:bg-neutral-50"
            >
              <ArrowRight size={14} weight="bold" />
            </Link>

            <span className="mx-2 h-4 w-px bg-black/10" aria-hidden="true" />

            <Link
              href="/"
              title="Voltar ao portfólio"
              className="inline-flex size-7 items-center justify-center rounded-md text-black transition-colors hover:bg-neutral-50 hover:text-red-500"
            >
              <X size={14} weight="bold" />
            </Link>
          </div>
        </nav>
      ) : null}
    </main>
  );
}
