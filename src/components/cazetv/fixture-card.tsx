"use client";

import Image from "next/image";

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

interface FixtureCardProps {
  fixture: Fixture;
  stageTranslations: Record<string, string>;
  teamIsoCodes: Record<string, string>;
  onShowDetails: (matchNumber: number) => void;
  onTeamClick?: (teamName: string) => void;
}

export default function FixtureCard({
  fixture,
  stageTranslations,
  teamIsoCodes,
  onShowDetails,
  onTeamClick,
}: FixtureCardProps) {
  const stageLabel = stageTranslations[fixture.stage] || fixture.stage;
  const hasScore = typeof fixture.homeScore === "number" && typeof fixture.awayScore === "number";


  const now = new Date();
  const kickoff = new Date(fixture.kickoffUtc);
  const endTime = new Date(kickoff.getTime() + 2 * 60 * 60 * 1000);
  const isLiveNow = now >= kickoff && now <= endTime;

  const renderFlag = (teamName: string) => {
    if (!teamName || teamName.startsWith("Vencedor") || teamName.startsWith("Perdedor") || teamName.startsWith("1º") || teamName.startsWith("2º") || teamName.startsWith("3º")) {
      return (
        <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl shrink-0 bg-zinc-900 border border-zinc-800/80">
          <Image
            src="/utils/placeholder.svg"
            alt="A definir"
            fill
            className="object-cover opacity-30"
          />
        </div>
      );
    }
    if (teamName === "Inglaterra") {
      return (
        <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl shrink-0 border border-zinc-800 bg-zinc-900">
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
        <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl shrink-0 border border-zinc-800 bg-zinc-900">
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
    if (isoCode) {
      return (
        <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl shrink-0 border border-zinc-800 bg-zinc-900">
          <Image
            src={`https://flagcdn.com/${isoCode.toLowerCase()}.svg`}
            alt={teamName}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      );
    }
    return (
      <div className="relative w-20 h-12 md:w-24 md:h-16 overflow-hidden rounded-xl bg-zinc-900 shrink-0 border border-zinc-800">
        <Image
          src="/utils/placeholder.svg"
          alt="Indefinido"
          fill
          sizes="96px"
          className="object-cover opacity-60"
        />
      </div>
    );
  };

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-zinc-900/20 p-5 hover:bg-zinc-900/30 transition duration-300">

      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-zinc-500 mb-5">
        <span>Jogo {fixture.matchNumber}</span>
        <div className="flex items-center gap-2">
          {isLiveNow ? (
            <span className="rounded bg-red-900/20 border border-red-900/30 px-2 py-0.5 text-[9px] font-extrabold text-red-500 uppercase tracking-widest animate-pulse">
              Ao Vivo
            </span>
          ) : hasScore ? (
            <span className="rounded bg-zinc-900/60 px-2 py-0.5 text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest">
              Finalizado
            </span>
          ) : null}
          <span className="text-orange-600">
            {stageLabel} {fixture.group ? `• Grupo ${fixture.group}` : ""}
          </span>
        </div>
      </div>


      <div className="grid grid-cols-3 items-center gap-2 py-3 select-none">

        <button
          onClick={() => onTeamClick?.(fixture.homeTeam)}
          className="flex flex-col items-center text-center gap-2 group/team cursor-pointer outline-none border-0 bg-transparent focus:outline-none"
        >
          {renderFlag(fixture.homeTeam)}
          <span className="text-xs md:text-sm font-black text-white line-clamp-2 leading-tight group-hover/team:text-orange-500 transition duration-150">
            {fixture.homeTeam || "A Definir"}
          </span>
        </button>


        <div className="flex flex-col items-center justify-center">
          {hasScore ? (
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 font-mono text-3xl md:text-5xl font-black text-white shrink-0 select-none tracking-tighter">
                <span>{fixture.homeScore}</span>
                <span className="text-zinc-800 text-2xl md:text-3xl">:</span>
                <span>{fixture.awayScore}</span>
              </div>
              {typeof fixture.homePenalties === "number" && typeof fixture.awayPenalties === "number" && (
                <div className="text-[10px] font-black uppercase tracking-wider text-orange-500 mt-1 select-none">
                  ({fixture.homePenalties}) Pên. ({fixture.awayPenalties})
                </div>
              )}
              {isLiveNow && (
                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                    Ao Vivo
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center w-full">
              <div className="text-[10px] font-black tracking-[0.2em] text-zinc-500 px-4 py-2 bg-zinc-950/80 rounded-xl shrink-0">
                VS
              </div>
              {isLiveNow && (
                <div className="mt-2.5 flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                    Ao Vivo
                  </span>
                </div>
              )}
            </div>
          )}
        </div>


        <button
          onClick={() => onTeamClick?.(fixture.awayTeam)}
          className="flex flex-col items-center text-center gap-2 group/team cursor-pointer outline-none border-0 bg-transparent focus:outline-none"
        >
          {renderFlag(fixture.awayTeam)}
          <span className="text-xs md:text-sm font-black text-white line-clamp-2 leading-tight group-hover/team:text-orange-500 transition duration-150">
            {fixture.awayTeam || "A Definir"}
          </span>
        </button>
      </div>


      <button
        onClick={() => onShowDetails(fixture.matchNumber)}
        className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900/30 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900/60 transition duration-200 outline-none border-0"
      >
        Ver Detalhes
      </button>
    </div>
  );
}
