import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper,  MovieTitle } from "./MovieList.styled";

export const MovieList = ({ movies, useDirection }) => {
  const location = useLocation();
  
  return (
    <Container>
      <ul>
        {movies.map((movie) => (
          <CardWrapper key={movie.id}>
            <Link to={`${useDirection}${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title ?? movie.name}</MovieTitle>
            </Link>
          </CardWrapper>
        ))}
      </ul>
    </Container>
  );
};