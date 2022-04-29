import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useSelector } from '../../redux/configure-store';
import {
  filmSelector,
  routineSearchFilm,
} from '../../redux/slices/film-current';
import CommonHeader from '../../common/components/header';
import { FilmCard } from './components/';
import { QUERIES } from '../../common/constants';

const MovieDetails = () => {
  const dispatch = useAppDispatch();

  const params = useParams();
  const { filmId } = params;

  const { isLoading, isFailed, film } = useSelector(filmSelector);

  useEffect(() => {
    dispatch(routineSearchFilm(`${QUERIES.film}${filmId}`));
  }, [dispatch, filmId]);

  const renderFilms = () => {
    if (isLoading) return <strong>Loading please wait...</strong>;
    if (isFailed) return <div>Something going wrong</div>;

    return <FilmCard film={film} />;
  };

  return (
    <>
      <CommonHeader />
      <div className="container">{renderFilms()}</div>
    </>
  );
};
export default MovieDetails;
