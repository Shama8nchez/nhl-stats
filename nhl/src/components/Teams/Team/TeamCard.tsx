import classes from './TeamCard.module.css';
import Logos from '../../../assets/logo/index'
import Logo from '../../UI/Logo/Logo'
import { NavLink } from "react-router-dom";
import { Team } from '../../../types/TeamsTypes';
import { useAppDispatch } from '../../../store/store';
import { setID } from '../../../store/teamsSlice';

function TeamCard(props: {team: Team}) {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(setID(props.team.id))
  }

  return (
    <div className={classes.team} key={props.team.id}>
      <Logo logo={Logos[props.team.name]} size={'small'}/>
      <h2 className={classes.teamName}>{props.team.name}</h2>
      <div className={classes.showMore}>
        <div className={classes.info} onClick={onClick}><NavLink to={`/teams/${props.team.id}`} className={classes.info}>SHOW MORE</NavLink></div>
      </div>
    </div>
  )
}

export default TeamCard;