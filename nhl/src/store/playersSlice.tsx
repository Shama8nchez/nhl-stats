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
  isPlayerLoading: boolean,
  isStatsLoading: boolean,
  id: number | null,
  stats: Stats[]
} = {
  player: [],
  isPlayerLoading: true,
  isStatsLoading: true,
  id: null,
  stats: []
}

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPlayer.pending, (state) => {
        state.isPlayerLoading = true
      })
      .addCase(getPlayer.fulfilled, (state, action) => {
        state.player = action.payload;
        state.isPlayerLoading = false
      })
      .addCase(getPlayer.rejected, () => {

      })
      .addCase(getStats.pending, (state) => {
        state.isStatsLoading = true
      })
      .addCase(getStats.fulfilled, (state, action) => {
        state.stats = action.payload;
        state.isStatsLoading = false
      })
      .addCase(getStats.rejected, () => {

      })
  },
  reducers: {
    setID(state, action: PayloadAction<number>) {
      state.id = action.payload
    },
    setLoadersTrue(state, action: PayloadAction<boolean>) {
      state.isPlayerLoading = action.payload
      state.isStatsLoading = action.payload
    }
  }
})

export const {setID, setLoadersTrue } = playersSlice.actions

export default playersSlice.reducer