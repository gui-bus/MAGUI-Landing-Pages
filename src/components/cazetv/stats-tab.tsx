"use client";

import { useMemo } from "react";
import Image from "next/image";
import { SoccerBall, ShieldCheck, Flame, Info } from "@phosphor-icons/react";

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
  events?: MatchEvent[];
}

interface StatsTabProps {
  fixtures: Fixture[];
  teamIsoCodes: Record<string, string>;
  onTeamClick: (teamName: string) => void;
}

const stageTranslations: Record<string, string> = {
  "group-stage": "Fase de Grupos",
  "round-of-32": "Dezesseis-avos",
  "round-of-16": "Oitavas de Final",
  "quarter-finals": "Quartas de Final",
  "semi-finals": "Semifinais",
  "third-place": "3º Lugar",
  "final": "Grande Final"
};

interface Scorer {
  name: string;
  team: string;
  goals: number;
}

export default function StatsTab({ fixtures, teamIsoCodes, onTeamClick }: StatsTabProps) {

  const {
    totalGoals,
    totalMatchesPlayed,
    sortedScorers,
    sortedAttack,
    sortedDefense,
    goalIntervals,
    maxIntervalGoals,
    averageGoalsPerMatch,
    biggestVictoryMatch,
    maxGoalDiff,
    highestScoringMatch,
    maxTotalGoals
  } = useMemo(() => {
    let goalsCount = 0;
    let matchesCount = 0;

    const scorersMap: Record<string, { team: string; goals: number }> = {};
    const teamAttack: Record<string, number> = {};
    const teamDefense: Record<string, number> = {};

    fixtures.forEach((match) => {
      const hasScore = typeof match.homeScore === "number" && typeof match.awayScore === "number";
      if (hasScore) {
        matchesCount++;
        goalsCount += (match.homeScore || 0) + (match.awayScore || 0);


        const hTeam = match.homeTeam;
        const aTeam = match.awayTeam;

        if (hTeam) {
          teamAttack[hTeam] = (teamAttack[hTeam] || 0) + (match.homeScore || 0);
          teamDefense[hTeam] = (teamDefense[hTeam] || 0) + (match.awayScore || 0);
        }
        if (aTeam) {
          teamAttack[aTeam] = (teamAttack[aTeam] || 0) + (match.awayScore || 0);
          teamDefense[aTeam] = (teamDefense[aTeam] || 0) + (match.homeScore || 0);
        }
      }

      if (match.events) {
        match.events.forEach((event) => {

          const playerTeam = event.time === "casa" ? match.homeTeam : match.awayTeam;
          if (!playerTeam || playerTeam.startsWith("Vencedor") || playerTeam.startsWith("Perdedor") || playerTeam.startsWith("1º") || playerTeam.startsWith("2º") || playerTeam.startsWith("3º")) {
            return;
          }

          if (event.tipo === "gol") {
            const playerName = event.autor.trim();
            if (playerName) {
              if (!scorersMap[playerName]) {
                scorersMap[playerName] = { team: playerTeam, goals: 0 };
              }
              scorersMap[playerName].goals += 1;
            }
          }
        });
      }
    });


    const scorersList: Scorer[] = Object.entries(scorersMap)
      .map(([name, data]) => ({ name, team: data.team, goals: data.goals }))
      .sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name))
      .slice(0, 10);


    const attackList = Object.entries(teamAttack)
      .map(([team, goals]) => ({ team, goals }))
      .sort((a, b) => b.goals - a.goals || a.team.localeCompare(b.team))
      .slice(0, 5);

    const defenseList = Object.entries(teamDefense)
      .map(([team, goals]) => ({ team, goals }))
      .sort((a, b) => a.goals - b.goals || a.team.localeCompare(b.team))
      .slice(0, 5);


    const intervals = [0, 0, 0, 0, 0, 0];
    fixtures.forEach((match) => {
      if (match.events) {
        match.events.forEach((event) => {
          if (event.tipo === "gol" || event.tipo === "gol_contra") {
            const minStr = String(event.minuto || "");
            const baseMin = parseInt(minStr.split("+")[0]);
            if (!isNaN(baseMin)) {
              if (baseMin <= 15) intervals[0]++;
              else if (baseMin <= 30) intervals[1]++;
              else if (baseMin <= 45) intervals[2]++;
              else if (baseMin <= 60) intervals[3]++;
              else if (baseMin <= 75) intervals[4]++;
              else intervals[5]++;
            }
          }
        });
      }
    });

    const maxInt = Math.max(...intervals, 1);
    const avgGoals = matchesCount > 0 ? (goalsCount / matchesCount).toFixed(2) : "0.00";


    let biggestVictoryMatch: Fixture | null = null;
    let maxGoalDiff = -1;
    let maxGoalDiffTotal = -1;

    let highestScoringMatch: Fixture | null = null;
    let maxTotalGoals = -1;

    fixtures.forEach((match) => {
      const hs = match.homeScore;
      const as = match.awayScore;
      const hasScore = typeof hs === "number" && typeof as === "number";

      if (hasScore) {
        const total = (hs || 0) + (as || 0);
        const diff = Math.abs((hs || 0) - (as || 0));


        if (diff > maxGoalDiff || (diff === maxGoalDiff && total > maxGoalDiffTotal)) {
          maxGoalDiff = diff;
          maxGoalDiffTotal = total;
          biggestVictoryMatch = match;
        }


        if (total > maxTotalGoals) {
          maxTotalGoals = total;
          highestScoringMatch = match;
        }
      }
    });

    return {
      totalGoals: goalsCount,
      totalMatchesPlayed: matchesCount,
      sortedScorers: scorersList,
      sortedAttack: attackList,
      sortedDefense: defenseList,
      goalIntervals: intervals,
      maxIntervalGoals: maxInt,
      averageGoalsPerMatch: avgGoals,
      biggestVictoryMatch,
      maxGoalDiff,
      highestScoringMatch,
      maxTotalGoals
    };
  }, [fixtures]);

  const renderFlag = (teamName: string) => {
    const isoCode = teamIsoCodes[teamName];
    if (isoCode) {
      return (
        <div className="relative w-6 h-4 overflow-hidden rounded shrink-0 border border-zinc-850 bg-zinc-900">
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
      <div className="relative w-6 h-4 overflow-hidden rounded bg-zinc-900 shrink-0 border border-zinc-800">
        <Image src="/utils/placeholder.svg" alt="" fill className="object-cover opacity-30" />
      </div>
    );
  };

  const peakIntervalIdx = goalIntervals.indexOf(maxIntervalGoals);

  return (
    <div className="flex flex-col gap-8 select-none">

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">

        <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/40 p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-550 block">Partidas Concluídas</span>
            <span className="mt-2 text-3xl font-black text-white block font-mono">{totalMatchesPlayed}</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900/40 border border-zinc-800/40 shrink-0">
            <Info size={22} className="text-zinc-450" />
          </div>
        </div>


        <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/40 p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-550 block">Total de Gols</span>
            <span className="mt-2 text-3xl font-black text-white block font-mono">{totalGoals}</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900/40 border border-zinc-800/40 shrink-0">
            <SoccerBall size={22} className="text-orange-500 animate-pulse" />
          </div>
        </div>


        <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/40 p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-550 block">Média de Gols por Jogo</span>
            <span className="mt-2 text-3xl font-black text-white block font-mono">{averageGoalsPerMatch}</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900/40 border border-zinc-800/40 shrink-0">
            <Flame size={22} className="text-orange-500" />
          </div>
        </div>
      </div>


      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">

        <div className="lg:col-span-2 flex flex-col gap-8">

          <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/30 p-6">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 mb-6">
              <SoccerBall size={18} className="text-orange-500" />
              <h3 className="text-base font-black uppercase tracking-wider text-white">Artilharia do Torneio</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-zinc-400">
                <thead>
                  <tr className="text-[10px] font-black uppercase tracking-wider text-zinc-550 border-b border-zinc-900/40">
                    <th className="py-2.5 px-2 w-12 text-center">Pos</th>
                    <th className="py-2.5 px-2">Jogador</th>
                    <th className="py-2.5 px-2">Seleção</th>
                    <th className="py-2.5 px-2 text-center font-bold text-zinc-350">Gols</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/25">
                  {sortedScorers.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-zinc-600 font-semibold">
                        Nenhum gol registrado até o momento.
                      </td>
                    </tr>
                  ) : (
                    sortedScorers.map((scorer, index) => (
                      <tr key={index} className="hover:bg-zinc-900/10 transition-colors">
                        <td className="py-3.5 px-2 text-center font-bold text-zinc-500">{index + 1}º</td>
                        <td className="py-3.5 px-2 font-black text-white">{scorer.name}</td>
                        <td className="py-3.5 px-2 font-bold">
                          <button
                            onClick={() => onTeamClick(scorer.team)}
                            className="flex items-center gap-2 hover:text-orange-500 transition focus:outline-none"
                          >
                            {renderFlag(scorer.team)}
                            <span>{scorer.team}</span>
                          </button>
                        </td>
                        <td className="py-3.5 px-2 text-center text-orange-500 text-sm font-black font-mono">
                          {scorer.goals}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>


          <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/30 p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 mb-6">
              <SoccerBall size={18} className="text-orange-500" />
              <h3 className="text-base font-black uppercase tracking-wider text-white">Distribuição de Gols por Tempo</h3>
            </div>

            <div className="flex h-48 items-end justify-between gap-3.5 pt-8 px-2 sm:px-4">
              {goalIntervals.map((count, idx) => {
                const labels = ["0'-15'", "16'-30'", "31'-45'", "46'-60'", "61'-75'", "76'-90'+"];
                const pct = (count / maxIntervalGoals) * 100;
                const isPeak = idx === peakIntervalIdx;
                return (
                  <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end group">
                    <div className="relative w-full flex flex-col items-center justify-end flex-1">

                      <span className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity duration-250 bg-zinc-950 border border-zinc-900 text-[10px] font-black text-orange-500 px-2 py-0.5 rounded-lg shadow-2xl whitespace-nowrap z-25">
                        {count} {count === 1 ? "gol" : "gols"}
                      </span>

                      <span className="text-[10px] font-mono font-black text-orange-500 mb-1 md:hidden select-none">
                        {count}
                      </span>

                      <div
                        style={{ height: `${Math.max(pct, 5)}%` }}
                        className={`w-full max-w-[42px] rounded-t transition-all duration-500 ease-out animate-in slide-in-from-bottom-2 duration-300 ${
                          isPeak
                            ? "bg-orange-600 shadow-[0_0_15px_rgba(234,88,12,0.4)] group-hover:bg-orange-500"
                            : "bg-zinc-800 group-hover:bg-zinc-700"
                        }`}
                      />
                    </div>

                    <span className="mt-3.5 text-[10px] font-black text-zinc-500 tracking-wider whitespace-nowrap shrink-0">
                      {labels[idx]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        <div className="lg:col-span-1 flex flex-col gap-8">

          <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/30 p-6">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 mb-6">
              <Flame size={18} className="text-orange-500" />
              <h3 className="text-base font-black uppercase tracking-wider text-white">Melhores Ataques</h3>
            </div>

            <div className="overflow-x-auto select-none">
              <table className="w-full text-left text-xs text-zinc-400">
                <thead>
                  <tr className="text-[9px] font-black uppercase tracking-wider text-zinc-550 border-b border-zinc-900/40">
                    <th className="py-2 px-1 text-center w-8">Pos</th>
                    <th className="py-2 px-2">Seleção</th>
                    <th className="py-2 px-2 text-center font-bold text-zinc-350">Gols</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/25">
                  {sortedAttack.map((item, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/10 transition-colors">
                      <td className="py-3 px-1 text-center font-bold text-zinc-500">{idx + 1}º</td>
                      <td className="py-3 px-2 font-bold">
                        <button
                          onClick={() => onTeamClick(item.team)}
                          className="flex items-center gap-2 hover:text-orange-500 transition focus:outline-none"
                        >
                          {renderFlag(item.team)}
                          <span className="truncate">{item.team}</span>
                        </button>
                      </td>
                      <td className="py-3 px-2 text-center font-black text-orange-500 font-mono">{item.goals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/30 p-6">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 mb-6">
              <ShieldCheck size={18} className="text-orange-500" />
              <h3 className="text-base font-black uppercase tracking-wider text-white">Melhores Defesas</h3>
            </div>

            <div className="overflow-x-auto select-none">
              <table className="w-full text-left text-xs text-zinc-400">
                <thead>
                  <tr className="text-[9px] font-black uppercase tracking-wider text-zinc-555 border-b border-zinc-900/40">
                    <th className="py-2 px-1 text-center w-8">Pos</th>
                    <th className="py-2 px-2">Seleção</th>
                    <th className="py-2 px-2 text-center font-bold text-zinc-350">Gols Sofridos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/25">
                  {sortedDefense.map((item, idx) => (
                    <tr key={idx} className="hover:bg-zinc-900/10 transition-colors">
                      <td className="py-3 px-1 text-center font-bold text-zinc-500">{idx + 1}º</td>
                      <td className="py-3 px-2 font-bold">
                        <button
                          onClick={() => onTeamClick(item.team)}
                          className="flex items-center gap-2 hover:text-orange-500 transition focus:outline-none"
                        >
                          {renderFlag(item.team)}
                          <span className="truncate">{item.team}</span>
                        </button>
                      </td>
                      <td className="py-3 px-2 text-center font-black text-green-500 font-mono">{item.goals}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


          <div className="rounded-2xl border border-zinc-900/60 bg-zinc-950/30 p-6">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-4 mb-6">
              <Flame size={18} className="text-orange-500 animate-pulse" />
              <h3 className="text-base font-black uppercase tracking-wider text-white">Recordes do Torneio</h3>
            </div>

            <div className="flex flex-col gap-5 text-xs text-zinc-400">

              {biggestVictoryMatch && (
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Maior Goleada</span>
                  <div className="rounded-xl bg-zinc-900/20 border border-zinc-900/40 p-3.5 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between font-black text-white">
                      <button
                        onClick={() => onTeamClick((biggestVictoryMatch as Fixture).homeTeam)}
                        className="flex items-center gap-1.5 hover:text-orange-500 transition focus:outline-none"
                      >
                        {renderFlag((biggestVictoryMatch as Fixture).homeTeam)}
                        <span className="truncate max-w-[80px] sm:max-w-none">{(biggestVictoryMatch as Fixture).homeTeam}</span>
                      </button>
                      <span className="font-mono text-orange-500 bg-orange-600/10 px-2 py-0.5 rounded border border-orange-500/10 shrink-0 mx-2 text-[10px]">
                        {(biggestVictoryMatch as Fixture).homeScore} - {(biggestVictoryMatch as Fixture).awayScore}
                      </span>
                      <button
                        onClick={() => onTeamClick((biggestVictoryMatch as Fixture).awayTeam)}
                        className="flex items-center gap-1.5 hover:text-orange-500 transition focus:outline-none"
                      >
                        <span className="truncate max-w-[80px] sm:max-w-none">{(biggestVictoryMatch as Fixture).awayTeam}</span>
                        {renderFlag((biggestVictoryMatch as Fixture).awayTeam)}
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-extrabold uppercase text-zinc-500 tracking-wider">
                      <span>{stageTranslations[(biggestVictoryMatch as Fixture).stage] || (biggestVictoryMatch as Fixture).stage}</span>
                      <span>Diferença: +{maxGoalDiff} gols</span>
                    </div>
                  </div>
                </div>
              )}


              {highestScoringMatch && (
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Jogo com Mais Gols</span>
                  <div className="rounded-xl bg-zinc-900/20 border border-zinc-900/40 p-3.5 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between font-black text-white">
                      <button
                        onClick={() => onTeamClick((highestScoringMatch as Fixture).homeTeam)}
                        className="flex items-center gap-1.5 hover:text-orange-500 transition focus:outline-none"
                      >
                        {renderFlag((highestScoringMatch as Fixture).homeTeam)}
                        <span className="truncate max-w-[80px] sm:max-w-none">{(highestScoringMatch as Fixture).homeTeam}</span>
                      </button>
                      <span className="font-mono text-orange-500 bg-orange-600/10 px-2 py-0.5 rounded border border-orange-500/10 shrink-0 mx-2 text-[10px]">
                        {(highestScoringMatch as Fixture).homeScore} - {(highestScoringMatch as Fixture).awayScore}
                      </span>
                      <button
                        onClick={() => onTeamClick((highestScoringMatch as Fixture).awayTeam)}
                        className="flex items-center gap-1.5 hover:text-orange-500 transition focus:outline-none"
                      >
                        <span className="truncate max-w-[80px] sm:max-w-none">{(highestScoringMatch as Fixture).awayTeam}</span>
                        {renderFlag((highestScoringMatch as Fixture).awayTeam)}
                      </button>
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-extrabold uppercase text-zinc-500 tracking-wider">
                      <span>{stageTranslations[(highestScoringMatch as Fixture).stage] || (highestScoringMatch as Fixture).stage}</span>
                      <span>Total: {maxTotalGoals} gols</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
