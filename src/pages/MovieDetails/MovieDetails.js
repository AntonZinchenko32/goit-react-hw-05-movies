import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import getMovieById from 'components/services/get-movie-details';
import { useState, useEffect } from 'react';
import { MovieDetailsBox, MovieImage } from './MovieDetails.styled';

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
        console.log(data);
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
              width={250}
              alt="poster"
            />
            <div>
              {movie && (
                <h2>
                  Movie - {movie.title} - {movieId}
                </h2>
              )}
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus sunt excepturi nesciunt iusto dignissimos assumenda ab
                quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
                natus reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Impedit suscipit quisquam incidunt
                commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
              </p>
            </div>
          </MovieDetailsBox>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
