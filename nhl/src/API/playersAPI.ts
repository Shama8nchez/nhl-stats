const BASE_URL = 'https://statsapi.web.nhl.com'

export const playersAPI = {
  async getPlayer(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/people/${id}`);
    const data = await response.json();
    const player = await data.people;
    return player;
  },

  async getStats(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/people/${id}/stats?stats=yearByYear`);
    const data = await response.json();
    const stats = await data.stats[0].splits;
    return stats;
  }
}