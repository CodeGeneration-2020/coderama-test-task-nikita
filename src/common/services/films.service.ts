import axios from 'axios';
import { API_KEY } from '../constants';

export const requestFilms = (searchQuery: string) => {
  const url = `https://omdbapi.com/?apikey=${API_KEY}&${searchQuery}`;

  return axios.request({
    method: 'get',
    url,
  });
};
