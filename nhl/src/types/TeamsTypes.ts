export type Team = {
  id: number,
  name: string,
  link: string,
  venue?: Venue,
  abbreviation: string,
  teamName: string,
  locationName: string,
  firstYearOfPlay: string,
  division: Division,
  conference: Conference,
  franchise: Franchise,
  shortName: string,
  officialSiteUrl: string,
  franchiseId: number,
  active: boolean,
  roster?: {
    roster: Roster[],
    link: string
  },
  nextGameSchedule?: nextGame | null
}

export type nextGame = {
  totalItems: number,
  totalEvents: number,
  totalGames: number,
  totalMatches: number,
  metaData: {
    timeStamp: string
  },
  dates: [
    {
      date: string,
      totalItems: number,
      totalEvents: number,
      totalGames: number,
      totalMatches: number,
      games: any,
      events: [],
      matches: []
    }
  ]
}

type Roster = {
  person: {
    id: number,
    fullName: string,
    link: string
  },
  jerseyNumber: string,
  position: {
    code: "C" | "D" | "G" | "RW" | "LW"
    name: string,
    type: string,
    abbreviation: "C" | "D" | "G" | "RW" | "LW"
  }

}

type Venue = {
  name: string,
  link: string,
  city: string,
  timeZone: TimeZone
}

type TimeZone = {
  id: string,
  offset: number,
  tz: string
}

type Franchise = {
  franchiseId: number,
  teamName: string,
  link: string
}

type Conference = {
  id: number,
  name: string,
  link: string
}

type Division = {
  id: number,
  name: string,
  nameShort: string,
  link: string,
  abbreviation: string
}

export type TeamStats = {
  stat: {
    gamesPlayed?: number | string,
    wins: number | string,
    losses: number | string,
    ot: number | string,
    pts: number | string,
    goalsPerGame: number | string,
    goalsAgainstPerGame: number | string,
    powerPlayPercentage: string,
    penaltyKillPercentage: string,
    powerPlayGoals: number | string,
    powerPlayOpportunities: number | string,
  }
}

