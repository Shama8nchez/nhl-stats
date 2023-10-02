import {  useAppSelector } from "../../../../store/store";
import classes from './TeamStats.module.css';

function TeamStats() {
  const stats = useAppSelector(state => state.teams.stats)

  return (
    <div className={classes.stats}>
      {stats.length ? <div>
        <h2>STATISTICS</h2>
        <div><strong>GAMES PLAYED:</strong> {stats[0].stat.gamesPlayed}</div>
        <div><strong>WINS:</strong> {stats[0].stat.wins} ({stats[1].stat.wins})</div>
        <div><strong>LOSSES:</strong> {stats[0].stat.ot} ({stats[1].stat.ot})</div>
        <div><strong>WINS IN OT:</strong> {stats[0].stat.losses} ({stats[1].stat.losses})</div>
        <div><strong>POINTS:</strong> {stats[0].stat.pts} ({stats[1].stat.pts})</div>
        <div><strong>GOALS PER GAME:</strong> {Number(stats[0].stat.goalsPerGame).toFixed(2)} ({stats[1].stat.goalsPerGame})</div>
        <div><strong>GOALS AGAINST PER GAME:</strong> {Number(stats[0].stat.goalsAgainstPerGame).toFixed(2)} ({stats[1].stat.goalsAgainstPerGame})</div>
        <div><strong>POWER PLAY:</strong> {stats[0].stat.powerPlayPercentage}% - {stats[0].stat.powerPlayGoals} from {stats[0].stat.powerPlayOpportunities} ({stats[1].stat.powerPlayPercentage})</div>
        <div><strong>PENALTY KILL:</strong> {stats[0].stat.penaltyKillPercentage} ({stats[1].stat.penaltyKillPercentage})</div>
      </div> : <div></div>}
    </div>

  )
}

export default TeamStats;