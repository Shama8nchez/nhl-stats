import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { seasonsAPI } from '../API/seasonsAPI';
import { Record, Season } from '../types/SeasonsTypes';

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
  season: Record[],
  conference: string[],
  division: string[],
} = {
  seasons: [],
  isLoading: false,
  season: [],
  conference: [],
  division: [],
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
      .addCase(getSeason.pending, (state) => {
        state.conference = []
        state.division = []
        state.season = []
        state.isLoading = true
      })
      .addCase(getSeason.fulfilled, (state, action) => {
        state.season = action.payload;
        state.isLoading = false
      })
      .addCase(getSeason.rejected, () => {

      })
  },
  reducers: {
    setConference(state, action: PayloadAction<string[] | []>) {
      state.conference = action.payload
    },
    setDivision(state, action: PayloadAction<string[] | []>) {
      state.division = action.payload
    }
  }
})

export const { setConference, setDivision } = seasonsSlice.actions

export default seasonsSlice.reducer