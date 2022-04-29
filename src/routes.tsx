import { Route, Routes as MainRoutes } from 'react-router';
import MovieDetails from './containers/movie-details';
import MovieFavorites from './containers/movie-favorites';
import MovieSearch from './containers/movie-search';

const Routes = () => (
  <MainRoutes>
    <Route path="/" element={<MovieSearch />} />
    <Route path="/details">
      <Route path=":filmId" element={<MovieDetails />} />
    </Route>
    <Route path="/details/:filmId" element={<MovieDetails />} />
    <Route path="/favorites" element={<MovieFavorites />} />
  </MainRoutes>
);

export default Routes;
