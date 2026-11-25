"use client";

import Link from "next/link";
import { ProjectCover } from "@/components/home/project-cover";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, type PointerEvent } from "react";

export type PortfolioProject = {
  description: string;
  goal: string;
  image: string;
  index: string;
  industry: string;
  projectType: string;
  slug: string;
  tags: string[];
  title: string;
};

type PortfolioProjectsProps = {
  projects: PortfolioProject[];
};

export function PortfolioProjects({ projects }: PortfolioProjectsProps) {
  const carousel = useRef<HTMLDivElement>(null);
  const motionFrame = useRef<number | null>(null);
  const drag = useRef({ pointerId: -1, startX: 0, scrollLeft: 0, moved: false, lastTime: 0, lastScroll: 0, velocity: 0 });

  const stopMomentum = useCallback(() => {
    if (motionFrame.current !== null) cancelAnimationFrame(motionFrame.current);
    motionFrame.current = null;
    if (carousel.current) carousel.current.dataset.momentum = "false";
  }, []);

  useEffect(() => stopMomentum, [stopMomentum]);

  function glide(track: HTMLDivElement, velocity: number) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(velocity) < 0.08) return;
    const maximum = track.scrollWidth - track.clientWidth;
    const start = track.scrollLeft;
    const projected = Math.max(0, Math.min(maximum, start + velocity * 320));
    const origin = track.getBoundingClientRect().left;
    const stops = [0, maximum, ...Array.from(track.querySelectorAll<HTMLElement>(".studio-project"), (card) =>
      Math.max(0, Math.min(maximum, card.getBoundingClientRect().left - origin + start)))];
    const target = stops.reduce((closest, value) => Math.abs(value - projected) < Math.abs(closest - projected) ? value : closest);
    const began = performance.now();
    const omega = 0.009;
    const displacement = start - target;
    const springVelocity = velocity + omega * displacement;
    track.dataset.momentum = "true";
    function animate(now: number) {
      const elapsed = now - began;
      const decay = Math.exp(-omega * elapsed);
      const position = target + (displacement + springVelocity * elapsed) * decay;
      track.scrollLeft = Math.max(0, Math.min(maximum, position));
      if (elapsed > 1800 || (elapsed > 250 && Math.abs(position - target) < 0.4)) {
        track.scrollLeft = target;
        track.dataset.momentum = "false";
        motionFrame.current = null;
        return;
      }
      motionFrame.current = requestAnimationFrame(animate);
    }
    motionFrame.current = requestAnimationFrame(animate);
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    stopMomentum();
    drag.current.moved = false;
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const position = event.currentTarget.scrollLeft;
    drag.current = { pointerId: event.pointerId, startX: event.clientX, scrollLeft: position, moved: false, lastTime: performance.now(), lastScroll: position, velocity: 0 };
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (current.pointerId !== event.pointerId) return;
    const distance = event.clientX - current.startX;
    if (!current.moved && Math.abs(distance) < 6) return;
    if (!current.moved) {
      current.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = "true";
    }
    event.preventDefault();
    const track = event.currentTarget;
    track.scrollLeft = current.scrollLeft - distance;
    const now = performance.now();
    const elapsed = now - current.lastTime;
    if (elapsed > 0) {
      const speed = (track.scrollLeft - current.lastScroll) / elapsed;
      current.velocity = Math.max(-4.5, Math.min(4.5, speed * 0.7 + current.velocity * 0.3));
      current.lastTime = now;
      current.lastScroll = track.scrollLeft;
    }
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (current.pointerId !== event.pointerId) return;
    current.pointerId = -1;
    const track = event.currentTarget;
    if (event.type === "pointerup" && current.moved && performance.now() - current.lastTime < 100) glide(track, current.velocity);
    track.dataset.dragging = "false";
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  }

  function scrollProjects(direction: number) {
    stopMomentum();
    const track = carousel.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".studio-project");
    const distance = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
    track.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <section id="projetos" className="studio-archive" aria-labelledby="archive-title">
      <div className="studio-section-title">
        <div>
          <p className="studio-label">Diferentes marcas. A mesma exigência.</p>
          <h2 id="archive-title">Portfólio selecionado.</h2>
        </div>
        <p>
          {projects.length} projetos para explorar.
          <br />
          Landing pages pensadas para cada negócio.
        </p>
      </div>

      <div className="studio-archive-results" aria-live="polite">
        <span>{projects.length} {projects.length === 1 ? "projeto" : "projetos"}</span>
        <div className="studio-archive-navigation">
          <span>Deslize para explorar</span>
          <button type="button" aria-label="Projetos anteriores" onClick={() => scrollProjects(-1)}>
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Próximos projetos" onClick={() => scrollProjects(1)}>
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={carousel}
        id="portfolio-carousel"
        className="studio-projects"
        onWheel={stopMomentum}
        onKeyDown={stopMomentum}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onPointerLeave={(event) => { if (!drag.current.moved) endDrag(event); }}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => { if (drag.current.moved && event.detail > 0) { event.preventDefault(); event.stopPropagation(); } }}
        role="region"
        aria-label="Carrossel de projetos"
        tabIndex={0}
      >
        {projects.map((project) => (
          <article className="studio-project" key={project.slug}>
            <Link href={`/projetos/${project.slug}`} className="studio-project-image" aria-label={`Explorar projeto ${project.title}`}>
              <ProjectCover slug={project.slug} title={project.title} fallback={project.image} />
            </Link>
            <div className="studio-project-info">
              <p className="studio-label">{project.industry}</p>
              <Link href={`/projetos/${project.slug}`}>
                <h3>{project.title}</h3>
              </Link>
              <p>{project.description}</p>
              <ul className="studio-project-tags" aria-label="Características do projeto">
                {project.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div>
                <span>{project.projectType}</span>
                <Link className="studio-text-link" href={`/projetos/${project.slug}`}>Explorar projeto</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
