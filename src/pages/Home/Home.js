import { useState, useEffect } from 'react';
import getTrendingMovies from 'components/services/get-trending';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Записуємо дані з бекенду
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        // console.log(data.results);

        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return <MovieList movies={trendingMovies} />;
};

export default Home;
