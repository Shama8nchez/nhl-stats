import classes from './PlayerInfo.module.css'
import { Player } from '../../../../types/PlayersTypes';
import { useAppSelector } from "../../../../store/store";

function PlayerInfo() {
  const player: Player[] = useAppSelector(state => state.players.player)

  return (
    <div className={classes.playerInfo}>
      <h1 className={classes.teamTitle}>{player[0].fullName}</h1>
      <div className={classes.position}>#{player[0].primaryNumber} {player[0].primaryPosition.name}</div>
      <div><strong>Date of birth (age):</strong> {player[0].birthDate} ({player[0].currentAge} years)</div>
      <div><strong>From: </strong>{player[0].birthCountry}, {player[0].birthCity} ({player[0].birthStateProvince})</div>
      <div><strong>Height:</strong> {player[0].height}</div>
      <div><strong>Weight: </strong>{player[0].weight}</div>
    </div>
  )
}

export default PlayerInfo;