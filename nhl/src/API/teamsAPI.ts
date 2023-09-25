const BASE_URL = 'https://statsapi.web.nhl.com'

export const teamsAPI = {
  async getTeams() {
    const response = await fetch(`${BASE_URL}/api/v1/teams`);
    const data = await response.json();
    const teams = await data.teams;
    return teams;
  },

  async getTeam(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/teams/${id}`);
    const data = await response.json();
    const team = await data.team;
    return team;
  }
}