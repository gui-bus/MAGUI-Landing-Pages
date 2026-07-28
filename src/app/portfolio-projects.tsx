"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";

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
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "");
  const [activeIndustry, setActiveIndustry] = useState(
    () => searchParams.get("industry") ?? "Todos",
  );

  const industries = useMemo(
    () => [
      "Todos",
      ...Array.from(new Set(projects.map((project) => project.industry))),
    ],
    [projects],
  );
  const normalizedActiveIndustry = industries.includes(activeIndustry)
    ? activeIndustry
    : "Todos";

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
    setActiveIndustry(searchParams.get("industry") ?? "Todos");
  }, [searchParams]);

  function updateUrl(nextQuery: string, nextIndustry: string) {
    const params = new URLSearchParams(searchParams.toString());
    const trimmedQuery = nextQuery.trim();

    if (trimmedQuery) {
      params.set("q", nextQuery);
    } else {
      params.delete("q");
    }

    if (nextIndustry !== "Todos") {
      params.set("industry", nextIndustry);
    } else {
      params.delete("industry");
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  }


  function handleQueryChange(value: string) {
    setQuery(value);
    updateUrl(value, normalizedActiveIndustry);
  }


  function handleIndustryChange(industry: string) {
    setActiveIndustry(industry);
    updateUrl(query, industry);
  }

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesIndustry =
        normalizedActiveIndustry === "Todos" ||
        project.industry === normalizedActiveIndustry;
      const searchable = [
        project.title,
        project.description,
        project.goal,
        project.industry,
        project.projectType,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesIndustry &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });
  }, [normalizedActiveIndustry, projects, query]);

  return (
    <section id="projetos" className="w-full space-y-12 bg-[#FCFCFC] px-6 md:px-12 lg:px-16">
      <div className="flex flex-col gap-5 border-b border-black/10 pb-8">
        <p className="text-xs font-semibold uppercase text-[#0093C8]">
          Portfolio
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-light leading-none text-black md:text-5xl">
            Projetos selecionados
          </h2>
          <p className="text-sm text-neutral-500">
            {projects.length} projetos para explorar
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-black/5 pb-8">
        <label className="relative block w-full md:max-w-sm">
          <span className="sr-only">Buscar projetos</span>
          <MagnifyingGlass
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/40 transition-colors"
          />
          <input
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
            placeholder="Buscar projetos..."
            className="h-10 w-full border border-black/10 bg-white pl-9 pr-4 text-xs text-black outline-none transition-all rounded-md focus:border-black focus:ring-4 focus:ring-black/5"
          />
        </label>

        <div className="flex flex-wrap items-center gap-1.5">
          {industries.map((industry) => (
            <button
              key={industry}
              type="button"
              onClick={() => handleIndustryChange(industry)}
              className={`h-8 px-3 text-xs font-medium transition-all rounded-md cursor-pointer active:scale-95 ${
                normalizedActiveIndustry === industry
                  ? "bg-[#0093C8] text-white shadow-md shadow-[#0093C8]/25"
                  : "bg-white border border-black/5 text-black/60 hover:border-black/20 hover:text-black"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="w-full grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="group flex flex-col space-y-3 p-4 rounded-xl border border-transparent bg-transparent hover:bg-white hover:border-black/5 hover:shadow-xl hover:shadow-neutral-100/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  priority
                />

                <span className="absolute right-3 bottom-3 bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs rounded-sm">
                  {project.industry}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-medium text-black tracking-tight group-hover:text-[#0093C8] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="text-black/40 group-hover:text-[#0093C8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"
                  />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-[#0093C8]">
                  {project.projectType}
                </p>

                <p className="text-sm text-neutral-600 line-clamp-2 pt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full py-16 text-center border border-dashed border-black/10 rounded-lg bg-white">
          <p className="text-sm font-medium text-black">
            Nenhum projeto encontrado.
          </p>
        </div>
      )}
    </section>
  );
}
