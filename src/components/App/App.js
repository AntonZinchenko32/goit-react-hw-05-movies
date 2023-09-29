// import { AppWrapper } from './App.styled';
import { Global } from 'styles/Global.styled';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'components/Home/Home';
// import Movies from 'components/Movies/Movies';
// import MovieDetails from 'components/MovieDetails/MovieDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

const Movies = lazy(() => import('components/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Global />
      
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="movies/:movieId/cast" element={<Cast />} />
              <Route path="movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      
    </>
  );
};
