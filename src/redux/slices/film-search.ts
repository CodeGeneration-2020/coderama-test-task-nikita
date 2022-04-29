import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';
import { RootState } from '../configure-store';
import { IFilmSearchInitialState } from '../types';

export const routineSearch = createRoutine('filmsearch');

const initialState: IFilmSearchInitialState = {
  isLoading: false,
  isLoaded: false,
  isFailed: false,
  films: [],
};

const filmSearch = createSlice({
  name: 'filmsearch',
  initialState,
  reducers: {
    filmsLoading: (state) => {
      state.isLoading = true;
    },
    filmsData: (state, { payload }) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isFailed = false;
      state.films = payload.Search;
    },
    filmsError: (state) => {
      state.isLoading = false;
      state.isFailed = true;
    },
  },
});

export const { filmsLoading, filmsData, filmsError } = filmSearch.actions;
export const filmsSelector = (state: RootState) => state.films;

export default filmSearch.reducer;
