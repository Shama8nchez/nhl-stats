import classes from './PlayerStats.module.css'
import { Player, Stats } from '../../../../types/PlayersTypes';
import { useAppSelector } from "../../../../store/store";
import PlayerStatsHead from './PlayerStatsHead/PlayerStatsHead';
import PlayerStatsBody from './PlayerStatsBody/PlayerStatsBody';

function PlayerStats() {
  const stats: Stats[] = useAppSelector(state => state.players.stats)
  const player: Player[] = useAppSelector(state => state.players.player)

  return (
    <div className={classes.stats}>
      <h2>Player statistics</h2>
      <table className={classes.statsTable}>
        <PlayerStatsHead position={player[0].primaryPosition.name} />
        <PlayerStatsBody position={player[0].primaryPosition.name} stats={stats} />
      </table>
    </div>
  )
}

export default PlayerStats;