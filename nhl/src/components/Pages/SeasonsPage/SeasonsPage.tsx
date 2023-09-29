import { Record } from '../../../types/SeasonsTypes';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { useEffect } from 'react';
import { setConference, setDivision } from '../../../store/seasonsSlice';
import Standings from './Standings/Standings';
import StandingsWithDivisions from './Standings/StandingsWithDivisions';
import StandingsWithConferences from './Standings/StandingsWithConferences';
import SeasonsSelect from './SeasonSelect/SeasonSelect';
import Loader from '../../UI/Loader/Loader';

const SeasonsPage = () => {
  const record: Record[] = useAppSelector(state => state.seasons.season)
  const conference = useAppSelector(state => state.seasons.conference)
  const division = useAppSelector(state => state.seasons.division)
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.seasons.isLoading)

  useEffect(() => {
    let setC: Set<string> = new Set();
    let setD: Set<string> = new Set();
    let conference: string[] = []
    let division: string[] = []

    record.forEach((item: Record) => {
      if (item.conference) setC.add(item.conference.name)
      if (item.division) setD.add(item.division.name)
    })
    if (setC.size) setC.forEach(item => conference.push(item))
    if (setD.size) setD.forEach(item => division.push(item))

    dispatch(setConference(conference))
    dispatch(setDivision(division))
  }, [record])

  return (
    <div>
      <SeasonsSelect />
      <div>
        <h1>Standings</h1>

        {isLoading ?
          <Loader /> :
          <div>
            {record.length ?
              <div>
                {conference.length ?
                  <StandingsWithConferences /> :
                  <div>
                    {division.length ?
                      <StandingsWithDivisions /> :
                      <Standings />
                    }
                  </div>
                }
              </div> :
              <div>
              </div>
            }
          </div>
        }
      </div >
    </div >
  )
}

export default SeasonsPage