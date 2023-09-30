import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { seasonsAPI } from '../API/seasonsAPI';
import { Record, Round, Season } from '../types/SeasonsTypes';

export const getSeasons = createAsyncThunk(
  'players/getSeasons',
  seasonsAPI.getSeasons
)

export const getSeason = createAsyncThunk(
  'players/getSeason',
  seasonsAPI.getSeason
)

export const getPlayoff = createAsyncThunk(
  'players/getPlayoff',
  seasonsAPI.getPlayoff
)

const initialState: {
  seasons: Season[],
  isLoading: boolean,
  season: Record[],
  conference: string[],
  division: string[],
  rounds: Round[]
} = {
  seasons: [],
  isLoading: false,
  season: [],
  conference: [],
  division: [],
  rounds: []
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
      .addCase(getPlayoff.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPlayoff.fulfilled, (state, action) => {
        state.rounds = action.payload;
        state.isLoading = false
      })
      .addCase(getPlayoff.rejected, () => {

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