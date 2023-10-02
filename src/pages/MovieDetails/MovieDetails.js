import { useParams, useLocation} from "react-router-dom";
import { BackLink } from "components/BackLink/BackLink";
import getMovieById from "components/services/get-movie-details";
import { useState, useEffect } from "react";


const MovieDetails = () => {

  const [movie, setMovie] = useState(null)

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
  const backLinkHref = location.state?.from ?? "/movies";
  

  return (
      <main>
        <BackLink to={backLinkHref}>Back to movies search</BackLink>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <div>
          {movie && <h2>
            Movie - {movie.title} - {movieId}
          </h2>}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
            a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
            atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
            praesentium ipsum quos unde voluptatum?
          </p>
        </div>
      </main>
  );
};

export default MovieDetails;
