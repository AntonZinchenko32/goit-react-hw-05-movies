import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import getMoviesBySearch from 'components/services/search-movies';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [queryForSubmit, setQueryForSubmit] = useState('');

  const [foundMovies, setFoundMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();


  const query = searchParams.get('search') ?? '';

  const ref = useRef(query)


  // Записуємо дані з бекенду
    const fetchMovies = useCallback(async searchText => {
      try {
        const data = await getMoviesBySearch(searchText);

        setFoundMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    },[]) 

  useEffect(() => {
    queryForSubmit && fetchMovies(queryForSubmit);
  }, [queryForSubmit, fetchMovies]);

  useEffect(() => {
    ref.current && fetchMovies(ref.current);
  }, [fetchMovies]);



  const handleSearch = useCallback(value => {
    setQueryForSubmit(value);
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
      <MovieList movies={foundMovies} />
    </main>
  );
};

export default Movies;
