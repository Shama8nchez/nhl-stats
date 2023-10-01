import { Stats } from '../../../../../types/PlayersTypes';

function PlayerStatsBody(props: { position: string, stats: Stats[] }) {
  return (
    <>
      {
        props.position === 'Goalie' ?
          <tbody>
            {props.stats.map((stat, i) => (
              <tr key={i}>
                <td>{stat.season.slice(0, 4) + '/' + stat.season.slice(4)}</td>
                <td>{stat.league.name === 'National Hockey League' ? 'NHL' : stat.league.name}</td>
                <td>{stat.team.name}</td>
                <td>{stat.stat.games}</td>
                <td>{stat.stat.goalsAgainst}</td>
                <td>{stat.stat.goalAgainstAverage ? stat.stat.goalAgainstAverage.toFixed(2) : ''}</td>
                <td>{stat.stat.savePercentage ? stat.stat.savePercentage.toFixed(2) : ''}</td>
              </tr>
            ))}
          </tbody> :
          <tbody>
            {props.stats.map((stat, i) => (
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
    </>

  )
}

export default PlayerStatsBody;