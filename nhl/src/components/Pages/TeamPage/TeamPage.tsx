import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getTeam, setID, getStats } from "../../../store/teamsSlice";
import classes from './TeamPage.module.css';
import Logos from '../../../assets/logo/index'
import { Team } from "../../../types/TeamsTypes";
import Loader from "../../UI/Loader/Loader";
import { NavLink, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Logo from "../../UI/Logo/Logo";


function TeamPage() {
  const team: Team[] = useAppSelector(state => state.teams.team)
  const stats = useAppSelector(state => state.teams.stats)
  const id = useAppSelector(state => state.teams.id)
  const isLoading: boolean = useAppSelector(state => state.teams.isLoading)
  const dispatch = useAppDispatch()

  let params = useParams()
  dispatch(setID(Number(params.id)))

  useEffect(() => {
    if (id) {
      dispatch(getTeam(id));
    }
  }, [])

  useEffect(() => {
    if (id) {
      dispatch(getStats(id))
    }
  }, [])

  return (

    <div className={classes.teams}>
      {isLoading ? <Loader /> :
        team.length ?
          <div className={classes.content}>
            <h1 className={classes.teamTitle}><Logo logo={Logos[team[0].name]} size="medium" />{team[0].name}</h1>
            <div className={classes.container}>
              <div className={classes.commonInfo}>
                <h2>COMMON INFORMATION</h2>
                <p><strong>CONFERENCE:</strong> {team[0].conference.name}</p>
                <p><strong>DIVISION:</strong> {team[0].division.name}</p>
                <p><strong>FIRST SEASON:</strong> {team[0].firstYearOfPlay}</p>
                <p><strong>VENUE:</strong> {team[0].venue.name} ({team[0].venue.city})</p>
                <p><strong>OFFICIAL WEBSITE:</strong> {team[0].officialSiteUrl}</p>
              </div>

              <div className={classes.roster}>
                <h2>ROSTER</h2>
                <div>
                  <div className={classes.position}>Goalkeepers</div>
                  {team[0].roster?.roster.filter(player => player.position.code === 'G').map(player =>
                    <div>
                      <span className={classes.number}>{player.jerseyNumber}</span>
                      <NavLink to={`/player/${player.person.id}`} className={classes.link}>{player.person.fullName}</NavLink>
                    </div>
                  )}
                </div>
                <div>
                  <div className={classes.position}>Defenders</div>
                  {team[0].roster?.roster.filter(player => player.position.code === 'D').map(player =>
                    <div>
                      <span className={classes.number}>{player.jerseyNumber}</span>
                      <NavLink to={`/player/${player.person.id}`} className={classes.link}>{player.person.fullName}</NavLink>
                    </div>
                  )}
                </div>
                <div>
                  <div className={classes.position}>Forwards</div>
                  {team[0].roster?.roster.filter(player => (player.position.code === 'C' || player.position.code === 'RW' || player.position.code === 'LW')).map(player =>
                    <div>
                      <span className={classes.number}>{player.jerseyNumber}</span>
                      <NavLink to={`/player/${player.person.id}`} className={classes.link}>{player.person.fullName}</NavLink>
                    </div>
                  )}
                </div>
              </div>

              <div className={classes.stats}>
                {stats ? <div>
                  <h2>STATISTICS</h2>
                  <div><strong>GAMES PLAYED:</strong> {stats[0].stat.gamesPlayed}</div>
                  <div><strong>WINS:</strong> {stats[0].stat.wins} ({stats[1].stat.wins})</div>
                  <div><strong>LOSSES:</strong> {stats[0].stat.ot} ({stats[1].stat.ot})</div>
                  <div><strong>WINS IN OT:</strong> {stats[0].stat.losses} ({stats[1].stat.losses})</div>
                  <div><strong>POINTS:</strong> {stats[0].stat.pts} ({stats[1].stat.pts})</div>
                  <div><strong>GOALS PER GAME:</strong> {stats[0].stat.goalsPerGame.toFixed(2)} ({stats[1].stat.goalsPerGame})</div>
                  <div><strong>GOALS AGAINST PER GAME:</strong> {stats[0].stat.goalsAgainstPerGame.toFixed(2)} ({stats[1].stat.goalsAgainstPerGame})</div>
                  <div><strong>POWER PLAY:</strong> {stats[0].stat.powerPlayPercentage}% - {stats[0].stat.powerPlayGoals} from {stats[0].stat.powerPlayOpportunities} ({stats[1].stat.powerPlayPercentage})</div>
                  <div><strong>PENALTY KILL:</strong> {stats[0].stat.penaltyKillPercentage} ({stats[1].stat.penaltyKillPercentage})</div>
                </div> : <div>stats:</div>}
              </div>
            </div>
          </div> : <NotFound />}
    </div >
  )
}

export default TeamPage;