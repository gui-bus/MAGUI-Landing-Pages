"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ArrowSquareOut, Trophy, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { resolvePlaceholder } from "./groups-data";

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
}

interface HeroSectionProps {
  fixtures: Fixture[];
  teamIsoCodes: Record<string, string>;
}

export default function HeroSection({
  fixtures,
  teamIsoCodes,
}: HeroSectionProps) {
  const [concurrentMatches, setConcurrentMatches] = useState<Fixture[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLive, setIsLive] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const currentMatch = concurrentMatches[activeIdx] || null;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? concurrentMatches.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === concurrentMatches.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const updateWidget = () => {
      const now = new Date();

      let foundMatch: Fixture | null = null;
      let live = false;

      const sortedFixtures = [...fixtures].sort(
        (a, b) =>
          new Date(a.kickoffUtc).getTime() - new Date(b.kickoffUtc).getTime(),
      );

      for (const fixture of sortedFixtures) {
        const kickoff = new Date(fixture.kickoffUtc);
        const endTime = new Date(kickoff.getTime() + 2 * 60 * 60 * 1000);

        if (now >= kickoff && now <= endTime) {
          foundMatch = fixture;
          live = true;
          break;
        }

        if (kickoff > now) {
          foundMatch = fixture;
          break;
        }
      }

      if (!foundMatch && sortedFixtures.length > 0) {
        foundMatch = sortedFixtures[sortedFixtures.length - 1];
      }

      setIsLive(live);

      if (foundMatch) {
        const targetKickoff = foundMatch.kickoffUtc;
        const matchesAtSameTime = sortedFixtures.filter(
          (f) => f.kickoffUtc === targetKickoff
        );
        setConcurrentMatches((prev) => {
          if (prev.length === 0 || prev[0].kickoffUtc !== targetKickoff) {
            setActiveIdx(0);
          }
          return matchesAtSameTime;
        });

        if (!live) {
          const kickoff = new Date(targetKickoff);
          const diff = kickoff.getTime() - now.getTime();

          if (diff > 0) {
            setTimeLeft({
              days: Math.floor(diff / (1000 * 60 * 60 * 24)),
              hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((diff / (1000 * 60)) % 60),
              seconds: Math.floor((diff / 1000) % 60),
            });
          } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        }
      } else {
        setConcurrentMatches([]);
        setActiveIdx(0);
      }
    };

    updateWidget();

    const interval = setInterval(updateWidget, 1000);

    return () => clearInterval(interval);
  }, [fixtures]);

  const renderFlag = (teamName: string, sizeClass = "w-20 md:w-40 h-auto") => {
    if (teamName === "Inglaterra") {
      return (
        <div className={`relative ${sizeClass} overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 aspect-[3/2]`}>
          <Image
            src="https://flagcdn.com/gb-eng.svg"
            alt="Inglaterra"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }
    if (teamName === "Escócia") {
      return (
        <div className={`relative ${sizeClass} overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 aspect-[3/2]`}>
          <Image
            src="https://flagcdn.com/gb-sct.svg"
            alt="Escócia"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }

    const isoCode = teamIsoCodes[teamName];

    if (!isoCode) {
      return (
        <div
          className={`flex ${sizeClass} items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 aspect-[3/2]`}
        >
          <Trophy size={16} className="text-zinc-600" />
        </div>
      );
    }

    return (
      <div
        className={`relative ${sizeClass} overflow-hidden rounded-xl border border-zinc-800 aspect-[3/2]`}
      >
        <ReactCountryFlag
          countryCode={isoCode}
          svg
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  };

  const getFormattedTime = (utcString: string) => {
    try {
      return new Date(utcString).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo",
      });
    } catch {
      return utcString;
    }
  };

  if (!currentMatch) return null;

  const resolvedHome = resolvePlaceholder(currentMatch.homeTeam);
  const resolvedAway = resolvePlaceholder(currentMatch.awayTeam);

  return (
    <section className="relative overflow-hidden border-b border-zinc-900 bg-black">


      <div className="relative p-6 xl:p-12">
        <div className="grid items-center gap-12 xl:grid-cols-3">

          <div className="relative z-10 xl:col-span-2 lg:max-w-5xl flex flex-col items-center justify-center">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                Cobertura Completa
              </span>
            </div>

            <h1
              className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.08em] text-white md:text-7xl xl:text-[8rem] text-center"
              style={{
                fontFamily: "var(--font-cazetv-display), sans-serif",
              }}
            >
              Copa do Mundo 2026
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-zinc-400 text-center max-w-3xl mx-auto">
              O mundo para. A bola rola. Acompanhe todos os jogos da Copa do
              Mundo FIFA 2026 com transmissão ao vivo pela CazéTV.
            </p>

            {currentMatch && (
              <div className="mt-10 w-full max-w-4xl mx-auto">

                {concurrentMatches.length > 1 && (
                  <div className="mb-6 flex items-center justify-center gap-4 bg-zinc-950/65 border border-zinc-900/80 rounded-2xl py-2 px-4 w-fit mx-auto shadow-md">
                    <button
                      onClick={handlePrev}
                      className="p-1.5 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-white transition duration-200 cursor-pointer flex items-center justify-center"
                    >
                      <CaretLeft size={14} weight="bold" />
                    </button>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 select-none">
                      Jogo {activeIdx + 1} de {concurrentMatches.length} em simultâneo
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-1.5 rounded-lg hover:bg-zinc-900 text-zinc-400 hover:text-white transition duration-200 cursor-pointer flex items-center justify-center"
                    >
                      <CaretRight size={14} weight="bold" />
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">


                  <div className="flex flex-col items-center text-center">
                    {renderFlag(resolvedHome)}

                    <span className="mt-4 text-lg font-black uppercase text-white">
                      {resolvedHome}
                    </span>
                  </div>



                  <div className="flex flex-col items-center">
                    <div className="rounded-2xl bg-black px-6 py-5 text-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-500">
                        {isLive ? "Ao Vivo" : "Partida"}
                      </span>

                      <div className="mt-3 text-2xl font-black tracking-tight text-white">
                        {getFormattedTime(currentMatch.kickoffUtc)}
                      </div>

                      <div className="mt-1 text-xs text-zinc-500">
                        {currentMatch.stadium}
                      </div>

                      {!isLive && (
                        <div className="mt-5 flex items-center justify-center gap-3">
                          <div className="text-center">
                            <div className="text-xl font-black text-white">
                              {String(timeLeft.days).padStart(2, "0")}
                            </div>
                            <div className="text-[10px] uppercase text-zinc-600">
                              D
                            </div>
                          </div>

                          <div className="text-zinc-700">:</div>

                          <div className="text-center">
                            <div className="text-xl font-black text-white">
                              {String(timeLeft.hours).padStart(2, "0")}
                            </div>
                            <div className="text-[10px] uppercase text-zinc-600">
                              H
                            </div>
                          </div>

                          <div className="text-zinc-700">:</div>

                          <div className="text-center">
                            <div className="text-xl font-black text-white">
                              {String(timeLeft.minutes).padStart(2, "0")}
                            </div>
                            <div className="text-[10px] uppercase text-zinc-600">
                              M
                            </div>
                          </div>

                          <div className="text-zinc-700">:</div>

                          <div className="text-center">
                            <div className="text-xl font-black text-white">
                              {String(timeLeft.seconds).padStart(2, "0")}
                            </div>
                            <div className="text-[10px] uppercase text-zinc-600">
                              S
                            </div>
                          </div>
                        </div>
                      )}

                      {isLive && (
                        <div className="mt-4 flex items-center justify-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-sm font-black uppercase tracking-[0.2em] text-red-500">
                            Ao Vivo
                          </span>
                        </div>
                      )}

                      {currentMatch.matchUrl && (
                        <div className="mt-4 w-full">
                          <Link
                            href={currentMatch.matchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-orange-600 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-colors duration-200 hover:bg-orange-500"
                          >
                            Assistir
                            <ArrowSquareOut size={13} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>



                  <div className="flex flex-col items-center text-center">
                    {renderFlag(resolvedAway)}

                    <span className="mt-4 text-lg font-black uppercase text-white">
                      {resolvedAway}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>


          <div className="relative xl:col-span-1">
            <div className="relative h-130 xl:h-162.5">

              <Image
                src="/images/cazetv/se-tem-copa-esquece-e-na-caze-tv.png"
                alt="CazéTV"
                fill
                priority
                className="object-cover md:object-bottom xl:object-center rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
