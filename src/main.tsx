import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Movies from './pages/movies/index.tsx';
import MovieDetail from './pages/movies/MovieDetail.tsx';
import Musics from './pages/musics/index.tsx';
import Outdoor from './pages/outdoor/index.tsx';
import Kitchen from './pages/kitchen/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/movie/:movieId',
    element: <MovieDetail />,
  },
  {
    path: '/musics',
    element: <Musics />,
  },
  {
    path: '/kitchen',
    element: <Kitchen />,
  },
  {
    path: '/outdoor',
    element: <Outdoor />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
