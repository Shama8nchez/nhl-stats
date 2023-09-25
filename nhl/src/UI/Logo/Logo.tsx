import classes from './Logo.module.css'

const Logo = (props: {logo: string}) => {
  return (
    <img src={props.logo} alt="team_logo" className={classes.logo} />
  )
}

export default Logo