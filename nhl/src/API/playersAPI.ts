import { Player, Stats } from "../types/PlayersTypes";
import { BASE_URL } from "./constants";

export const playersAPI = {
  async getPlayer(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/people/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      const player: Player[] = await data.people;
      return player;
    }
    return []
  },

  async getStats(id: number) {
    const response = await fetch(`${BASE_URL}/api/v1/people/${id}/stats?stats=yearByYear`);
    if (response.status === 200) {
      const data = await response.json();
      const stats: Stats[] = await data.stats[0].splits;
      return stats;
    } else return []
  }
}