import getMovieCastInfo from 'components/services/get-movie-cast-info';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ListItem, InfoBox, Image } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';

  useEffect(() => {
    // Записуємо дані з бекенду
    const fetchMovie = async () => {
      try {
        const data = await getMovieCastInfo(movieId);
        setCast(data.cast.slice(0, 10));
      } catch (error) {
      }
    };
    movieId && fetchMovie();
  }, [movieId]);

  return (
    <main>
      {cast && cast.length !== 0 ? <ul>
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
      </ul> : <h2>(The cast is unknown)</h2>}
    </main>
  );
};

export default Cast;
