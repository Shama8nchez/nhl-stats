import classes from './NotFound.module.css';

function NotFound() {
  return (
    <div className={classes.teams}>
      <div className={classes.div}>
        <h2 className={classes.h2}>404</h2>
        <h3 className={classes.h3}>Page not found</h3>
        <p className={classes.p}>This is not the web page you are looking for</p>
      </div>
    </div >
  )
}

export default NotFound;