import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Team, TeamStats, nextGame } from '../types/TeamsTypes';
import { teamsAPI } from '../API/teamsAPI';

export const getTeams = createAsyncThunk(
  'teams/getTeams',
  teamsAPI.getTeams
)

export const getTeam = createAsyncThunk(
  'teams/getTeam',
  teamsAPI.getTeam
)

export const getStats = createAsyncThunk(
  'teams/getStats',
  teamsAPI.getStats
)

export const getNextGame = createAsyncThunk(
  'teams/getNextGame',
  teamsAPI.getNextGame
)

const initialState: {
  teams: Team[],
  team: Team[],
  stats: TeamStats[],
  isLoading: boolean,
  nextGame: nextGame | null
} = {
  teams: [],
  team: [],
  stats: [],
  isLoading: false,
  nextGame: null
}

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTeams.fulfilled, (state, action) => {
        state.teams = action.payload;
        state.isLoading = false
      })
      .addCase(getTeams.rejected, () => {

      })
      .addCase(getTeam.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.team = action.payload;
        state.isLoading = false
      })
      .addCase(getTeam.rejected, () => {

      })
      .addCase(getStats.pending, () => {
        
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      .addCase(getStats.rejected, () => {

      })
      .addCase(getNextGame.pending, () => {
        
      })
      .addCase(getNextGame.fulfilled, (state, action) => {
        state.nextGame = action.payload;
      })
      .addCase(getNextGame.rejected, () => {

      })
  },
  reducers: {

  }
})

export default teamsSlice.reducer