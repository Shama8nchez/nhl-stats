import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTeams } from "../../store/teamsSlice";
import classes from './Teams.module.css';
import TeamCard from "./Team/TeamCard";
import { Team } from "../../types/TeamsTypes";

function Teams() {
  const teams: Team[] = useAppSelector(state => state.teams.teams)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTeams())
  }, [])

  return (
    <div className={classes.teams}>
      {teams.map(team =>
        <TeamCard team={team} key={team.id} />
      )}
    </div >
  )
}

export default Teams;