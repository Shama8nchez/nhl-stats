import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTeams } from "../../store/teamsSlice";
import classes from './Teams.module.css';
import TeamCard from "./Team/TeamCard";
import { Team } from "../../types/TeamsTypes";
import Loader from "../../UI/Loader/Loader";

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
      {isLoading ? <Loader /> : teams.map(team =>
        <TeamCard team={team} key={team.id} />
      )}
    </div >
  )
}

export default Teams;