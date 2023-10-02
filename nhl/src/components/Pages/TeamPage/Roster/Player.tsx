import classes from './Roster.module.css';
import { Roster } from "../../../../types/TeamsTypes";
import { NavLink } from "react-router-dom";

function Player(props: {player: Roster}) {

  return (
    <div>
      <span className={classes.number}>{props.player.jerseyNumber}</span>
      <NavLink to={`/player/${props.player.person.id}`} className={classes.link}>{props.player.person.fullName}</NavLink>
    </div>
  )
}

export default Player;