import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { playersAPI } from '../API/playersAPI';
import { Player, Stats } from '../types/PlayersTypes';

export const getPlayer = createAsyncThunk(
  'players/getPlayer',
  playersAPI.getPlayer
)

export const getStats = createAsyncThunk(
  'players/getStats',
  playersAPI.getStats
)

const initialState: {
  player: Player[],
  isLoading: boolean,
  id: number | null,
  stats: Stats[]
} = {
  player: [],
  isLoading: false,
  id: null,
  stats: []
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPlayer.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state.player = action.payload;
        state.isLoading = false
      })
      .addCase(getPlayer.rejected, () => {

      })
      .addCase(getStats.pending, () => {

      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      })
      .addCase(getStats.rejected, () => {

      })
  },
  reducers: {
    setID(state, action: PayloadAction<number>) {
      state.id = action.payload
    }
  }
})

export const {setID } = playersSlice.actions

export default playersSlice.reducer