import { useAppSelector } from "../../../../store/store"
import { Round } from "../../../../types/SeasonsTypes"
import classes from './Playoff.module.css'

const Playoff = () => {
  const rounds: Round[] = useAppSelector(state => state.seasons.rounds)

  return (
    <div>
      {rounds.length ? rounds.map((round: Round) =>
        <div key={round.names.name}>
          <h2>{round.names.name}</h2>
          {round.series.map((seria) =>
            <div key={seria.seriesNumber} className={classes.series}>

              <div className={seria.matchupTeams[0].seriesRecord.wins < seria.matchupTeams[1].seriesRecord.wins ?
                classes.team
                : classes.teamWin} style={{ textAlign: 'right' }}>
                {seria.matchupTeams[0].team.name}
              </div>

              <div>
                {seria.matchupTeams[0].seriesRecord.wins} - {seria.matchupTeams[1].seriesRecord.wins}
              </div>

              <div className={seria.matchupTeams[0].seriesRecord.wins > seria.matchupTeams[1].seriesRecord.wins ?
                classes.team
                : classes.teamWin} style={{ textAlign: 'left' }}>
                {seria.matchupTeams[1].team.name}
              </div>

            </div>
          )}

        </div>
      ) : <div>No data</div>}
    </div>
  )
}

export default Playoff