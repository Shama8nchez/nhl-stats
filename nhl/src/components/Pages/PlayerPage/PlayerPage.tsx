import classes from './PlayerPage.module.css'
import Logo from "../../../UI/Logo/Logo";
import Logos from '../../../assets/logo/index'
import { Player } from '../../../types/PlayersTypes';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useParams } from 'react-router-dom';
import { getPlayer, setID } from '../../../store/playersSlice';
import Loader from '../../../UI/Loader/Loader';
import NotFound from '../NotFound/NotFound';

function PlayerPage() {
  const player: Player[] = useAppSelector(state => state.players.player)
  const id = useAppSelector(state => state.players.id)
  const isLoading: boolean = useAppSelector(state => state.players.isLoading)
  const dispatch = useAppDispatch()

  let params = useParams()
  dispatch(setID(Number(params.id)))

  useEffect(() => {
    if (id)
    dispatch(getPlayer(id))
  }, [])

  return (
    <div className={classes.teams}>
      {isLoading ? <Loader /> :
        player.length ?
      <div className={classes.content}>
        <Logo logo={Logos[player[0].currentTeam.name]} size="large" />
        <h1 className={classes.teamTitle}>{player[0].fullName}</h1>


      </div>
      : <NotFound />}
    </div>
  )
}

export default PlayerPage;