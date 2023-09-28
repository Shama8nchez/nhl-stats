const BASE_URL = 'https://statsapi.web.nhl.com'

export const seasonsAPI = {
  async getSeasons() {
    const response = await fetch(`${BASE_URL}/api/v1/seasons`);
    const data = await response.json();
    const seasons = await data.seasons;
    return seasons;
  },
}