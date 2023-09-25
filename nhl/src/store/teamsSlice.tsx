import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Team } from '../types/TeamsTypes';
import { teamsAPI } from '../API/teamsAPI';

export const getTeams = createAsyncThunk(
  'teams/getTeams',
  teamsAPI.getTeams
)

const initialState: {
  teams: Team[],
  isLoading: boolean
} = {
  teams: [],
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
  },
  reducers: {

  }
})

export const { } = teamsSlice.actions

export default teamsSlice.reducer