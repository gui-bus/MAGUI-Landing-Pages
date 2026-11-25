"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, LockSimple } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioProject } from "@/app/portfolio-projects";

export type FeaturedProject = PortfolioProject & { href?: string; client?: string };

const projectLogos: Record<string, string> = {
  powervet: "/images/powervet/logo-dark.webp",
  "arco-odontologia": "/images/arco/logo-blue.webp",
};

function ProjectName({ project, large = false }: { project: FeaturedProject; large?: boolean }) {
  const logo = projectLogos[project.slug];
  return logo ? (
    <span className={`studio-featured-logo${large ? " studio-featured-logo-large" : ""}`}>
      <Image src={logo} alt={project.title} fill sizes={large ? "220px" : "120px"} />
    </span>
  ) : <>{project.title}</>;
}

const SLIDE_DURATION_MS = 6000;
const SLIDE_DURATION_SECONDS = SLIDE_DURATION_MS / 1000;

export function FeaturedProjects({ projects }: { projects: FeaturedProject[] }) {
  const [active, setActive] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const total = projects.length;
  const safeActive = total > 0 ? active % total : 0;
  const project = projects[safeActive];

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [safeActive, total]);

  useEffect(() => {
    const nav = navRef.current;
    const activeTab = tabRefs.current[safeActive];
    if (!nav || !activeTab || nav.scrollWidth <= nav.clientWidth) return;
    const targetLeft = Math.max(0, activeTab.offsetLeft - 16);
    nav.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [safeActive]);

  if (!project) return null;

  const href = project.href ?? `/projetos/${project.slug}`;
  const isExternal = Boolean(project.href);
  const displayUrl = project.href
    ? project.href.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `magui.studio/projetos/${project.slug}`;
  const formattedIndex = String(safeActive + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <section id="destaques" className="studio-featured" aria-labelledby="featured-title">
      <div className="studio-section-title">
        <div>
          <p className="studio-label">Experiência aplicada a negócios reais</p>
          <h2 id="featured-title">Projetos em destaque.</h2>
        </div>
        <p>
          Referência no mercado imobiliário e na área da saúde.
          <br />
          Design estratégico a serviço de cada negócio.
        </p>
      </div>

      <div ref={navRef} className="studio-featured-nav" role="tablist" aria-label="Selecionar projeto em destaque">
        <div className="studio-featured-nav-inner">
          {projects.map((item, index) => {
            const isActive = index === safeActive;
            return (
              <button
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-pressed={isActive}
                key={item.slug}
                onClick={() => setActive(index)}
                className="studio-featured-tab"
              >
                <span className="studio-featured-tab-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="studio-featured-tab-title">{item.title}</strong>
                <span className="studio-featured-tab-industry">
                  <span className="studio-featured-tab-industry-name">{item.industry}</span>
                </span>
              </button>
            );
          })}
          <span className="studio-featured-nav-track" aria-hidden="true">
            <motion.span
              key={`progress-${safeActive}`}
              className="studio-featured-nav-progress"
              initial={{ scaleX: safeActive / total }}
              animate={{ scaleX: (safeActive + 1) / total }}
              transition={{ duration: SLIDE_DURATION_SECONDS, ease: "linear" }}
            />
          </span>
        </div>
      </div>

      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="studio-featured-browser"
        aria-label={`Explorar projeto ${project.title}`}
      >
        <div className="studio-featured-browser-bar" aria-hidden="true">
          <span className="studio-featured-browser-dots">
            <span className="is-red" />
            <span className="is-yellow" />
            <span className="is-green" />
          </span>
          <span className="studio-featured-browser-url">
            <LockSimple size={11} weight="bold" />
            <span>{displayUrl}</span>
          </span>
          <span className="studio-featured-browser-action">
            <ArrowUpRight size={13} weight="bold" />
          </span>
        </div>

        <div className="studio-featured-visual">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={project.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="studio-featured-slide"
            >
              <Image
                src={project.image}
                alt={`Identidade do projeto ${project.title}`}
                fill
                unoptimized
                sizes="(max-width: 760px) 92vw, 92vw"
                priority={safeActive === 0}
                className="studio-featured-img"
              />
            </motion.div>
          </AnimatePresence>

          <div className="studio-featured-vignette" aria-hidden="true" />

          <span className="studio-featured-pill">
            <span>Conhecer o projeto</span>
            <ArrowUpRight size={15} weight="bold" className="studio-featured-pill-arrow" aria-hidden="true" />
          </span>
        </div>
      </Link>

      <div className="studio-featured-caption" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`meta-${project.slug}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="studio-featured-caption-inner"
          >
            <div>
              <p className="studio-label studio-featured-client">
                {project.client ?? project.projectType}
              </p>
              <h3><ProjectName project={project} large /></h3>
            </div>
            <p className="studio-featured-description">{project.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="studio-featured-context">
        <div className="studio-featured-tags" aria-label="Características do projeto">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="studio-featured-controls">
          <span className="studio-featured-counter" aria-label={`Projeto ${safeActive + 1} de ${total}`}>
            <strong>{formattedIndex}</strong> / {formattedTotal}
          </span>
          <button
            type="button"
            onClick={() => setActive((safeActive + total - 1) % total)}
            aria-label="Destaque anterior"
          >
            <ArrowLeft size={14} weight="bold" aria-hidden="true" />
            <span>Anterior</span>
          </button>
          <button
            type="button"
            onClick={() => setActive((safeActive + 1) % total)}
            aria-label="Próximo destaque"
          >
            <span>Próximo</span>
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
