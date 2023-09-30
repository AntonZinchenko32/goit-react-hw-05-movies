import { useSearchParams } from "react-router-dom";
import getMoviesBySearch from "components/services/api";
import { SearchBox } from "components/SearchBox/SearchBox";
import { MovieList } from "components/MovieList/MovieList";


const Movies = () => {

  const movies =  getMoviesBySearch('sex');
  
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get("title") ?? "";

  const visibleMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(movieTitle.toLowerCase())
  );

  const updateQueryString = (title) => {
    const nextParams = title !== "" ? { title } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={movieTitle} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </main>
  );
};

export default Movies;