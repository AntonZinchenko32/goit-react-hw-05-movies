import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper,  MovieTitle } from "./MovieList.styled";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      <ul>
        {movies.map((movie) => (
          <CardWrapper key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title} ({movie.release_date.slice(0,4)})</MovieTitle>
            </Link>
          </CardWrapper>
        ))}
      </ul>
    </Container>
  );
};