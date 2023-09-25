import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTeams } from "../../store/teamsSlice";
import classes from './Teams.module.css';
import Logos from '../../assets/logo/index'
import Logo from '../../UI/Logo/Logo'
import { NavLink } from "react-router-dom";

function Teams() {
  const teams = useAppSelector(state => state.teams.teams)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTeams())
  }, [])

  return (
    <div className={classes.teams}>
      {teams.map(team => 
          <div className={classes.team} key={team.id}>
            <Logo logo={Logos[team.abbreviation]} />
            <h2 className={classes.teamName}>{team.name}</h2>
            <div className={classes.showMore}>
              <div className={classes.info}><NavLink to={`/teams/${team.id}`} className={classes.info}>SHOW MORE</NavLink></div>
            </div>
          </div>
      )}
    </div >
  )
}

export default Teams;