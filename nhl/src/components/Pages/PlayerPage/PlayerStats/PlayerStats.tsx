import classes from './PlayerStats.module.css'
import { Stats } from '../../../../types/PlayersTypes';
import { useAppSelector } from "../../../../store/store";

function PlayerStats() {
  const stats: Stats[] = useAppSelector(state => state.players.stats)

  return (
    <div className={classes.stats}>
      <h2>Player statistics</h2>
      <table className={classes.statsTable}>
        <thead>
          <tr>
            <th>Season</th>
            <th>League</th>
            <th>Team</th>
            <th>Games</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Points</th>
            <th>+/-</th>
            <th>Penalty minutes</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, i) => (
            <tr key={i}>
              <td>{stat.season.slice(0, 4) + '/' + stat.season.slice(4)}</td>
              <td>{stat.league.name === 'National Hockey League' ? 'NHL' : stat.league.name}</td>
              <td>{stat.team.name}</td>
              <td>{stat.stat.games}</td>
              <td>{stat.stat.goals}</td>
              <td>{stat.stat.assists}</td>
              <td>{stat.stat.points}</td>
              <td>{stat.stat.plusMinus}</td>
              <td>{stat.stat.penaltyMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayerStats;