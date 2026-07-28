"use client";

import Image from "next/image";
import { groupsStandings, GroupStandingTeam } from "./groups-data";

interface GroupTablesProps {
  teamIsoCodes: Record<string, string>;
  onTeamClick?: (teamName: string) => void;
}

export default function GroupTables({ teamIsoCodes, onTeamClick }: GroupTablesProps) {
  const renderFlag = (teamName: string) => {
    const isoCode = teamIsoCodes[teamName];
    if (isoCode) {
      return (
        <div className="relative w-6 h-4 overflow-hidden rounded shrink-0 border border-zinc-800 bg-zinc-900">
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
        <Image
          src="/utils/placeholder.svg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
      </div>
    );
  };

  const renderLastFive = (history: GroupStandingTeam["lastFive"]) => {
    return (
      <div className="flex items-center gap-1">
        {history.map((result, idx) => {
          if (result === "V") {
            return (
              <span
                key={idx}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[8px] font-black text-emerald-500 border border-emerald-500/20"
                title="Vitória"
              >
                V
              </span>
            );
          } else if (result === "E") {
            return (
              <span
                key={idx}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-500/10 text-[8px] font-black text-zinc-450 border border-zinc-500/20"
                title="Empate"
              >
                E
              </span>
            );
          } else if (result === "D") {
            return (
              <span
                key={idx}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500/10 text-[8px] font-black text-red-500 border border-red-500/20"
                title="Derrota"
              >
                D
              </span>
            );
          } else {
            return (
              <span
                key={idx}
                className="h-1.5 w-1.5 rounded-full bg-zinc-800"
                title="Não jogou"
              />
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">

      <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4 select-none">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">Legenda</h4>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-3 w-1 rounded-full bg-emerald-500" />
            <span className="font-semibold text-zinc-350">Classificatória / Eliminatórias</span>
          </div>
          <div className="flex items-center gap-2 border-l border-zinc-900 pl-6">
            <span className="font-bold text-zinc-500 uppercase text-[9px] tracking-wider">Últimas 5 partidas:</span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <div className="flex items-center gap-1">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[8px] font-black text-emerald-500 border border-emerald-500/20">V</span>
                <span className="text-zinc-500">Vitórias</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-500/10 text-[8px] font-black text-zinc-450 border border-zinc-500/20">E</span>
                <span className="text-zinc-500">Empates</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500/10 text-[8px] font-black text-red-500 border border-red-500/20">D</span>
                <span className="text-zinc-500">Derrota</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
                <span className="text-zinc-500">Não jogou</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
        {groupsStandings.map((group, gIdx) => (
          <div
            key={gIdx}
            className="rounded-2xl border border-zinc-900/60 bg-zinc-950/20 p-5 backdrop-blur-md"
          >

            <div className="flex items-center justify-between border-b border-zinc-900/80 pb-4 mb-4">
              <h3 className="text-base font-black uppercase tracking-wider text-white">
                {group.groupName}
              </h3>
            </div>


          <div className="overflow-x-auto select-none">
            <table className="w-full text-left text-xs text-zinc-400">
              <thead>
                <tr className="text-[10px] font-black uppercase tracking-wider text-zinc-500 border-b border-zinc-900/40">
                  <th className="py-2 px-1 text-center w-8">Rank</th>
                  <th className="py-2 px-2">Equipe</th>
                  <th className="py-2 px-2 text-center font-bold text-zinc-300">Pts</th>
                  <th className="py-2 px-2 text-center">PJ</th>
                  <th className="py-2 px-2 text-center">VIT</th>
                  <th className="py-2 px-2 text-center">E</th>
                  <th className="py-2 px-2 text-center">DER</th>
                  <th className="py-2 px-2 text-center">GM</th>
                  <th className="py-2 px-2 text-center">GC</th>
                  <th className="py-2 px-2 text-center">SG</th>
                  <th className="py-2 px-2 text-center pl-4">Últimas 5</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900/40">
                {group.teams.map((team, tIdx) => {
                  const displayTeamName = team.teamDisplay || team.team;
                  return (
                    <tr
                      key={tIdx}
                      className={`group hover:bg-zinc-900/10 transition-colors duration-150 ${
                        team.qualifies ? "bg-emerald-950/[0.02]" : ""
                      }`}
                    >

                      <td className="py-3 px-1 text-center font-bold">
                        <div className="flex items-center justify-center gap-1.5">
                          {team.qualifies && (
                            <span
                              className="h-3 w-1 rounded-full bg-emerald-500"
                              title="Zona de classificação para Eliminatórias"
                            />
                          )}
                          <span className={team.qualifies ? "text-emerald-400" : "text-zinc-500"}>
                            {team.rank}
                          </span>
                        </div>
                      </td>


                      <td className="py-3 px-2 font-bold text-white">
                        <button
                          onClick={() => onTeamClick?.(team.team)}
                          className="flex items-center gap-2 hover:text-orange-500 transition duration-150 text-left focus:outline-none"
                        >
                          {renderFlag(team.team)}
                          <span className="truncate max-w-[120px] sm:max-w-none">
                            {displayTeamName}
                          </span>
                        </button>
                      </td>


                      <td className="py-3 px-2 text-center font-black text-orange-500 text-sm">
                        {team.points}
                      </td>


                      <td className="py-3 px-2 text-center text-zinc-300 font-semibold">{team.played}</td>
                      <td className="py-3 px-2 text-center">{team.won}</td>
                      <td className="py-3 px-2 text-center">{team.drawn}</td>
                      <td className="py-3 px-2 text-center">{team.lost}</td>
                      <td className="py-3 px-2 text-center text-zinc-400">{team.goalsFor}</td>
                      <td className="py-3 px-2 text-center text-zinc-500">{team.goalsAgainst}</td>
                      <td
                        className={`py-3 px-2 text-center font-semibold ${
                          team.goalDifference > 0
                            ? "text-emerald-500"
                            : team.goalDifference < 0
                            ? "text-red-500"
                            : "text-zinc-500"
                        }`}
                      >
                        {team.goalDifference > 0 ? `+${team.goalDifference}` : team.goalDifference}
                      </td>


                      <td className="py-3 px-2 text-center pl-4">
                        {renderLastFive(team.lastFive)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
