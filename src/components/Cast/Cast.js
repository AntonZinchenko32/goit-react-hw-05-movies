import getMovieCastInfo from 'components/services/get-movie-cast-info';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, ListItem, InfoBox, Image, NotFoundMessage } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';

  useEffect(() => {
    // Записуємо дані з бекенду
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCastInfo(movieId);
        setCast(data.cast.slice(0, 10));
        // console.log(data)
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchMovie();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {cast && cast.length !== 0 ? (
        <ul>
          {cast.map(actor => (
            <ListItem key={actor.id}>
              <Image
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                width={120}
                alt="poster"
              />
              <InfoBox>
                <b>Actor: {actor.name}</b>
                <span>Character: {actor.character}</span>
              </InfoBox>
            </ListItem>
          ))}
        </ul>
      ) : (
        cast !== null && (
          <NotFoundMessage>Cast is not avaliable</NotFoundMessage>
        )
      )}
    </Container>
  );
};

export default Cast;
