import { useAppSelector } from "../../../../store/store";
import classes from './Roster.module.css';
import { Team } from "../../../../types/TeamsTypes";
import Player from "./Player";

function Roster() {
  const team: Team[] = useAppSelector(state => state.teams.team)

  return (
    <div className={classes.roster}>
      <h2>ROSTER</h2>
      <div>
        <div className={classes.position}>Goalkeepers</div>
        {team[0].roster?.roster.filter(player => player.position.code === 'G').map(player =>
          <Player key={player.person.id} player={player} />
        )}
      </div>
      <div>
        <div className={classes.position}>Defenders</div>
        {team[0].roster?.roster.filter(player => player.position.code === 'D').map(player =>
          <Player key={player.person.id} player={player} />
        )}
      </div>
      <div>
        <div className={classes.position}>Forwards</div>
        {team[0].roster?.roster.filter(player => (player.position.code === 'C' || player.position.code === 'RW' || player.position.code === 'LW')).map(player =>
          <Player key={player.person.id} player={player} />
        )}
      </div>
    </div>
  )
}

export default Roster;