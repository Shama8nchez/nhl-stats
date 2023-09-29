import { useAppSelector } from '../../../../store/store';
import { TeamStats, Record } from '../../../../types/SeasonsTypes';
import classes from './Standings.module.css'

const StandingsWithDivisions = () => {
  const record: Record[] = useAppSelector(state => state.seasons.season)
  const divisions = useAppSelector(state => state.seasons.division)

  return (
    <div>
      {divisions.map((division: string) =>
        <div>
          {record
            .filter((r: { division: { name: string; } }) => r.division.name === division)
            .map((r: { division: { name: string; } }) => <div><h3>
              {r.division.name} division
            </h3>
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
                  {
                    record
                      .filter((r: Record) => r.division.name === division)
                      .map((team: Record) => team.teamRecords.map((i: TeamStats) => <tr key={i.leagueRank}>
                        <td>{i.divisionRank}</td>
                        <td className={classes.leftAlign}>{i.team.name}</td>
                        <td>{i.gamesPlayed}</td>
                        <td>{i.leagueRecord.wins}</td>
                        <td>{i.leagueRecord.ties}</td>
                        <td>{i.leagueRecord.losses}</td>
                        <td>{i.points}</td>
                        <td>{i.goalsScored} - {i.goalsAgainst}</td>
                      </tr>))
                  }
                </tbody>
              </table>
            </div>)
          }

        </div>

      )
      }
      <div className={classes.standings}>
      <h3>League</h3>
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
          {[...record[0].teamRecords, ...record[1].teamRecords]
          .sort((a,b) => Number(a.leagueRank) - Number(b.leagueRank))
          .map((i: TeamStats) => <tr key={i.leagueRank}>
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
    </div>
  )
}

export default StandingsWithDivisions