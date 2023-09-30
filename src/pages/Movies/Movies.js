import { useSearchParams } from "react-router-dom";
// import getMoviesBySearch from "components/services/api";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MovieList } from "components/MovieList/MovieList";

import { getProducts } from "components/services/fakeAPI";

const Movies = () => {

  const movies =  getProducts();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get("name") ?? "";

  const visibleMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(movieTitle.toLowerCase())
  );

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBar value={movieTitle} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </main>
  );
};

export default Movies;