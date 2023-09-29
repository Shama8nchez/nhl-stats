import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Record, Season } from '../../../types/SeasonsTypes';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { useEffect, useState } from 'react';
import { getSeason, getSeasons, setConference, setDivision } from '../../../store/seasonsSlice';
import Standings from './Standings/Standings';
import StandingsWithDivisions from './Standings/StandingsWithDivisions';
import StandingsWithConferences from './Standings/StandingsWithConferences';

const SeasonsPage = () => {
  const [season, setSeason] = useState('');

  const seasons: Season[] = useAppSelector(state => state.seasons.seasons)
  const record: Record[] = useAppSelector(state => state.seasons.season)
  const conference = useAppSelector(state => state.seasons.conference)
  const division = useAppSelector(state => state.seasons.division)
  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    setSeason(event.target.value as string);
  };

  useEffect(() => {
    if (!seasons.length)
      dispatch(getSeasons())
  }, [])

  useEffect(() => {
    dispatch(getSeason(season))
  }, [season])

  useEffect(() => {
    let setC: Set<string> = new Set();
    let setD: Set<string> = new Set();
    let conference: string[] = []
    let division: string[] = []

    record.forEach((item: Record) => {
      if (item.conference) setC.add(item.conference.name)
    })
    if (setC.size) setC.forEach(item => conference.push(item))


    record.forEach((item: { division: { name: string } }) => {
      if (item.division) setD.add(item.division.name)
    })
    if (setD.size) setD.forEach(item => division.push(item))

    dispatch(setConference(conference))
    dispatch(setDivision(division))
  }, [record])

  return (
    <div>
      <Box sx={{ maxWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={season}
            label="Season"
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                },
              },
            }}
          >
            {seasons.map(season => <MenuItem value={season.seasonId}>{season.seasonId.slice(0, 4) + '/' + season.seasonId.slice(4)}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>

      <div>
        <h1>Standings</h1>
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
      </div >
    </div >
  )
}

export default SeasonsPage