import classes from './TeamCard.module.css';
import Logos from '../../../../assets/logo/index'
import Logo from '../../../UI/Logo/Logo'
import { NavLink } from "react-router-dom";
import { Team } from '../../../../types/TeamsTypes';

function TeamCard(props: {team: Team}) {

  return (
    <div className={classes.team} key={props.team.id}>
      <Logo logo={Logos[props.team.name]} size={'small'}/>
      <h2 className={classes.teamName}>{window.screen.width >= 1000 || (window.screen.width < 768 &&  window.screen.width > 485) ? props.team.name : props.team.abbreviation}</h2>
      <div className={classes.showMore}>
        <div className={classes.info}><NavLink to={`/teams/${props.team.id}`} className={classes.info}>SHOW MORE</NavLink></div>
      </div>
    </div>
  )
}

export default TeamCard;