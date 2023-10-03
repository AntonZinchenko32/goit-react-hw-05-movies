import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import getMoviesBySearch from 'components/services/search-movies';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { NotFoundMessage } from './Movies.styled';

const Movies = () => {
  const [queryForSubmit, setQueryForSubmit] = useState('');

  const [foundMovies, setFoundMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('search') ?? '';

  const ref = useRef(query);

  // Записуємо дані з бекенду
  const fetchMovies = useCallback(async searchText => {
    setIsLoading(true);
    try {
      const data = await getMoviesBySearch(searchText);

      setFoundMovies(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    queryForSubmit && fetchMovies(queryForSubmit);
  }, [queryForSubmit, fetchMovies]);

  useEffect(() => {
    ref.current && fetchMovies(ref.current);
  }, [fetchMovies]);

  const handleSearch = useCallback(value => {
    setQueryForSubmit(value);
    setFoundMovies(null)
  }, []);

  const updateQueryString = search => {
    const nextParams = search !== '' ? { search } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBar
        value={query}
        onChange={updateQueryString}
        onSubmit={handleSearch}
      />
      {isLoading && <Loader />}
      {foundMovies && foundMovies.length !== 0 ? (
        <MovieList movies={foundMovies} useDirection="" />
      ) : (
        foundMovies !== null && (
          <NotFoundMessage>
            Couldn't find any movies for your request, sorry
          </NotFoundMessage>
        )
      )}
    </main>
  );
};

export default Movies;
