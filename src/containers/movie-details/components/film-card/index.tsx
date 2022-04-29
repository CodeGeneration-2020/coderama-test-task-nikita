import { useState, useEffect, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';
import { IFilm, IFilmRatingItem } from '../../../../common/types';
import { ISubtitlesContent } from '../types';
import '../../../../common/styles/index.css';

const subtitlesContent: ISubtitlesContent = [
  { title: 'Year', field: 'Year' },
  { title: 'Rated', field: 'Rated' },
  { title: 'Released', field: 'Released' },
  { title: 'Runtime', field: 'Runtime' },
  { title: 'Genre', field: 'Genre' },
  { title: 'Director', field: 'Director' },
  { title: 'Writer', field: 'Writer' },
  { title: 'Actors', field: 'Actors' },
  { title: 'Language', field: 'Language' },
  { title: 'Country', field: 'Country' },
  { title: 'Awards', field: 'Awards' },
  { title: 'Metascore', field: 'Metascore' },
  { title: 'Type', field: 'Type' },
  { title: 'DVD', field: 'DVD' },
  { title: 'BoxOffice', field: 'BoxOffice' },
  { title: 'Production', field: 'Production' },
  { title: 'Website', field: 'Website' },
];

const CurrentCard = ({ film }: { film: IFilm | any }) => {
  const {
    Title: title,
    Plot: plot,
    Poster: poster,
    Ratings: ratings,
    imdbID,
  } = film;

  const getIsInFav = useCallback(() => {
    const favorites = JSON.parse(localStorage.getItem('fav') || '[]');
    const inFav = favorites.findIndex((o: IFilm) => o.imdbID === imdbID);

    return inFav > -1;
  }, [imdbID]);

  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(getIsInFav());
  }, [imdbID, getIsInFav]);

  const handleAddFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('fav') || '[]');
    if (getIsInFav()) {
      favorites = favorites.filter((o: IFilm) => o.imdbID !== imdbID);
      setFav(false);
    } else {
      favorites.push(film);
      setFav(true);
    }
    localStorage.setItem('fav', JSON.stringify(favorites));
  };

  return (
    <div className="row mt-3">
      <div className="col-4">
        <Card.Img variant="top" src={poster} />
      </div>
      <div className="col-8 align-text-start">
        <Card.Title className="row align-items-center">
          <div className="col-md-auto">{title}</div>
          <div className="col-1" onClick={handleAddFavorite}>
            <Star color={fav ? 'orange' : 'black'} size={30} />
          </div>
        </Card.Title>
        {subtitlesContent.map((s) => (
          <Card.Subtitle key={s.field} className="mb-2 text-muted">{`${
            s.title
          }: ${film[s.field]}`}</Card.Subtitle>
        ))}
        <Card.Title>
          Ratings:
          {ratings
            ? ratings.map((item: IFilmRatingItem) => (
                <Card.Subtitle key={item.Value} className="mb-2 text-muted">
                  {item.Source}:{item.Value}
                </Card.Subtitle>
              ))
            : null}
          {}
        </Card.Title>
      </div>
      <Card.Body style={{ textAlign: 'start' }}>
        <Card.Text>{plot}</Card.Text>
      </Card.Body>
    </div>
  );
};

export default CurrentCard;
