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

export type Round = {
  number: number,
  code: number,
  names: {
    name: string,
    shortName: string
  },
  format: {
    name: string,
    description: string,
    numberOfGames: number,
    numberOfWins: number
  },
  series: Series[]
}

export type Series = {
  seriesNumber: number,
  matchupTeams: MatchupTeams[]
}

export type MatchupTeams = {
  team: {
    id: number,
    name: string,
    link: string
    },
    seed: {
    type: string,
    rank: number,
    isTop: boolean
    },
    seriesRecord: {
    wins: number,
    losses: number
    }
}