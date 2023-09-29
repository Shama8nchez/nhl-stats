import { TeamStats } from '../../../../types/SeasonsTypes';
import classes from '../Standings/Standings.module.css'
import { useAppSelector } from '../../../../store/store';

const TBody = (props: { teamRecord: TeamStats }) => {
  const record = useAppSelector(state => state.seasons.season)

  return (
    <tr>
      <td>{props.teamRecord.leagueRank}</td>
      <td className={classes.leftAlign}>{props.teamRecord.team.name}</td>
      <td>{props.teamRecord.gamesPlayed}</td>
      <td>{props.teamRecord.leagueRecord.wins}</td>
      {Number(record[0].season) > 19992000 ? <td>{props.teamRecord.leagueRecord.ot}</td> : <></>}
      {Number(record[0].season) < 20052006 ? <td>{props.teamRecord.leagueRecord.ties}</td> : <></>}
      <td>{props.teamRecord.leagueRecord.losses}</td>
      <td>{props.teamRecord.points}</td>
      <td>{props.teamRecord.goalsScored} - {props.teamRecord.goalsAgainst}</td>
    </tr>
  )
}

export default TBody