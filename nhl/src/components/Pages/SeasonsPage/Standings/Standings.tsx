import { useAppSelector } from '../../../../store/store';
import { Record, TeamStats } from '../../../../types/SeasonsTypes';
import TBody from '../TBody/TBody';
import THead from '../THead/THead';
import classes from './Standings.module.css'

const Standings = () => {
  const record: Record[] = useAppSelector(state => state.seasons.season)

  return (
    <div className={classes.standings}>
      <h3>League</h3>
      <table className={classes.table}>
        <THead />
        <tbody>
          {record[0].teamRecords.map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Standings