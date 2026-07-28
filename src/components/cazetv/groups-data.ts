import fixturesData from "./world-cup-2026-fixtures.json";

export interface GroupStandingTeam {
  rank: number;
  team: string;
  teamDisplay?: string;
  points: string | number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  lastFive: ("V" | "E" | "D" | "N")[];
  qualifies: boolean;
}

export interface GroupData {
  groupName: string;
  teams: GroupStandingTeam[];
}

export const groupsStandings: GroupData[] = [
  {
    groupName: "Grupo A",
    teams: [
      { rank: 1, team: "México", points: 9, played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 6, goalsAgainst: 0, goalDifference: 6, lastFive: ["V", "V", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "África do Sul", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 3, goalDifference: -1, lastFive: ["D", "E", "V", "N", "N"], qualifies: true },
      { rank: 3, team: "Coreia do Sul", points: 3, played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 2, goalsAgainst: 3, goalDifference: -1, lastFive: ["V", "D", "D", "N", "N"], qualifies: false },
      { rank: 4, team: "Tchéquia", points: 1, played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 6, goalDifference: -4, lastFive: ["D", "E", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo B",
    teams: [
      { rank: 1, team: "Suíça", points: 7, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, lastFive: ["E", "V", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Canadá", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 8, goalsAgainst: 3, goalDifference: 5, lastFive: ["E", "V", "D", "N", "N"], qualifies: true },
      { rank: 3, team: "Bósnia e Herzegovina", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 6, goalDifference: -1, lastFive: ["E", "D", "V", "N", "N"], qualifies: true },
      { rank: 4, team: "Catar", points: 1, played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 2, goalsAgainst: 10, goalDifference: -8, lastFive: ["E", "D", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo C",
    teams: [
      { rank: 1, team: "Brasil", points: 7, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 7, goalsAgainst: 1, goalDifference: 6, lastFive: ["E", "V", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Marrocos", points: 7, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 3, goalDifference: 3, lastFive: ["E", "V", "V", "N", "N"], qualifies: true },
      { rank: 3, team: "Escócia", points: 3, played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 1, goalsAgainst: 4, goalDifference: -3, lastFive: ["V", "D", "D", "N", "N"], qualifies: false },
      { rank: 4, team: "Haiti", points: 0, played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 8, goalDifference: -6, lastFive: ["D", "D", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo D",
    teams: [
      { rank: 1, team: "Estados Unidos", points: 6, played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4, lastFive: ["V", "V", "D", "N", "N"], qualifies: true },
      { rank: 2, team: "Austrália", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["V", "D", "E", "N", "N"], qualifies: true },
      { rank: 3, team: "Paraguai", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 4, goalDifference: -2, lastFive: ["D", "V", "E", "N", "N"], qualifies: true },
      { rank: 4, team: "Turquia", points: 3, played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 3, goalsAgainst: 5, goalDifference: -2, lastFive: ["D", "D", "V", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo E",
    teams: [
      { rank: 1, team: "Alemanha", points: 6, played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 10, goalsAgainst: 4, goalDifference: 6, lastFive: ["V", "V", "D", "N", "N"], qualifies: true },
      { rank: 2, team: "Costa do Marfim", points: 6, played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 4, goalsAgainst: 2, goalDifference: 2, lastFive: ["V", "D", "V", "N", "N"], qualifies: true },
      { rank: 3, team: "Equador", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["D", "E", "V", "N", "N"], qualifies: true },
      { rank: 4, team: "Curaçao", points: 1, played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 1, goalsAgainst: 9, goalDifference: -8, lastFive: ["D", "E", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo F",
    teams: [
      { rank: 1, team: "Holanda", teamDisplay: "Países Baixos", points: 7, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 10, goalsAgainst: 4, goalDifference: 6, lastFive: ["E", "V", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Japão", points: 5, played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 7, goalsAgainst: 3, goalDifference: 4, lastFive: ["E", "V", "E", "N", "N"], qualifies: true },
      { rank: 3, team: "Suécia", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 7, goalsAgainst: 7, goalDifference: 0, lastFive: ["V", "D", "E", "N", "N"], qualifies: true },
      { rank: 4, team: "Tunísia", points: 0, played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 12, goalDifference: -10, lastFive: ["D", "D", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo G",
    teams: [
      { rank: 1, team: "Bélgica", points: 5, played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 6, goalsAgainst: 2, goalDifference: 4, lastFive: ["E", "E", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Egito", points: 5, played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 5, goalsAgainst: 3, goalDifference: 2, lastFive: ["E", "V", "E", "N", "N"], qualifies: true },
      { rank: 3, team: "Irã", points: 3, played: 3, won: 0, drawn: 3, lost: 0, goalsFor: 3, goalsAgainst: 3, goalDifference: 0, lastFive: ["E", "E", "E", "N", "N"], qualifies: false },
      { rank: 4, team: "Nova Zelândia", points: 1, played: 3, won: 0, drawn: 1, lost: 2, goalsFor: 4, goalsAgainst: 10, goalDifference: -6, lastFive: ["E", "D", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo H",
    teams: [
      { rank: 1, team: "Espanha", points: 7, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 5, goalsAgainst: 0, goalDifference: 5, lastFive: ["E", "V", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Cabo Verde", points: 3, played: 3, won: 0, drawn: 3, lost: 0, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["E", "E", "E", "N", "N"], qualifies: true },
      { rank: 3, team: "Uruguai", points: 2, played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, lastFive: ["E", "E", "D", "N", "N"], qualifies: false },
      { rank: 4, team: "Arábia Saudita", points: 2, played: 3, won: 0, drawn: 2, lost: 1, goalsFor: 1, goalsAgainst: 5, goalDifference: -4, lastFive: ["E", "D", "E", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo I",
    teams: [
      { rank: 1, team: "França", points: 9, played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 10, goalsAgainst: 2, goalDifference: 8, lastFive: ["V", "V", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Noruega", points: 6, played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 8, goalsAgainst: 7, goalDifference: 1, lastFive: ["V", "V", "D", "N", "N"], qualifies: true },
      { rank: 3, team: "Senegal", points: 3, played: 3, won: 1, drawn: 0, lost: 2, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, lastFive: ["D", "D", "V", "N", "N"], qualifies: true },
      { rank: 4, team: "Iraque", points: 0, played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 1, goalsAgainst: 12, goalDifference: -11, lastFive: ["D", "D", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo J",
    teams: [
      { rank: 1, team: "Argentina", points: 9, played: 3, won: 3, drawn: 0, lost: 0, goalsFor: 8, goalsAgainst: 1, goalDifference: 7, lastFive: ["V", "V", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Áustria", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, lastFive: ["V", "D", "E", "N", "N"], qualifies: true },
      { rank: 3, team: "Argélia", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 5, goalsAgainst: 7, goalDifference: -2, lastFive: ["D", "V", "E", "N", "N"], qualifies: true },
      { rank: 4, team: "Jordânia", points: 0, played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 3, goalsAgainst: 8, goalDifference: -5, lastFive: ["D", "D", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo K",
    teams: [
      { rank: 1, team: "Colômbia", points: 7, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 4, goalsAgainst: 1, goalDifference: 3, lastFive: ["V", "V", "E", "N", "N"], qualifies: true },
      { rank: 2, team: "Portugal", points: 5, played: 3, won: 1, drawn: 2, lost: 0, goalsFor: 6, goalsAgainst: 1, goalDifference: 5, lastFive: ["E", "V", "E", "N", "N"], qualifies: true },
      { rank: 3, team: "RD Congo", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 4, goalsAgainst: 3, goalDifference: 1, lastFive: ["E", "D", "V", "N", "N"], qualifies: true },
      { rank: 4, team: "Uzbequistão", points: 0, played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 2, goalsAgainst: 11, goalDifference: -9, lastFive: ["D", "D", "D", "N", "N"], qualifies: false }
    ]
  },
  {
    groupName: "Grupo L",
    teams: [
      { rank: 1, team: "Inglaterra", points: 7, played: 3, won: 2, drawn: 1, lost: 0, goalsFor: 6, goalsAgainst: 2, goalDifference: 4, lastFive: ["V", "E", "V", "N", "N"], qualifies: true },
      { rank: 2, team: "Croácia", points: 6, played: 3, won: 2, drawn: 0, lost: 1, goalsFor: 5, goalsAgainst: 5, goalDifference: 0, lastFive: ["D", "V", "V", "N", "N"], qualifies: true },
      { rank: 3, team: "Gana", points: 4, played: 3, won: 1, drawn: 1, lost: 1, goalsFor: 2, goalsAgainst: 2, goalDifference: 0, lastFive: ["V", "E", "D", "N", "N"], qualifies: true },
      { rank: 4, team: "Panamá", points: 0, played: 3, won: 0, drawn: 0, lost: 3, goalsFor: 0, goalsAgainst: 4, goalDifference: -4, lastFive: ["D", "D", "D", "N", "N"], qualifies: false }
    ]
  }
];

export const resolvePlaceholder = (teamName: string): string => {
  if (!teamName) return "";


  const match = teamName.match(/^(\d+)º do Grupo ([A-L])$/);
  if (match) {
    const rank = parseInt(match[1]);
    const groupLetter = match[2];
    const groupName = `Grupo ${groupLetter}`;
    const group = groupsStandings.find((g) => g.groupName === groupName);
    if (group) {
      const teamObj = group.teams.find((t) => t.rank === rank);
      if (teamObj) {
        return teamObj.team;
      }
    }
  }



  if (teamName.startsWith("3º do Grupo")) {
    if (teamName.includes("A/B/C/D/F")) return "Suécia";
    if (teamName.includes("C/D/F/G/H")) return "Paraguai";
    if (teamName.includes("C/E/F/H/I")) return "Senegal";
    if (teamName.includes("E/H/I/J/K")) return "Argélia";
    if (teamName.includes("D/E/G/I/J")) return "Equador";
    if (teamName.includes("A/B/D/G/I")) return "Bélgica";










    if (teamName.includes("A/B/D/G/I")) return "Bélgica";
    if (teamName.includes("B/C/E/F/I")) return "Cabo Verde";
    if (teamName.includes("B/F/G/J/L")) return "Bósnia e Herzegovina";
  }


  const winnerMatch = teamName.match(/^Vencedor (?:do )?Jogo (\d+)$/i);
  if (winnerMatch) {
    const matchNum = parseInt(winnerMatch[1]);
    const fixtures = fixturesData.fixtures;
    const match = fixtures.find((f) => f.matchNumber === matchNum);
    if (match && typeof match.homeScore === "number" && typeof match.awayScore === "number") {
      if (match.homeScore > match.awayScore) {
        return resolvePlaceholder(match.homeTeam);
      } else if (match.awayScore > match.homeScore) {
        return resolvePlaceholder(match.awayTeam);
      } else {
        const customWinner = (match as any).winner || (match as any).vencedor;
        if (customWinner) {
          return resolvePlaceholder(customWinner);
        }
      }
    }
  }


  const loserMatch = teamName.match(/^Perdedor (?:do )?Jogo (\d+)$/i);
  if (loserMatch) {
    const matchNum = parseInt(loserMatch[1]);
    const fixtures = fixturesData.fixtures;
    const match = fixtures.find((f) => f.matchNumber === matchNum);
    if (match && typeof match.homeScore === "number" && typeof match.awayScore === "number") {
      if (match.homeScore < match.awayScore) {
        return resolvePlaceholder(match.homeTeam);
      } else if (match.awayScore < match.homeScore) {
        return resolvePlaceholder(match.awayTeam);
      }
    }
  }

  return teamName;
};
