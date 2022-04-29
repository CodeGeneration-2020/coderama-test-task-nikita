import { SyntheticEvent, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useAppDispatch, useSelector } from '../../redux/configureStore';
import { filmsSelector, routineSearch } from '../../redux/slices/filmSearch';
import CommonHeader from '../../common/components/header';
import CommonCard from '../../common/components/card';
import { QUERIES } from '../../common/constants';

const MovieSearch = () => {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');

  const { isLoading, isFailed, films } = useSelector(filmsSelector);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(routineSearch(`${QUERIES.search}${searchValue}`));
  };

  const renderFilms = () => {
    if (isLoading) return <strong>Loading please wait...</strong>;
    if (isFailed) return <div>Something going wrong</div>;

    return films.map((film) => <CommonCard film={film} key={film.imdbID} />);
  };

  return (
    <>
      <CommonHeader />
      <div className="container">
        <div className="mb-2 mt-3">
          <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </div>
        <div className="row">{renderFilms()}</div>
      </div>
    </>
  );
};
export default MovieSearch;
