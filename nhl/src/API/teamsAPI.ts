export const teamsAPI = {
  async getTeams() {
    const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
    const data = await response.json();
    const teams = await data.teams;
    return teams;
  }
}