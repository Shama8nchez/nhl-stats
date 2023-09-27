import classes from './PlayerPage.module.css'
import Logo from "../../UI/Logo/Logo";
import Logos from '../../../assets/logo/index'
import { Player, Stats } from '../../../types/PlayersTypes';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useParams } from 'react-router-dom';
import { getPlayer, getStats, setID } from '../../../store/playersSlice';
import Loader from '../../UI/Loader/Loader';
import NotFound from '../NotFound/NotFound';

function PlayerPage() {
  const player: Player[] = useAppSelector(state => state.players.player)
  const id = useAppSelector(state => state.players.id)
  const isLoading: boolean = useAppSelector(state => state.players.isLoading)
  const stats: Stats[] = useAppSelector(state => state.players.stats)
  const dispatch = useAppDispatch()

  let params = useParams()
  dispatch(setID(Number(params.id)))

  useEffect(() => {
    if (id) {
      dispatch(getPlayer(id))
      dispatch(getStats(id))
    }

  }, [])

  return (
    <div className={classes.teams}>
      {isLoading ? <Loader /> :
        player.length ?
          <div className={classes.content}>
            <Logo logo={Logos[player[0].currentTeam.name]} size="large" />
            <div className={classes.playerInfo}>
              <h1 className={classes.teamTitle}>{player[0].fullName}</h1>
              <div className={classes.position}>#{player[0].primaryNumber} {player[0].primaryPosition.name}</div>
              <div><strong>Date of birth (age):</strong> {player[0].birthDate} ({player[0].currentAge} years)</div>
              <div><strong>From: </strong>{player[0].birthCountry}, {player[0].birthCity} ({player[0].birthStateProvince})</div>
              <div><strong>Height:</strong> {player[0].height}</div>
              <div><strong>Weight: </strong>{player[0].weight}</div>
            </div>

            <div className={classes.stats}>
              <h2>Player statistics</h2>
              <table className={classes.statsTable}>
                <thead>
                  <tr>
                    <th>Season</th>
                    <th>League</th>
                    <th>Team</th>
                    <th>Games</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Points</th>
                    <th>+/-</th>
                    <th>Penalty minutes</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map(stat => (
                    <tr>
                      <td>{stat.season.slice(0,4) + '/' + stat.season.slice(4)}</td>
                      <td>{stat.league.name === 'National Hockey League'? 'NHL' : stat.league.name}</td>
                      <td>{stat.team.name}</td>
                      <td>{stat.stat.games}</td>
                      <td>{stat.stat.goals}</td>
                      <td>{stat.stat.assists}</td>
                      <td>{stat.stat.points}</td>
                      <td>{stat.stat.pim}</td>
                      <td>{stat.stat.penaltyMinutes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
          : <NotFound />}
    </div>
  )
}

export default PlayerPage;