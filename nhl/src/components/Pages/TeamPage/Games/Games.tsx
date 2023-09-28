import { useAppSelector } from "../../../../store/store";
import classes from './Games.module.css';
import { nextGame } from "../../../../types/TeamsTypes";
import Logo from "../../../UI/Logo/Logo";
import logos from "../../../../assets/logo";

function Games() {
  const nextGame: nextGame | null = useAppSelector(state => state.teams.nextGame)

  return (
    <div className={classes.gameInfo}>
      <h2>NEXT GAME</h2>
      {nextGame ?
        <div className={classes.content}>
          <div>
            <h6>{nextGame?.dates[0].games[0].venue.name}, {nextGame?.dates[0].date}</h6>
            <div className={classes.game}>
              <Logo logo={logos[nextGame?.dates[0].games[0].teams.home.team.name]} size="small" />
              <div className={classes.score}>- : -</div>
              <Logo logo={logos[nextGame?.dates[0].games[0].teams.away.team.name]} size="small" />
            </div>
          </div>

        </div>
        : <div></div>}
      <h6></h6>

    </div>
  )
}

export default Games;