import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FilmsPage from '../pages/films';
import PeoplePage from '../pages/people';
import PlanetsPage from '../pages/planet';
import App from '../App';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: '/films',
    element: <FilmsPage />
  },

  {
    path: '/people',
    element: <PeoplePage />
  },

  {
    path: '/planets',
    element: <PlanetsPage />
  }
]);

export default routes;
