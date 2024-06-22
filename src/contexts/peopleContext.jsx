import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1); 

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
                setPeople(prevFilms => [...prevFilms, ...response.data.results]);
            } catch (error) {
                alert("there is no any more data");
            }
        };

        fetchPeople();
    }, [page]);

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const previousPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <PeopleContext.Provider value={{ people, nextPage, previousPage }}>
            {children}
        </PeopleContext.Provider>
    );
};
