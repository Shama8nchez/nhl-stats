import { Record, Round, Season } from "../types/SeasonsTypes";
import { BASE_URL } from "./constants";

export const seasonsAPI = {
  async getSeasons() {
    const response = await fetch(`${BASE_URL}/api/v1/seasons`);
    const data = await response.json();
    const seasons: Season[] = await data.seasons;
    return seasons;
  },

  async getSeason(season: string) {
    const response = await fetch(`${BASE_URL}/api/v1/standings?season=${season}`);
    const data = await response.json();
    const records: Record[] = await data.records;
    return records;
  },

  async getPlayoff(season: string) {
    const response = await fetch(`${BASE_URL}/api/v1/tournaments/playoffs?expand=round.series,schedule.game.seriesSummary&season=${season}`);
    if (response.status === 200) {
      const data = await response.json();
      const rounds: Round[] = await data.rounds;
      if (rounds.length) return rounds;
      else return []
    }
    else return []
  },
}