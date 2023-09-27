import classes from './MainPage.module.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className={classes.teams}>
      <div>
        <div className={classes.container}>
          <h2 className={classes.title}>About API</h2>
          <p className={classes.description}>This application uses NHL Stats API. Press the button to get more information about it.</p>
          <Link to={"https://gitlab.com/dword4/nhlapi"} className={classes.button}>More information</Link>
        </div>
      </div>
      
      <div className={classes.currentSeason}>
        <div className={classes.container}>
          <h2 className={classes.title}>Current season</h2>
          <p className={classes.description}>Get information about 2023 Formula One season</p>
          <Link to={"https://rapidapi.com/kpeshterski/api/fia-formula-1-championship-statistics/"} className={classes.button}>More information</Link>
        </div>
      </div>
    </div >
  )
}

export default MainPage;