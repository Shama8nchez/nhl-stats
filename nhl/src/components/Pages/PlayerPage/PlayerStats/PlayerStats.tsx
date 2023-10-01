import classes from './PlayerStats.module.css'
import { Player, Stats } from '../../../../types/PlayersTypes';
import { useAppSelector } from "../../../../store/store";
import PlayerStatsHead from './PlayerStatsHead/PlayerStatsHead';

function PlayerStats() {
  const stats: Stats[] = useAppSelector(state => state.players.stats)
  const player: Player[] = useAppSelector(state => state.players.player)

  return (
    <div className={classes.stats}>
      <h2>Player statistics</h2>
      <table className={classes.statsTable}>
        <PlayerStatsHead position={player[0].primaryPosition.name} />
        {
          player[0].primaryPosition.name === 'Goalie' ? <tbody>
            {stats.map((stat, i) => (
              <tr key={i}>
                <td>{stat.season.slice(0, 4) + '/' + stat.season.slice(4)}</td>
                <td>{stat.league.name === 'National Hockey League' ? 'NHL' : stat.league.name}</td>
                <td>{stat.team.name}</td>
                <td>{stat.stat.games}</td>
                <td>{stat.stat.goalsAgainst}</td>
                <td>{stat.stat.goalAgainstAverage.toFixed(2)}</td>
                <td>{stat.stat.savePercentage ? stat.stat.savePercentage.toFixed(2) : ''}</td>
              </tr>
            ))}
          </tbody> :
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
        }

      </table>
    </div>
  )
}

export default PlayerStats;