import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Season } from '../../../types/SeasonsTypes';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { useEffect, useState } from 'react';
import { getSeason, getSeasons } from '../../../store/seasonsSlice';

const SeasonsPage = () => {
  const [season, setSeason] = useState('');

  const seasons: Season[] = useAppSelector(state => state.seasons.seasons)
  const record = useAppSelector(state => state.seasons.season)
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
            {seasons.map(season => <MenuItem value={season.seasonId}>{season.seasonId.slice(0,4) + '/' + season.seasonId.slice(4)}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>

      <div>{record.length ? <div>{record[0].season}</div> : <div></div>}</div>
    </div>
  )
}

export default SeasonsPage