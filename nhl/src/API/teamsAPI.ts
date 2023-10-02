import { Team, TeamStats, nextGame } from "../types/TeamsTypes";
import { BASE_URL } from "./constants";

export const teamsAPI = {
  async getTeams() {
    const response = await fetch(`${BASE_URL}/api/v1/teams`);
    const data = await response.json();
    const teams: Team[] = await data.teams;
    return teams;
  },

  async getTeam(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/teams/${id}?expand=team.roster`);
    if (response.status === 200) {
      const data = await response.json();
      const team: Team[] = await data.teams;
      return team;
    }
    return []
  },

  async getStats(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/teams/${id}?expand=team.stats`);
    const data = await response.json();
    const team: TeamStats[] = await data.teams[0].teamStats[0].splits;
    return team;
  },

  async getNextGame(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/teams/${id}?expand=team.schedule.next`);
    const data = await response.json();
    const NextGame: nextGame = await data.teams[0].nextGameSchedule;
    return NextGame;
  }
}