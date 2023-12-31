// import { AppWrapper } from './App.styled';
import { Global } from 'styles/Global.styled';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';


import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';

const Movies = lazy(() => import('pages/Movies/Movies')); 
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
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
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={ <Navigate to="/" /> } />
        </Route>
      </Routes>
    </>
  );
};
