export type Season = {
  seasonId: string
}

export type Record = {
  standingsType: string,
  division: {
    name: string,
  },
  conference: {
    name: string,
  }
  season: string,
  teamRecords: TeamStats[]
}

export type TeamStats = {
  leagueRank: string,
  divisionRank: string,
  conferenceRank: string,
  gamesPlayed: number,
  goalsScored: number,
  goalsAgainst: number,
  points: number,
  leagueRecord: {
    losses: number,
    ot: number,
    ties: number,
    wins: number
  }
  team: {
    [x: string]: any
    name: string
  }
}