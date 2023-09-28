import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import teamsReducer from './teamsSlice'
import playersReducer from './playersSlice';
import seasonsReducer from './seasonsSlice';

const store = configureStore({
  reducer: {
    teams: teamsReducer,
    players: playersReducer,
    seasons: seasonsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;