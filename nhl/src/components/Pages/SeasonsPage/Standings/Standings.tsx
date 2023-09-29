import { useAppSelector } from '../../../../store/store';
import { Record, TeamStats } from '../../../../types/SeasonsTypes';
import classes from './Standings.module.css'

const Standings = () => {
  const record: Record[] = useAppSelector(state => state.seasons.season)

  return (
    <div className={classes.standings}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Games</th>
            <th>Wins</th>
            <th>Ties</th>
            <th>Losses</th>
            <th>Points</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {record[0].teamRecords.map((i: TeamStats) => <tr key={i.leagueRank}>
            <td>{i.leagueRank}</td>
            <td className={classes.leftAlign}>{i.team.name}</td>
            <td>{i.gamesPlayed}</td>
            <td>{i.leagueRecord.wins}</td>
            <td>{i.leagueRecord.ties}</td>
            <td>{i.leagueRecord.losses}</td>
            <td>{i.points}</td>
            <td>{i.goalsScored} - {i.goalsAgainst}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Standings