import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PlanetContext = createContext();

export const PlanetContextProvider = ({ children }) => {
    const [planets, setPlanets] = useState([]);
    const [page, setPage] = useState(1); 

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`);
                console.log(response.data);
                setPlanets(prevFilms => [...prevFilms, ...response.data.results]);
            } catch (error) {
                alert("there is no any more data");
            }
        };

        fetchPlanet();
    }, [page]);

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <PlanetContext.Provider value={{ planets, nextPage, previousPage }}>
            {children}
        </PlanetContext.Provider>
    );
};
