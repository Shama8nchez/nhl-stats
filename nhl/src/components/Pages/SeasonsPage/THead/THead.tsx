import { useAppSelector } from '../../../../store/store';

const THead = () => {
  const record = useAppSelector(state => state.seasons.season)
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Team</th>
        <th>Games</th>
        <th>Wins</th>
        {Number(record[0].season) > 19992000 ? <th>OT</th> : <></>}
        {Number(record[0].season) < 20052006 ? <th>Ties</th> : <></>}
        <th>Losses</th>
        <th>Points</th>
        <th>Goals</th>
      </tr>
    </thead>
  )
}

export default THead