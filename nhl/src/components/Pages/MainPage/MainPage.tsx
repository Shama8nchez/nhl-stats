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
          <h2 className={classes.title}>About project</h2>
          <p className={classes.description}>This educational project focuses on the National Hockey League, covering seasons, teams, and players. It is built using React and Redux Toolkit. The project provides information about various NHL seasons, including team standings and player statistics.</p>
          <Link to={"https://github.com/Shama8nchez"} className={classes.button}>GitHub</Link>
        </div>
      </div>
    </div >
  )
}

export default MainPage;