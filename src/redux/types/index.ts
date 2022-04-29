import { IFilm } from '../../common/types';

export interface IFilmSearchInitialState {
  isLoading: boolean;
  isLoaded: boolean;
  isFailed: boolean;
  films: IFilm[];
}
