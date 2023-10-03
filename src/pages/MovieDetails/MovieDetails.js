import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import getMovieById from 'components/services/get-movie-details';
import { useState, useEffect } from 'react';
import {
  MovieDetailsBox,
  MovieImage,
  MovieInfo,
  Popularity,
  InfoBox,
  Info,
  AdditionalInfo,
  StyledLink,
  ListItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const defaultImg =
    'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';

  const { movieId } = useParams();

  useEffect(() => {
    // Записуємо дані з бекенду
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(movieId);

        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    movieId && fetchMovie();
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      {movie && (
        <>
          <BackLink to={backLinkHref}>Back to movies list</BackLink>
          <MovieDetailsBox>
            <MovieImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt="poster"
            />
            <MovieInfo>
              {movie && (
                <h2>
                  {movie.title} (
                  {movie.release_date
                    ? movie.release_date.slice(0, 4)
                    : 'release year unknown'}
                  )
                </h2>
              )}
              <Popularity>
                <b>Popularity:</b>
                <Info> {movie.popularity}</Info>
              </Popularity>
              <InfoBox>
                <b>Genres:</b>
                {movie.genres.length !== 0 ? (
                  <Info>{movie.genres.map(genre => genre.name + ' ')}</Info>
                ) : (
                  <span>(No genres info)</span>
                )}
              </InfoBox>
              <InfoBox>
                <b>Overview</b>
                {movie.overview ? (
                  <Info>{movie.overview}</Info>
                ) : (
                  <span>(There are no overview, sorry)</span>
                )}
              </InfoBox>
            </MovieInfo>
          </MovieDetailsBox>
          <AdditionalInfo>
            <h2>Additional information</h2>
            <ul>
              <ListItem>
                <StyledLink to="cast" state={{ from: backLinkHref }}>
                  -- Cast --
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="reviews" state={{ from: backLinkHref }}>
                  -- Reviews --
                </StyledLink>
              </ListItem>
            </ul>
          </AdditionalInfo>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
