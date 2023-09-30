import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import getMoviesBySearch from 'components/services/search-movies';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [query, setQuery] = useState('');

  const [foundMovies, setFoundMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Записуємо дані з бекенду
    const fetchMovies = async () => {
      try {
        const data = await getMoviesBySearch(query);

        setFoundMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    query && fetchMovies();
  }, [query]);

  const handleSearch = useCallback(value => {
    setQuery(value);
  }, []);

  const movieTitle = searchParams.get('title') ?? '';

  const updateQueryString = title => {
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBar
        value={movieTitle}
        onChange={updateQueryString}
        onSubmit={handleSearch}
      />
      <MovieList movies={foundMovies} />
    </main>
  );
};

export default Movies;
