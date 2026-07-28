"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { cazetvDisplay, cazetvText } from "../cazetv/fonts";
import fixturesData from "../cazetv/world-cup-2026-fixtures.json";


import CurtainLoader from "../cazetv/curtain-loader";
import Header from "../cazetv/header";
import HeroSection from "../cazetv/hero-section";
import FixturesFilter from "../cazetv/fixtures-filter";
import FixtureCard from "../cazetv/fixture-card";
import GroupTables from "../cazetv/group-tables";
import Bracket from "../cazetv/bracket";
import StatsTab from "../cazetv/stats-tab";
import Footer from "../cazetv/footer";
import { resolvePlaceholder } from "../cazetv/groups-data";
import { Calendar, X, ArrowSquareOut, Warning, SoccerBall } from "@phosphor-icons/react";

interface MatchEvent {
  tipo: string;
  minuto: string;
  autor: string;
  time: string;
}

interface Fixture {
  matchNumber: number;
  date: string;
  kickoffUtc: string;
  stage: string;
  group: string | null;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  hostCity: string;
  matchUrl: string;
  homeScore?: number | null;
  awayScore?: number | null;
  homePenalties?: number | null;
  awayPenalties?: number | null;
  winner?: string | null;
  vencedor?: string | null;
  events?: MatchEvent[];
}


const teamIsoCodes: Record<string, string> = {
  "Argélia": "DZ",
  "Argentina": "AR",
  "Austrália": "AU",
  "Áustria": "AT",
  "Bélgica": "BE",
  "Bósnia e Herzegovina": "BA",
  "Brasil": "BR",
  "Cabo Verde": "CV",
  "Canadá": "CA",
  "Colômbia": "CO",
  "RD Congo": "CD",
  "Costa do Marfim": "CI",
  "Croácia": "HR",
  "Curaçao": "CW",
  "Tchéquia": "CZ",
  "Equador": "EC",
  "Egito": "EG",
  "Inglaterra": "gb-eng",
  "França": "FR",
  "Alemanha": "DE",
  "Gana": "GH",
  "Haiti": "HT",
  "Irã": "IR",
  "Iraque": "IQ",
  "Japão": "JP",
  "Jordânia": "JO",
  "Coreia do Sul": "KR",
  "México": "MX",
  "Marrocos": "MA",
  "Holanda": "NL",
  "Nova Zelândia": "NZ",
  "Noruega": "NO",
  "Panamá": "PA",
  "Paraguai": "PY",
  "Portugal": "PT",
  "Catar": "QA",
  "Arábia Saudita": "SA",
  "Escócia": "gb-sct",
  "Senegal": "SN",
  "África do Sul": "ZA",
  "Espanha": "ES",
  "Suécia": "SE",
  "Suíça": "CH",
  "Tunísia": "TN",
  "Turquia": "TR",
  "Estados Unidos": "US",
  "Uruguai": "UY",
  "Uzbequistão": "UZ"
};


const stageTranslations: Record<string, string> = {
  "group-stage": "Fase de Grupos",
  "round-of-32": "Dezesseis-avos de Final",
  "round-of-16": "Oitavas de Final",
  "quarter-finals": "Quartas de Final",
  "semi-finals": "Semifinais",
  "third-place": "Disputa de 3º Lugar",
  "final": "Grande Final"
};

