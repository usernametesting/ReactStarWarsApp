import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FilmContextProvider } from './contexts/filmContext.jsx'
import { PeopleContextProvider } from './contexts/peopleContext.jsx'
import { PlanetContextProvider } from './contexts/planetContext.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilmContextProvider>
    <PeopleContextProvider>
      <PlanetContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </PlanetContextProvider>
    </PeopleContextProvider>
  </FilmContextProvider>
)
