import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import getMoviesBySearch from 'components/services/api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Записуємо дані з бекенду
    const fetchMovies = async () => {
      try {
        const data = await getMoviesBySearch(query);
        console.log(data.results);

        setMovies(prevState => [...prevState, ...data.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    query && fetchMovies();
  }, [query]);

  const handleSearch = useCallback(value => {
    setQuery(value);
    setMovies([]);
  }, []);

  // Скопійована логіка **********************************************************
  // const movies =  getProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('title') ?? '';

  // const visibleMovies = movies.filter(movie =>
  //   movie.title.toLowerCase().includes(movieTitle.toLowerCase())
  // );

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
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
