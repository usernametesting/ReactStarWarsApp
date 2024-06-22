import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FilmContext = createContext();

export const FilmContextProvider = ({ children }) => {
    const [films, setFilms] = useState([]);
    const [page, setPage] = useState(1); 

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/films/?page=${page}`);
                setFilms(prevFilms => [...prevFilms, ...response.data.results]);
            } catch (error) {
                alert("there is no any more data");
            }
        };

        fetchFilms();
    }, [page]);

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <FilmContext.Provider value={{ films, nextPage, previousPage }}>
            {children}
        </FilmContext.Provider>
    );
};
