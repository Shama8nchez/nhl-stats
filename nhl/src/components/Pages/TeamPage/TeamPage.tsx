import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getTeam, getStats, getNextGame } from "../../../store/teamsSlice";
import classes from './TeamPage.module.css';
import Logos from '../../../assets/logo/index'
import { Team } from "../../../types/TeamsTypes";
import Loader from "../../UI/Loader/Loader";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Logo from "../../UI/Logo/Logo";
import TeamStats from "./TeamStats/TeamStats";
import Roster from "./Roster/Roster";
import TeamInfo from "./TeamInfo/TeamInfo";
import Games from "./Games/Games";


function TeamPage() {
  const team: Team[] = useAppSelector(state => state.teams.team)
  const isLoading: boolean = useAppSelector(state => state.teams.isLoading)
  const dispatch = useAppDispatch()

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(getTeam(Number(id)));
      dispatch(getNextGame(Number(id)));
    }
  }, [])

  useEffect(() => {
    if (id) {
      dispatch(getStats(Number(id)))
    }
  }, [])

  return (

    <div className={classes.teams}>
      {isLoading ? <Loader /> :
        team.length && team[0].active ?
          <div className={classes.content}>
            <h1 className={classes.teamTitle}><Logo logo={Logos[team[0].name]} size="medium" />{team[0].name}</h1>
            <div className={classes.container}>
              <TeamInfo />
              <Games />
              <Roster />
              <TeamStats />
            </div>
          </div> : <NotFound />}
    </div >
  )
}

export default TeamPage;