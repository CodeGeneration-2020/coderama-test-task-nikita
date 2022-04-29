import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ICard } from './types';
import '../../styles/index.css';

const CommonCard = ({ film }: ICard) => {
  const navigate = useNavigate();

  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = film;

  const handleDetailsClick = () => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
      <Card>
        <Card.Img variant="top" src={poster} className="img" />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Type: {type}
          </Card.Subtitle>
          <Card.Text>Year: {year}</Card.Text>
          <Button
            className="w-100"
            onClick={handleDetailsClick}
            variant="primary"
          >
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommonCard;
