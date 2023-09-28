import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { seasonsAPI } from '../API/seasonsAPI';
import { Season } from '../types/SeasonsTypes';

export const getSeasons = createAsyncThunk(
  'players/getSeasons',
  seasonsAPI.getSeasons
)

export const getSeason = createAsyncThunk(
  'players/getSeason',
  seasonsAPI.getSeason
)

const initialState: {
  seasons: Season[],
  isLoading: boolean,
  season: any
} = {
  seasons: [],
  isLoading: false,
  season: []
}

export const seasonsSlice = createSlice({
  name: 'seasons',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSeasons.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSeasons.fulfilled, (state, action) => {
        state.seasons = action.payload;
        state.isLoading = false
      })
      .addCase(getSeasons.rejected, () => {
        console.log('reject')
      })
      .addCase(getSeason.pending, () => {

      })
      .addCase(getSeason.fulfilled, (state, action) => {
        state.season = action.payload;

      })
      .addCase(getSeason.rejected, () => {

      })
  },
  reducers: {
    /* setID(state, action: PayloadAction<number>) {
      state.id = action.payload
    } */
  }
})

export const {  } = seasonsSlice.actions

export default seasonsSlice.reducer