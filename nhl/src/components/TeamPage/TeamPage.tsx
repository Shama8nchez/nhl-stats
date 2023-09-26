import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTeam, setID } from "../../store/teamsSlice";
import classes from './TeamPage.module.css';

import { Team } from "../../types/TeamsTypes";
import Loader from "../../UI/Loader/Loader";
import { useParams } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";


function TeamPage() {
  const team: Team[] = useAppSelector(state => state.teams.team)
  const id = useAppSelector(state => state.teams.id)
  const isLoading: boolean = useAppSelector(state => state.teams.isLoading)
  const dispatch = useAppDispatch()

  let params = useParams()
  dispatch(setID(Number(params.id)))

  useEffect(() => { 
    if (id) dispatch(getTeam(id))
    console.log('effect')
  }, [])

  return (
    
    <div className={classes.teams}>
      {isLoading ? <Loader/> : 
      team.length ? <div style={{color: 'black'}}>{team[0].abbreviation}</div> : <NotFound/>} 
    </div >
  )
}

export default TeamPage;