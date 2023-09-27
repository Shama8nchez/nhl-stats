import { useAppSelector } from "../../../../store/store";
import classes from './Roster.module.css';
import { Team } from "../../../../types/TeamsTypes";
import { NavLink } from "react-router-dom";

function Roster() {
  const team: Team[] = useAppSelector(state => state.teams.team)

  return (
    <div className={classes.roster}>
      <h2>ROSTER</h2>
      <div>
        <div className={classes.position}>Goalkeepers</div>
        {team[0].roster?.roster.filter(player => player.position.code === 'G').map(player =>
          <div key={player.person.id}>
            <span className={classes.number}>{player.jerseyNumber}</span>
            <NavLink to={`/player/${player.person.id}`} className={classes.link}>{player.person.fullName}</NavLink>
          </div>
        )}
      </div>
      <div>
        <div className={classes.position}>Defenders</div>
        {team[0].roster?.roster.filter(player => player.position.code === 'D').map(player =>
          <div key={player.person.id}>
            <span className={classes.number}>{player.jerseyNumber}</span>
            <NavLink to={`/player/${player.person.id}`} className={classes.link}>{player.person.fullName}</NavLink>
          </div>
        )}
      </div>
      <div>
        <div className={classes.position}>Forwards</div>
        {team[0].roster?.roster.filter(player => (player.position.code === 'C' || player.position.code === 'RW' || player.position.code === 'LW')).map(player =>
          <div key={player.person.id}>
            <span className={classes.number}>{player.jerseyNumber}</span>
            <NavLink to={`/player/${player.person.id}`} className={classes.link}>{player.person.fullName}</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Roster;