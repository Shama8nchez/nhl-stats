import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getTeams } from "../../../store/teamsSlice";
import classes from './TeamsPage.module.css';
import { Team } from "../../../types/TeamsTypes";
import Loader from "../../UI/Loader/Loader";
import Division from "./Division/Division";

function Teams() {
  const teams: Team[] = useAppSelector(state => state.teams.teams)
  const dispatch = useAppDispatch()
  const isLoading: boolean = useAppSelector(state => state.teams.isLoading)

  useEffect(() => {
    if (!teams.length)
      dispatch(getTeams())
  }, [])

  return (

    <div className={classes.teams}>
      {isLoading ? <Loader /> : <>
        <div className={classes.conference}>
          <h2>Western Conference</h2>
          <Division teams={teams} division='Pacific' />
          <Division teams={teams} division='Central' />
        </div>
        <div className={classes.conference}>
          <h2>Eastern Conference</h2>
          <Division teams={teams} division='Metropolitan' />
          <Division teams={teams} division='Atlantic' />
        </div>
      </>
      }
    </div >
  )
}

export default Teams;