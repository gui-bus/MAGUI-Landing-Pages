import type { Metadata } from "next";
import { headers } from "next/headers";

import type { SectionEntry } from "@/components/sections/registry";

export const siteConfig = {
  name: "MAGUI.studio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://magui.studio",
  title: "MAGUI.studio | Estúdio digital e design sob medida",
  description:
    "Estúdio digital especializado em páginas de alto padrão para o mercado imobiliário, clínicas de saúde e marcas que buscam presença digital sob medida.",
  ogImage: "/utils/og-image.webp",
  locale: "pt_BR",
  keywords: [
    "MAGUI.studio",
    "magui.studio",
    "estúdio digital",
    "design sob medida",
    "landing pages premium",
    "sites para o mercado imobiliário",
    "lançamentos imobiliários",
    "sites para clínicas de saúde",
    "sites para clínicas odontológicas",
    "sites para clínicas veterinárias",
    "design responsivo",
    "desenvolvimento web",
  ],
} as const;

const mojibakeMap: Record<string, string> = {
  "ÃƒÂ¡": "Ã¡",
  "Ãƒ ": "Ã ",
  "ÃƒÂ¢": "Ã¢",
  "ÃƒÂ£": "Ã£",
  "ÃƒÂ¤": "Ã¤",
  "ÃƒÂ©": "Ã©",
  "ÃƒÂ¨": "Ã¨",
  "ÃƒÂª": "Ãª",
  "ÃƒÂ«": "Ã«",
  "ÃƒÂ­": "Ã­",
  "ÃƒÂ¬": "Ã¬",
  "ÃƒÂ®": "Ã®",
  "ÃƒÂ¯": "Ã¯",
  "ÃƒÂ³": "Ã³",
  "ÃƒÂ²": "Ã²",
  "ÃƒÂ´": "Ã´",
  "ÃƒÂµ": "Ãµ",
  "ÃƒÂ¶": "Ã¶",
  "ÃƒÂº": "Ãº",
  "ÃƒÂ¹": "Ã¹",
  "ÃƒÂ»": "Ã»",
  "ÃƒÂ¼": "Ã¼",
  "ÃƒÂ§": "Ã§",
  "ÃƒÂ±": "Ã±",
  "ÃƒÂ": "Ã",
  "Ãƒâ‚¬": "Ã€",
  "Ãƒâ€š": "Ã‚",
  "ÃƒÆ’": "Ãƒ",
  "Ãƒâ€°": "Ã‰",
  "ÃƒÅ ": "ÃŠ",
  "ÃƒÂ": "Ã",
  "Ãƒâ€œ": "Ã“",
  "Ãƒâ€": "Ã”",
  "Ãƒâ€¢": "Ã•",
  "ÃƒÅ¡": "Ãš",
  "Ãƒâ€¡": "Ã‡",
  "Ã¢â‚¬â„¢": "'",
  "Ã¢â‚¬Å“": '"',
  "Ã¢â‚¬Â": '"',
  "Ã¢â‚¬â€œ": "-",
  "Ã¢â‚¬â€": "-",
  "Ã‚Â©": "Â©",
  "Ã‚Âº": "Âº",
};

export function sanitizeText(value: string) {
  return Object.entries(mojibakeMap).reduce(
    (text, [from, to]) => text.replaceAll(from, to),
    value,
  );
}

export function absoluteUrl(path = "/", baseUrl = siteConfig.url) {
  return new URL(path, baseUrl).toString();
}

export async function getRequestSiteUrl() {
  const headerStore = await headers();
  const forwardedProto = headerStore.get("x-forwarded-proto");
  const forwardedHost = headerStore.get("x-forwarded-host");
  const host = headerStore.get("host");
  const resolvedHost = forwardedHost ?? host;

  if (!resolvedHost) {
    return siteConfig.url;
  }

  const protocol =
    forwardedProto ?? (resolvedHost.includes("localhost") ? "http" : "https");

  return `${protocol}://${resolvedHost}`;
}

export function buildDefaultMetadata(baseUrl = siteConfig.url): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: siteConfig.title,
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: "/",
    },
    icons: {
      icon: [{ url: "/favicon.ico?v=2", sizes: "any" }],
      shortcut: "/favicon.ico?v=2",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: baseUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          alt: "MAGUI.studio — Estúdio digital e design sob medida",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
  };
}

export function buildProjectMetadata(
  entry: SectionEntry,
  baseUrl = siteConfig.url,
): Metadata {
  const fallbackTitle = `${entry.title} | ${entry.projectType} | MAGUI.studio`;
  const fallbackDescription = entry.seoDescription ?? entry.description;

  const title =
    entry.slug === "flora"
      ? "Flora | Garden center premium | MAGUI.studio"
      : sanitizeText(entry.seoTitle ?? fallbackTitle);
  const description =
    entry.slug === "flora"
      ? "Garden center premium com plantas ornamentais, vasos, curadoria para interiores e decoracao natural para ambientes sofisticados."
      : sanitizeText(fallbackDescription);

  return {
    title,
    description,
    keywords: [
      ...siteConfig.keywords,
      sanitizeText(entry.title),
      sanitizeText(entry.industry),
      sanitizeText(entry.projectType),
      ...entry.tags.map(sanitizeText),
    ],
    alternates: {
      canonical: absoluteUrl(`/projetos/${entry.slug}`, baseUrl),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/projetos/${entry.slug}`, baseUrl),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: entry.cardImage ?? siteConfig.ogImage,
          alt: `${sanitizeText(entry.title)} | Projeto MAGUI.studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [entry.cardImage ?? siteConfig.ogImage],
    },
    robots: {
      index: entry.slug !== "cazetv",
      follow: entry.slug !== "cazetv",
      googleBot: {
        index: entry.slug !== "cazetv",
        follow: entry.slug !== "cazetv",
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createOrganizationJsonLd(baseUrl = siteConfig.url) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    logo: absoluteUrl("/favicon.ico", baseUrl),
    description: siteConfig.description,
    sameAs: [
      "https://www.instagram.com/_magui.studio",
      "https://www.linkedin.com/company/magui-studio",
    ],
  };
}

export function createPortfolioJsonLd(
  entries: SectionEntry[],
  baseUrl = siteConfig.url,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: siteConfig.title,
    url: baseUrl,
    description: siteConfig.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: entries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: sanitizeText(entry.title),
        url: absoluteUrl(`/projetos/${entry.slug}`, baseUrl),
      })),
    },
  };
}

export function createProjectJsonLd(
  entry: SectionEntry,
  baseUrl = siteConfig.url,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: sanitizeText(entry.title),
    headline: sanitizeText(entry.title),
    description: sanitizeText(entry.seoDescription ?? entry.description),
    url: absoluteUrl(`/projetos/${entry.slug}`, baseUrl),
    image: entry.cardImage
      ? [absoluteUrl(entry.cardImage, baseUrl)]
      : undefined,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    about: [
      sanitizeText(entry.projectType),
      sanitizeText(entry.industry),
      ...entry.tags.map(sanitizeText),
    ],
    inLanguage: "pt-BR",
  };
}

export function createFaqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: sanitizeText(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: sanitizeText(item.answer),
      },
    })),
  };
}

export function createBreadcrumbJsonLd(
  entry: SectionEntry,
  baseUrl = siteConfig.url,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: sanitizeText(entry.title),
        item: absoluteUrl(`/projetos/${entry.slug}`, baseUrl),
      },
    ],
  };
}
