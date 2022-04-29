import { createSlice } from '@reduxjs/toolkit';
import { createRoutine } from 'redux-saga-routines';
import { IFilm } from '../../common/types';
import { RootState } from '../configure-store';

export const routineSearchFilm = createRoutine('filmcurrent');

interface IInitialState {
  isLoading: boolean;
  isLoaded: boolean;
  isFailed: boolean;
  film: IFilm | object;
}

const initialState: IInitialState = {
  isLoading: false,
  isLoaded: false,
  isFailed: false,
  film: {},
};
const filmCurrent = createSlice({
  name: 'filmcurrent',
  initialState,
  reducers: {
    filmLoading: (state) => {
      state.isLoading = true;
    },
    filmData: (state, { payload }) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isFailed = false;
      state.film = payload;
    },
    filmError: (state) => {
      state.isLoading = false;
      state.isFailed = true;
    },
  },
});

export const { filmLoading, filmData, filmError } = filmCurrent.actions;
export const filmSelector = (state: RootState) => state.film;

export default filmCurrent.reducer;
