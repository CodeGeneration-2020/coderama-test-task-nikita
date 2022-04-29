import React from 'react';
import CommonCard from '../../common/components/card';
import CommonHeader from '../../common/components/header';
import { IFilm } from '../../common/types';

const MovieFavorites = () => {
  const renderFavoriteFilms = () => {
    const favoriteFilms = JSON.parse(localStorage.getItem('fav') || '[]');

    if (favoriteFilms.length !== 0)
      return favoriteFilms.map((film: IFilm, index: number) => (
        <CommonCard film={film} key={`coption-${index}`} />
      ));

    return <h1>No favorite films</h1>;
  };

  return (
    <>
      <CommonHeader />
      <div className="container">
        <h1>Favorite Films</h1>
        <div className="row pt-2">{renderFavoriteFilms()}</div>
      </div>
    </>
  );
};
export default MovieFavorites;
