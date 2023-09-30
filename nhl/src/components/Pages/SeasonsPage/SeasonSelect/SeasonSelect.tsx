import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Season } from '../../../../types/SeasonsTypes';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { useEffect, useState } from 'react';
import { getPlayoff, getSeason, getSeasons } from '../../../../store/seasonsSlice';

const SeasonsSelect = () => {
  const [season, setSeason] = useState('');
  const seasons: Season[] = useAppSelector(state => state.seasons.seasons)
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
    dispatch(getPlayoff(season))
  }, [season])

  return (
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
            {seasons.map(season => <MenuItem key={season.seasonId} value={season.seasonId}>{season.seasonId.slice(0, 4) + '/' + season.seasonId.slice(4)}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
  )
}

export default SeasonsSelect