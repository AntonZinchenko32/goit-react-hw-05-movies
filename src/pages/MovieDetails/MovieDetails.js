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
          <BackLink to={backLinkHref}>Back to movies</BackLink>
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
                <Info>{movie.genres.map(genre => genre.name + ' ')}</Info>
              </InfoBox>
              <InfoBox>
                <b>Overview</b>
                <Info>{movie.overview}</Info>
              </InfoBox>
            </MovieInfo>
          </MovieDetailsBox>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
