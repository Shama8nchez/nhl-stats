import classes from './Logo.module.css'

const Logo: React.FC<{logo: string}> = (props) => {
  return (
    <img src={props.logo} alt="team_logo" className={classes.logo} />
  )
}

export default Logo