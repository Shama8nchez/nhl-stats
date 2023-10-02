import classes from './PlayerPage.module.css'
import Logo from "../../UI/Logo/Logo";
import Logos from '../../../assets/logo/index'
import { Player } from '../../../types/PlayersTypes';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useParams } from 'react-router-dom';
import { getPlayer, getStats, setLoadersTrue } from '../../../store/playersSlice';
import Loader from '../../UI/Loader/Loader';
import NotFound from '../NotFound/NotFound';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStats from './PlayerStats/PlayerStats';

function PlayerPage() {
  const player: Player[] = useAppSelector(state => state.players.player)
  const isPlayerLoading: boolean = useAppSelector(state => state.players.isPlayerLoading)
  const isStatsLoading: boolean = useAppSelector(state => state.players.isStatsLoading)
  const dispatch = useAppDispatch()

  const { playerId } = useParams()

  useEffect(() => {
    if (playerId) {
      dispatch(getPlayer(Number(playerId)))
      dispatch(getStats(Number(playerId)))
    }
  }, [playerId])

  useEffect(() => {
    return () => {
      dispatch(setLoadersTrue(true))
    }
  }, [])

  return (
    <div className={classes.teams}>
      {isPlayerLoading || isStatsLoading ? <Loader /> :
        player.length !== 0 && player[0].currentTeam ?
          <div className={classes.content}>
            {player[0].currentTeam ? <Logo logo={Logos[player[0].currentTeam.name]} size="large" /> : <div></div>}
            <PlayerInfo />
            <PlayerStats />
          </div>
          : <NotFound />}
    </div>
  )
}

export default PlayerPage;