import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Team } from '../types/TeamsTypes';
import { teamsAPI } from '../API/teamsAPI';

export const getTeams = createAsyncThunk(
  'teams/getTeams',
  teamsAPI.getTeams
)

export const getTeam = createAsyncThunk(
  'teams/getTeam',
  teamsAPI.getTeam
)

const initialState: {
  teams: Team[],
  team: Team | null,
  id: number | null,
  isLoading: boolean
} = {
  teams: [],
  team: null,
  id: null,
  isLoading: false
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
        state.teams = action.payload;
        state.isLoading = false
      })
      .addCase(getTeam.rejected, () => {

      })
  },
  reducers: {
    setID(state, action: PayloadAction<number>) {
      state.id = action.payload
    }
  }
})

export const {setID } = teamsSlice.actions

export default teamsSlice.reducer