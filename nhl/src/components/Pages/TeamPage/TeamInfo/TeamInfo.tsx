import { useAppSelector } from "../../../../store/store";
import classes from './TeamInfo.module.css';
import { Team } from "../../../../types/TeamsTypes";

function TeamInfo() {
  const team: Team[] = useAppSelector(state => state.teams.team)

  return (
    <div className={classes.commonInfo}>
      <h2>COMMON INFORMATION</h2>
      <p><strong>CONFERENCE:</strong> {team[0].conference.name}</p>
      <p><strong>DIVISION:</strong> {team[0].division.name}</p>
      <p><strong>FIRST SEASON:</strong> {team[0].firstYearOfPlay}</p>
      <p><strong>VENUE:</strong> {team[0].venue?.name} ({team[0].venue?.city})</p>
      <p><strong>OFFICIAL WEBSITE:</strong> {team[0].officialSiteUrl}</p>
    </div>
  )
}

export default TeamInfo;