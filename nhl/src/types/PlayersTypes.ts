export type Player = {
  id: number,
  fullName: string,
  link: string,
  firstName: string,
  lastName: string,
  primaryNumber: string,
  birthDate: string,
  currentAge: number,
  birthCity: string,
  birthStateProvince: string,
  birthCountry: string,
  nationality: string,
  height: string,
  weight: number,
  active: boolean,
  alternateCaptain: boolean,
  captain: boolean,
  rookie: boolean,
  shootsCatches: string,
  rosterStatus: string,
  currentTeam: {
    id: number,
    name: string,
    link: string
  },
  primaryPosition: {
    code: string,
    name: string,
    type: string,
    abbreviation: string
  }
}

export type Stats = {
  season: string,
  stat: {
    assists: number,
    goals: number,
    pim: number,
    games: number,
    penaltyMinutes: string,
    faceOffPct: number,
    points: number
  },
  team: {
    id: number,
    name: string,
    link: string
  },
  league: {
    id: number,
    name: string,
    link: string
  },
  sequenceNumber: number
}