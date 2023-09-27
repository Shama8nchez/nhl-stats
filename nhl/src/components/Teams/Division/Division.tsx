
import classes from './Division.module.css';
import TeamCard from "../Team/TeamCard";
import React from 'react';
import { Team } from '../../../types/TeamsTypes';

const Division: React.FC<{division: string, teams: Team[]}> = (props) =>  {
  return (
    <div className={classes.division}>
      <h3>{props.division} division</h3>
      {props.teams.filter(team => team.division.name === props.division).map(team =>
        <TeamCard team={team} key={team.id} />
      )}
    </div>
  )
}

export default Division;