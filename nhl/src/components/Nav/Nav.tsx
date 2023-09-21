import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {
  return (
    <nav className={classes.nav}>
      <NavLink to="/about" className={({ isActive }) => isActive ? `${classes.navItem} ${classes.active}` : classes.navItem}> About</NavLink>
      <NavLink to="/teams" className={({ isActive }) => isActive ? `${classes.navItem} ${classes.active}` : classes.navItem}>Teams</NavLink>
      <NavLink to="/drivers" className={({ isActive }) => isActive ? `${classes.navItem} ${classes.active}` : classes.navItem}> Drivers</NavLink>
      <NavLink to="/seasons" className={({ isActive }) => isActive ? `${classes.navItem} ${classes.active}` : classes.navItem}>Seasons</NavLink>
    </nav>
  )
}

export default Nav;