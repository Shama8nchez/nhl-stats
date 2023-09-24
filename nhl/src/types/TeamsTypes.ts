export type Team = {
  id: number,
  name: string,
  link: string,
  venue: Venue,
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
  active: boolean
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
