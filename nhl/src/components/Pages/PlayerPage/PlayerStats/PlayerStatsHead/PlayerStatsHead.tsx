function PlayerStatsHead(props: {position: string}) {
  return (

    <thead>
      {
        props.position === 'Goalie' ?
          <tr>
            <th>Season</th>
            <th>League</th>
            <th>Team</th>
            <th>Games</th>
            <th>GA</th>
            <th>GAA</th>
            <th>Save, %</th>
          </tr> :
          <tr>
            <th>Season</th>
            <th>League</th>
            <th>Team</th>
            <th>Games</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Points</th>
            <th>+/-</th>
            <th>Penalty minutes</th>
          </tr>
      }
    </thead>
  )
}

export default PlayerStatsHead;