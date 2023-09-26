import classes from './Logo.module.css'

const Logo: React.FC<{logo: string, size: string}> = (props) => {
  return (
    <img src={props.logo} alt="team_logo" className={classes[props.size]} />
  )
}

export default Logo