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
        
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <main>
      {trendingMovies.length !== 0 && (
        <>
          <h1>Trending today</h1>
          <MovieList movies={trendingMovies} useDirection="/movies/" />
        </>
      )}
    </main>
  );
};

export default Home;
