import classes from './PlayerPage.module.css'
import Logo from "../../UI/Logo/Logo";
import Logos from '../../../assets/logo/index'
import { Player } from '../../../types/PlayersTypes';
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useParams } from 'react-router-dom';
import { getPlayer, getStats, setID, setLoadersTrue } from '../../../store/playersSlice';
import Loader from '../../UI/Loader/Loader';
import NotFound from '../NotFound/NotFound';
import PlayerInfo from './PlayerInfo/PlayerInfo';
import PlayerStats from './PlayerStats/PlayerStats';

function PlayerPage() {
  const player: Player[] = useAppSelector(state => state.players.player)
  const id = useAppSelector(state => state.players.id)
  const isPlayerLoading: boolean = useAppSelector(state => state.players.isPlayerLoading)
  const isStatsLoading: boolean = useAppSelector(state => state.players.isStatsLoading)
  const dispatch = useAppDispatch()

  let params = useParams()
  useMemo(() => {
    dispatch(setID(Number(params.id)))
  }, [id])

  useEffect(() => {
    if (id) {
      dispatch(getPlayer(id))
      dispatch(getStats(id))
    }
  }, [id])

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