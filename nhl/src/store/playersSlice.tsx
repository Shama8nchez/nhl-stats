import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { playersAPI } from '../API/playersAPI';
import { Player } from '../types/PlayersTypes';

export const getPlayer = createAsyncThunk(
  'players/getPlayer',
  playersAPI.getPlayer
)

const initialState: {
  player: Player[],
  isLoading: boolean,
  id: number | null
} = {
  player: [],
  isLoading: false,
  id: null
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
  },
  reducers: {
    setID(state, action: PayloadAction<number>) {
      state.id = action.payload
    }
  }
})

export const {setID } = playersSlice.actions

export default playersSlice.reducer