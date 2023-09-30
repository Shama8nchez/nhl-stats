const BASE_URL = 'https://statsapi.web.nhl.com'

export const seasonsAPI = {
  async getSeasons() {
    const response = await fetch(`${BASE_URL}/api/v1/seasons`);
    const data = await response.json();
    const seasons = await data.seasons;
    return seasons;
  },

  async getSeason(season: string) {
    const response = await fetch(`${BASE_URL}/api/v1/standings?season=${season}`);
    const data = await response.json();
    const records = await data.records;
    return records;
  },

  async getPlayoff(season: string) {
    const response = await fetch(`${BASE_URL}/api/v1/tournaments/playoffs?expand=round.series,schedule.game.seriesSummary&season=${season}`);
    if (response.status === 200) {
      const data = await response.json();
      const rounds = await data.rounds;
      if (rounds.length) return rounds;
      else return []
    }
    else return []
  },
}