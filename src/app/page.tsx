import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { redirect } from "next/navigation";
import {
  PortfolioProjects,
  type PortfolioProject,
} from "@/app/portfolio-projects";
import { realProjects } from "@/components/home/real-projects";
import { FeaturedProjects } from "@/app/featured-projects";
import { HomeHeader } from "@/components/home/header";
import { HeroSection, HeroNote } from "@/components/home/hero-section";
import { FaqSection } from "@/components/home/faq-section";
import { faqItems } from "@/components/home/faq-items";
import { SectionDivider } from "@/components/home/section-divider";
import { HomeFooter } from "@/components/home/footer";
import { ProcessSection } from "@/components/home/process-section";
import { MavelliSection } from "@/components/home/mavelli-section";
import { homeFonts } from "@/components/home/fonts";
import "@/components/home/home.css";
import { sectionMap, visibleSections } from "@/components/sections/registry";
import {
  buildProjectMetadata,
  createFaqJsonLd,
  createOrganizationJsonLd,
  createPortfolioJsonLd,
  getRequestSiteUrl,
  siteConfig,
} from "@/lib/seo";

interface HomePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function getActiveSlug(
  searchParams: Record<string, string | string[] | undefined>,
) {
  return typeof searchParams.project === "string"
    ? searchParams.project
    : typeof searchParams.section === "string"
      ? searchParams.section
      : undefined;
}

export async function generateMetadata(
  props: HomePageProps,
): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const activeSlug = getActiveSlug(searchParams);
  const activeEntry = activeSlug ? sectionMap[activeSlug] : undefined;
  const baseUrl = await getRequestSiteUrl();

  if (!activeEntry) {
    return {
      title: siteConfig.title,
      description: siteConfig.description,
      keywords: [...siteConfig.keywords, "portfólio", "projetos web"],
      alternates: {
        canonical: "/",
      },
    };
  }

  return buildProjectMetadata(activeEntry, baseUrl);
}

export default async function Home(props: HomePageProps) {
  const searchParams = await props.searchParams;
  const activeSlug = getActiveSlug(searchParams);
  const baseUrl = await getRequestSiteUrl();

  const activeEntry = activeSlug ? sectionMap[activeSlug] : undefined;

  if (activeEntry) {
    redirect(`/projetos/${activeEntry.slug}`);
  }

  const portfolioProjects: PortfolioProject[] = visibleSections.map(
    (section) => ({
      description: section.description,
      goal: section.goal,
      image: section.cardImage ?? "/utils/placeholder.svg",
      index: section.index,
      industry: section.industry,
      projectType: section.projectType,
      slug: section.slug,
      tags: section.tags,
      title: section.title,
    }),
  );
  const featuredCoverBySlug: Record<string, string> = {
    powervet: "/utils/home-projects/powervet.webp?v=2e100d3297",
    "arco-odontologia": "/utils/home-projects/arco.webp?v=ccd88f0b7e",
  };
  const featuredProjects = portfolioProjects
    .filter((project) => project.slug in featuredCoverBySlug)
    .map((project) => ({
      ...project,
      image: featuredCoverBySlug[project.slug] ?? project.image,
    }));

  const priorityPortfolioOrder = [
    "lucas-martins",
    "helena-duarte",
    "sayeg-beauty-studio",
    "vitta",
    "haven",
    "flora",
  ];
  const otherPortfolioProjects = portfolioProjects
    .filter((project) => !(project.slug in featuredCoverBySlug))
    .sort((a, b) => {
      const aIndex = priorityPortfolioOrder.indexOf(a.slug);
      const bIndex = priorityPortfolioOrder.indexOf(b.slug);
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return 0;
    });

  return (
    <main id="inicio" className="home-page" style={{ fontFamily: homeFonts.text, "--studio-display": homeFonts.display } as CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createOrganizationJsonLd(baseUrl)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createPortfolioJsonLd(visibleSections, baseUrl)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createFaqJsonLd(faqItems)) }} />
      <div className="studio-intro">
        <HomeHeader />
        <HeroSection />
      </div>
      <HeroNote />
      <FeaturedProjects projects={[...realProjects, ...featuredProjects]} />
      <SectionDivider />
      <PortfolioProjects projects={otherPortfolioProjects} />
      <MavelliSection />
      <ProcessSection />
      <FaqSection />
      <HomeFooter />
    </main>
  );
}