export default function CazeTVLanding() {
  const [activeTab, setActiveTab] = useState<"jogos" | "grupos" | "chaveamento" | "estatisticas">("jogos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("all");
  const [selectedGroup, setSelectedGroup] = useState("all");
  const [matchStateFilter, setMatchStateFilter] = useState<"all" | "completed" | "upcoming">("all");

  const [renderedMatch, setRenderedMatch] = useState<Fixture | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isModalOpen]);


  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const { fixtures } = fixturesData;


  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      const matchParam = params.get("match");

      if (tabParam === "jogos" || tabParam === "grupos" || tabParam === "chaveamento" || tabParam === "estatisticas") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveTab(tabParam);
      }
      if (matchParam) {
        const mNum = parseInt(matchParam);
        if (!isNaN(mNum)) {
          const match = fixtures.find((f) => f.matchNumber === mNum);
          if (match) {
            setRenderedMatch(match);
            setIsModalOpen(true);
          }
        }
      }

      const handlePopState = () => {
        const currentParams = new URLSearchParams(window.location.search);
        const currentTab = currentParams.get("tab");
        const currentMatchId = currentParams.get("match");

        if (currentTab === "jogos" || currentTab === "grupos" || currentTab === "chaveamento" || currentTab === "estatisticas") {
          setActiveTab(currentTab);
        }

        if (currentMatchId) {
          const mNum = parseInt(currentMatchId);
          if (!isNaN(mNum)) {
            const match = fixtures.find((f) => f.matchNumber === mNum);
            if (match) {
              setRenderedMatch(match);
              setIsModalOpen(true);
            }
          }
        } else {
          setIsModalOpen(false);
          setTimeout(() => {
            setRenderedMatch(null);
          }, 200);
        }
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [fixtures]);


  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("match");
      window.history.pushState({}, "", url.toString());
    }

    setTimeout(() => {
      setRenderedMatch(null);
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleTabChange = (newTab: "jogos" | "grupos" | "chaveamento" | "estatisticas") => {
    setActiveTab(newTab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", newTab);
      window.history.pushState({}, "", url.toString());
    }
  };

  const handleShowDetails = (matchNumber: number) => {
    const match = fixtures.find((f) => f.matchNumber === matchNumber);
    if (match) {
      setRenderedMatch(match);
      setIsModalOpen(true);
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("match", matchNumber.toString());
        window.history.pushState({}, "", url.toString());
      }
    }
  };



  const handleTeamClick = (teamName: string) => {
    if (!teamName || teamName.startsWith("Vencedor") || teamName.startsWith("Perdedor") || teamName.startsWith("1º") || teamName.startsWith("2º") || teamName.startsWith("3º")) return;
    setSearchTerm(teamName);
    setSelectedStage("all");
    setSelectedGroup("all");
    handleTabChange("jogos");

    if (typeof window !== "undefined") {
      setTimeout(() => {
        const filtersSection = document.getElementById("jogos-filters");
        if (filtersSection) {
          filtersSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };


  const groups = Array.from(
    new Set(
      fixtures
        .filter((f) => f.group)
        .map((f) => f.group)
    )
  ).sort() as string[];


  const filteredFixtures = fixtures.filter((fixture) => {
    const home = fixture.homeTeam || "";
    const away = fixture.awayTeam || "";
    const matchesSearch =
      home.toLowerCase().includes(searchTerm.toLowerCase()) ||
      away.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (fixture.stadium && fixture.stadium.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (fixture.hostCity && fixture.hostCity.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStage = selectedStage === "all" || fixture.stage === selectedStage;
    const matchesGroup = selectedGroup === "all" || fixture.group === selectedGroup;
    const matchesState =
      matchStateFilter === "all" ||
      (matchStateFilter === "completed" && typeof fixture.homeScore === "number" && typeof fixture.awayScore === "number") ||
      (matchStateFilter === "upcoming" && (fixture.homeScore === null || fixture.awayScore === null));

    return matchesSearch && matchesStage && matchesGroup && matchesState;
  });


  const fixturesByDate: Record<string, typeof fixtures> = {};
  filteredFixtures.slice(0, visibleCount).forEach((fixture) => {
    const d = fixture.date;
    if (!fixturesByDate[d]) {
      fixturesByDate[d] = [];
    }
    fixturesByDate[d].push(fixture);
  });

  const formatGroupHeaderDate = (dateStr: string) => {
    try {
      const parts = dateStr.split("-");
      const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      };
      const formatted = date.toLocaleDateString("pt-BR", options);

      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    } catch {
      return dateStr;
    }
  };


  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(12);
  }, [searchTerm, selectedStage, selectedGroup, matchStateFilter]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && visibleCount < filteredFixtures.length && !isLoadingMore && activeTab === "jogos") {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + 12);
            setIsLoadingMore(false);
          }, 150);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [visibleCount, filteredFixtures.length, isLoadingMore, activeTab]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedStage("all");
    setSelectedGroup("all");
    setMatchStateFilter("all");
  };

  return (
    <main
      className={`${cazetvText.className} ${cazetvText.variable} ${cazetvDisplay.variable} min-h-screen bg-neutral-950 text-zinc-100 flex flex-col`}
      style={{ fontFamily: "var(--font-cazetv-text), sans-serif" }}
    >

      <link rel="preconnect" href="https://flagcdn.com" crossOrigin="anonymous" />

      <div className="w-full bg-orange-950/10 border-b border-orange-900/20 py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-orange-400">
          <div className="flex items-center gap-2">
            <Warning size={16} className="shrink-0 text-orange-500 animate-pulse" />
            <strong className="uppercase font-black text-orange-500 tracking-wider whitespace-nowrap">
              Aviso de Estudo de Caso / Não-Oficial:
            </strong>
          </div>
          <p className="font-medium tracking-wide text-center sm:text-left text-zinc-300">
            Este site é um projeto demonstrativo de estudo de caso profissional para fins de estudo de design e tecnologia. Não possui vínculos oficiais ou comerciais com a CazéTV (Live Mode) ou com a FIFA. Marcas e direitos de imagem pertencem aos seus respectivos titulares.
          </p>
        </div>
      </div>


      <CurtainLoader />


      <Header />


      <HeroSection
        fixtures={fixtures}
        teamIsoCodes={teamIsoCodes}
      />


      <div className="mx-auto w-full px-0 sm:px-6 lg:px-8 mt-10 relative">

        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-10 md:hidden" />

        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-10 md:hidden" />

        <div className="border-b border-zinc-900 overflow-x-auto scrollbar-none">
          <div className="flex gap-6 md:gap-8 justify-start md:justify-center min-w-max px-4 md:px-0">
            <button
              onClick={() => handleTabChange("jogos")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "jogos"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Calendário de Jogos
            </button>
            <button
              onClick={() => handleTabChange("grupos")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "grupos"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Tabela de Grupos
            </button>
            <button
              onClick={() => handleTabChange("chaveamento")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "chaveamento"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Chaveamento Mata-Mata
            </button>
            <button
              onClick={() => handleTabChange("estatisticas")}
              className={`pb-4 text-sm font-black uppercase tracking-wider transition duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "estatisticas"
                  ? "border-orange-500 text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Estatísticas
            </button>
          </div>
        </div>
      </div>


      <section className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 flex-grow">
        {activeTab === "jogos" ? (
          <>

            <div id="jogos-filters" className="flex flex-col gap-6">

              <div className="flex flex-wrap gap-2.5 border-b border-zinc-900/60 pb-4">
                <button
                  onClick={() => setMatchStateFilter("all")}
                  className={`rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider transition duration-150 ${
                    matchStateFilter === "all"
                      ? "bg-orange-600 text-white"
                      : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                  }`}
                >
                  Todos os Jogos
                </button>
                <button
                  onClick={() => setMatchStateFilter("completed")}
                  className={`rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider transition duration-150 ${
                    matchStateFilter === "completed"
                      ? "bg-orange-600 text-white"
                      : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                  }`}
                >
                  Partidas Concluídas
                </button>
                <button
                  onClick={() => setMatchStateFilter("upcoming")}
                  className={`rounded-xl px-4 py-2.5 text-xs font-black uppercase tracking-wider transition duration-150 ${
                    matchStateFilter === "upcoming"
                      ? "bg-orange-600 text-white"
                      : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                  }`}
                >
                  Próximos Jogos
                </button>
              </div>

              <FixturesFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedStage={selectedStage}
                setSelectedStage={setSelectedStage}
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
                groups={groups}
                stageTranslations={stageTranslations}
                handleClearFilters={handleClearFilters}
              />
            </div>


            <div className="mt-8">
              {filteredFixtures.length === 0 ? (
                <div className="mt-12 text-center rounded-2xl border border-zinc-900 bg-zinc-950/20 py-16 px-6 max-w-md mx-auto flex flex-col items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900/50 border border-zinc-800/50 text-zinc-550">
                    <SoccerBall size={24} className="animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-white">Nenhum confronto encontrado</h3>
                    <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                      Experimente alterar os filtros selecionados ou digite outro termo de busca para encontrar as partidas.
                    </p>
                  </div>
                  <button
                    onClick={handleClearFilters}
                    className="mt-2 rounded-xl bg-orange-600 hover:bg-orange-500 px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white transition duration-200 shadow-md shadow-orange-950/20 outline-none select-none border-0 cursor-pointer"
                  >
                    Limpar Todos os Filtros
                  </button>
                </div>
              ) : (
                <>
                  <div className="mt-6 flex flex-col gap-1">
                    {Object.entries(fixturesByDate).map(([dateStr, matchesForDate]) => (
                      <div key={dateStr} className="mb-10 last:mb-0">
                        <div className="flex items-center gap-2 mb-5 border-b border-zinc-900 pb-3">
                          <Calendar size={14} className="text-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.4)] shrink-0 animate-pulse" />
                          <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-400">
                            {formatGroupHeaderDate(dateStr)}
                          </h3>
                          <span className="text-[9px] font-bold text-zinc-600 uppercase ml-auto">
                            {matchesForDate.length} {matchesForDate.length === 1 ? "partida" : "partidas"}
                          </span>
                        </div>
                        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                          {matchesForDate.map((fixture) => (
                            <FixtureCard
                              key={fixture.matchNumber}
                              fixture={fixture}
                              stageTranslations={stageTranslations}
                              teamIsoCodes={teamIsoCodes}
                              onShowDetails={handleShowDetails}
                              onTeamClick={handleTeamClick}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>


                  {visibleCount < filteredFixtures.length && (
                    <div ref={loaderRef} className="flex flex-col items-center justify-center py-12 mt-6">
                      {isLoadingMore ? (
                        <div className="flex flex-col items-center gap-3">
                          <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-800 border-t-orange-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            Carregando mais partidas...
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
                          Carregando mais...
                        </span>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        ) : activeTab === "grupos" ? (
          <div className="mt-4">
            <GroupTables teamIsoCodes={teamIsoCodes} onTeamClick={handleTeamClick} />
          </div>
        ) : activeTab === "chaveamento" ? (
          <div className="mt-4">
            <Bracket fixtures={fixtures} teamIsoCodes={teamIsoCodes} onShowDetails={handleShowDetails} />
          </div>
        ) : (
          <div className="mt-4">
            <StatsTab fixtures={fixtures} teamIsoCodes={teamIsoCodes} onTeamClick={handleTeamClick} />
          </div>
        )}


        {(() => {
          if (!renderedMatch) return null;
          const selectedMatch = renderedMatch;

          const formatMatchDateTime = (utcString: string) => {
            try {
              const dateObj = new Date(utcString);
              return dateObj.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "America/Sao_Paulo"
              }) + " (Brasília)";
            } catch {
              return utcString;
            }
          };

          const renderModalFlag = (rawTeamName: string) => {
            const teamName = resolvePlaceholder(rawTeamName);
            if (!teamName || teamName.startsWith("Vencedor") || teamName.startsWith("Perdedor") || teamName.startsWith("1º") || teamName.startsWith("2º") || teamName.startsWith("3º")) {
              return (
                <div className="relative w-16 h-10 bg-zinc-900 rounded-lg shrink-0 overflow-hidden border border-zinc-800">
                  <Image src="/utils/placeholder.svg" alt="" fill className="object-cover opacity-30" />
                </div>
              );
            }

            let flagUrl = "";
            if (teamName === "Inglaterra") {
              flagUrl = "https://flagcdn.com/gb-eng.svg";
            } else if (teamName === "Escócia") {
              flagUrl = "https://flagcdn.com/gb-sct.svg";
            } else {
              const iso = teamIsoCodes[teamName];
              if (iso) {
                flagUrl = `https://flagcdn.com/${iso.toLowerCase()}.svg`;
              }
            }

            if (flagUrl) {
              return (
                <div className="relative w-16 h-10 rounded-lg shrink-0 overflow-hidden border border-zinc-800 bg-zinc-900 shadow-md">
                  <Image
                    src={flagUrl}
                    alt={teamName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              );
            }

            return (
              <div className="relative w-16 h-10 bg-zinc-900 rounded-lg shrink-0 overflow-hidden border border-zinc-800">
                <Image src="/utils/placeholder.svg" alt="" fill className="object-cover opacity-30" />
              </div>
            );
          };

          const homeResolved = resolvePlaceholder(selectedMatch.homeTeam);
          const awayResolved = resolvePlaceholder(selectedMatch.awayTeam);
          const hasScore = typeof selectedMatch.homeScore === "number" && typeof selectedMatch.awayScore === "number";


          const getTeamStats = (teamName: string) => {
            let matchesPlayed = 0;
            let wins = 0;
            let draws = 0;
            let losses = 0;
            let goalsFor = 0;
            let goalsAgainst = 0;

            fixtures.forEach((match) => {
              const hs = match.homeScore;
              const as = match.awayScore;
              const hsNum = typeof hs === "number";
              const asNum = typeof as === "number";

              if (hsNum && asNum) {
                const matchHomeResolved = resolvePlaceholder(match.homeTeam);
                const matchAwayResolved = resolvePlaceholder(match.awayTeam);
                if (matchHomeResolved === teamName) {
                  matchesPlayed++;
                  goalsFor += hs || 0;
                  goalsAgainst += as || 0;
                  if (hs! > as!) wins++;
                  else if (hs! === as!) draws++;
                  else losses++;
                } else if (matchAwayResolved === teamName) {
                  matchesPlayed++;
                  goalsFor += as || 0;
                  goalsAgainst += hs || 0;
                  if (as! > hs!) wins++;
                  else if (as! === hs!) draws++;
                  else losses++;
                }
              }
            });

            return { matchesPlayed, wins, draws, losses, goalsFor, goalsAgainst };
          };

          const homeStats = getTeamStats(homeResolved);
          const awayStats = getTeamStats(awayResolved);

          return (
            <>

              <div
                onClick={handleCloseModal}
                className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ease-in-out ${
                  isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              />


              <div className="fixed inset-0 z-50 pointer-events-none">
                <div className="relative w-full h-full max-w-440 mx-auto">

                  <div
                    className={`absolute top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform pointer-events-auto ${
                      isModalOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                  >

                <div className="flex items-center justify-between border-b border-zinc-900 p-6 shrink-0">
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                    <span>Jogo {selectedMatch.matchNumber}</span>
                    <span>•</span>
                    <span className="text-orange-500">
                      {stageTranslations[selectedMatch.stage]} {selectedMatch.group ? `• Grupo ${selectedMatch.group}` : ""}
                    </span>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="rounded-full p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 transition duration-200 border-0 outline-none cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>


                <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent flex flex-col gap-6">

                  <div className="grid grid-cols-3 items-center gap-2 py-4 border-b border-zinc-900/60 pb-6 mb-6 shrink-0">
                    <div className="flex flex-col items-center text-center gap-2">
                      {renderModalFlag(selectedMatch.homeTeam)}
                      <span className="text-xs font-black text-white">{homeResolved || "A Definir"}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="font-mono text-3xl font-black text-white tracking-tighter">
                        {hasScore ? (
                          <>
                            <span>{selectedMatch.homeScore}</span>
                            <span className="text-zinc-800 text-xl mx-1.5">:</span>
                            <span>{selectedMatch.awayScore}</span>
                          </>
                        ) : (
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 px-3 py-1.5 bg-zinc-900/80 rounded-xl">VS</span>
                        )}
                      </div>
                      {hasScore && typeof selectedMatch.homePenalties === "number" && typeof selectedMatch.awayPenalties === "number" && (
                        <div className="text-[10px] font-black uppercase tracking-wider text-orange-500 mt-1 select-none">
                          ({selectedMatch.homePenalties}) Pên. ({selectedMatch.awayPenalties})
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-center text-center gap-2">
                      {renderModalFlag(selectedMatch.awayTeam)}
                      <span className="text-xs font-black text-white">{awayResolved || "A Definir"}</span>
                    </div>
                  </div>


                  {selectedMatch.events && selectedMatch.events.length > 0 && (
                    <div className="mb-2 flex flex-col shrink-0">
                      <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-4">Acontecimentos</h4>
                      <div className="relative flex flex-col gap-5 pl-2 pr-2 before:absolute before:left-1/2 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-900 before:-translate-x-1/2">
                        {[...selectedMatch.events]
                          .sort((a, b) => {
                            const parseMin = (minStr: string) => {
                              const parts = minStr.split("+");
                              const base = parseInt(parts[0]) || 0;
                              const extra = parseInt(parts[1]) || 0;
                              return base + extra / 100;
                            };
                            return parseMin(a.minuto) - parseMin(b.minuto);
                          })
                          .map((event, idx) => {
                            const isHome = event.time === "casa";

                            let icon: React.ReactNode = <SoccerBall size={14} className="text-zinc-400 shrink-0" />;
                            let labelColor = "text-zinc-300";
                            if (event.tipo === "gol") {
                              icon = <SoccerBall size={14} className="text-white shrink-0" />;
                            } else if (event.tipo === "gol_contra") {
                              icon = <SoccerBall size={14} className="text-red-500 shrink-0" />;
                              labelColor = "text-red-400";
                            } else if (event.tipo === "cartao_amarelo") {
                              icon = <div className="w-2.5 h-3.5 bg-yellow-500 rounded-[2px] border border-yellow-600/40 shadow-sm shrink-0 inline-block" />;
                            } else if (event.tipo === "cartao_vermelho") {
                              icon = <div className="w-2.5 h-3.5 bg-red-600 rounded-[2px] border border-red-700/40 shadow-sm shrink-0 inline-block" />;
                            }

                            return (
                              <div key={idx} className="relative flex items-center w-full min-h-[32px]">

                                <div className={`w-1/2 pr-6 text-right text-xs ${isHome ? "opacity-100 animate-in fade-in slide-in-from-left-2 duration-200" : "opacity-0 pointer-events-none"}`}>
                                  {isHome && (
                                    <div className="flex items-center justify-end gap-1.5">
                                      <span className="text-[11px] font-bold text-zinc-300 tracking-tight leading-snug">
                                        <span className={labelColor}>{event.autor}</span>
                                        {event.tipo === "gol_contra" && (
                                          <span className="text-[8px] font-extrabold text-red-500 block uppercase tracking-wider mt-0.5">Gol Contra (GC)</span>
                                        )}
                                      </span>
                                      <span className="flex items-center justify-center shrink-0 select-none w-5 h-5">{icon}</span>
                                    </div>
                                  )}
                                </div>


                                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center justify-center">
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 border border-zinc-900 text-[9px] font-black text-zinc-500 shadow-md">
                                    {event.minuto}&apos;
                                  </div>
                                </div>


                                <div className={`w-1/2 pl-6 text-left text-xs ${!isHome ? "opacity-100 animate-in fade-in slide-in-from-right-2 duration-200" : "opacity-0 pointer-events-none"}`}>
                                  {!isHome && (
                                    <div className="flex items-center justify-start gap-1.5">
                                      <span className="flex items-center justify-center shrink-0 select-none w-5 h-5">{icon}</span>
                                      <span className="text-[11px] font-bold text-zinc-300 tracking-tight leading-snug">
                                        <span className={labelColor}>{event.autor}</span>
                                        {event.tipo === "gol_contra" && (
                                          <span className="text-[8px] font-extrabold text-red-500 block uppercase tracking-wider mt-0.5">Gol Contra (GC)</span>
                                        )}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}


                  {(homeStats.matchesPlayed > 0 || awayStats.matchesPlayed > 0) && (
                    <div className="rounded-2xl bg-zinc-900/10 border border-zinc-900 p-4 text-xs shrink-0">
                      <h4 className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-3 text-center">
                        Desempenho no Torneio
                      </h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-zinc-400 font-semibold py-1 border-b border-zinc-900/30">
                          <span className="w-16 text-left text-zinc-200 font-black">{homeStats.matchesPlayed}</span>
                          <span className="text-[10px] uppercase text-zinc-555 font-bold">Partidas</span>
                          <span className="w-16 text-right text-zinc-200 font-black">{awayStats.matchesPlayed}</span>
                        </div>
                        <div className="flex justify-between items-center text-zinc-400 font-semibold py-1 border-b border-zinc-900/30">
                          <span className="w-16 text-left text-emerald-500 font-black">{homeStats.wins}</span>
                          <span className="text-[10px] uppercase text-zinc-555 font-bold">Vitórias</span>
                          <span className="w-16 text-right text-emerald-500 font-black">{awayStats.wins}</span>
                        </div>
                        <div className="flex justify-between items-center text-zinc-400 font-semibold py-1 border-b border-zinc-900/30">
                          <span className="w-16 text-left text-zinc-400 font-black">{homeStats.draws}</span>
                          <span className="text-[10px] uppercase text-zinc-555 font-bold">Empates</span>
                          <span className="w-16 text-right text-zinc-400 font-black">{awayStats.draws}</span>
                        </div>
                        <div className="flex justify-between items-center text-zinc-400 font-semibold py-1 border-b border-zinc-900/30">
                          <span className="w-16 text-left text-red-500 font-black">{homeStats.losses}</span>
                          <span className="text-[10px] uppercase text-zinc-555 font-bold">Derrotas</span>
                          <span className="w-16 text-right text-red-500 font-black">{awayStats.losses}</span>
                        </div>
                        <div className="flex justify-between items-center text-zinc-400 font-semibold py-1">
                          <span className="w-16 text-left text-zinc-200 font-black">{homeStats.goalsFor} : {homeStats.goalsAgainst}</span>
                          <span className="text-[10px] uppercase text-zinc-555 font-bold text-center flex-grow mx-2">Gols (Marcados : Sofridos)</span>
                          <span className="w-16 text-right text-zinc-200 font-black">{awayStats.goalsFor} : {awayStats.goalsAgainst}</span>
                        </div>
                      </div>
                    </div>
                  )}


                  <div className="flex flex-col gap-2.5 text-xs text-zinc-400 border-t border-zinc-900/60 pt-6 shrink-0">
                    <div className="flex justify-between items-center py-1">
                      <span className="text-zinc-500 font-medium">Horário da Partida</span>
                      <span className="font-bold text-zinc-200">{formatMatchDateTime(selectedMatch.kickoffUtc)}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-zinc-500 font-medium">Estádio</span>
                      <span className="font-bold text-zinc-200">{selectedMatch.stadium}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-zinc-500 font-medium">Cidade Sede</span>
                      <span className="font-bold text-zinc-200 uppercase tracking-wide text-[10px]">{selectedMatch.hostCity.replace("-", " ")}</span>
                    </div>
                  </div>


                  {selectedMatch.matchUrl && (
                    <div className="mt-auto pt-6 shrink-0">
                      <Link
                        href={selectedMatch.matchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex w-full items-center justify-center gap-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white transition-colors duration-200 outline-none border-0 select-none text-center"
                      >
                        Assistir Transmissão Oficial
                        <ArrowSquareOut size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </>
          );
        })()}
      </section>


      <Footer />
    </main>
  );
}
