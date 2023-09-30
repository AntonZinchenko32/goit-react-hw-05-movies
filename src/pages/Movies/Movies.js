import { useSearchParams } from "react-router-dom";
import getMoviesBySearch from "components/services/api";
import { SearchBar } from "components/SearchBar/SearchBar";
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
      <SearchBar value={movieTitle} onSubmit={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </main>
  );
};

export default Movies;