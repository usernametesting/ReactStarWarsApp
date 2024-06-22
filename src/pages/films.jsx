import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../comps/searchBox';
import ItemList from '../comps/ItemList';
import LoadMoreButton from '../comps/LoadMoreButton';
import ItemModal from '../comps/ItemModal';
import { FilmContext } from '../contexts/filmContext';
import Navbar from '../comps/navbar';

const FilmsPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [filteredFilms, setFilteredFilms] = useState([]);
    const { films, nextPage, previousPage } = useContext(FilmContext);


    useEffect(() => {
        setFilteredFilms(films);
    }, []);



    const handleOpenModal = (film) => {
        setSelectedFilm(film);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedFilm(null);
    }

    return (
        <div>
            <Navbar />
            <SearchBar filteredItems={filteredFilms} setFilteredItems={setFilteredFilms} items={films} filterKey={'title'} />
            <ItemList items={filteredFilms} handleOpenModal={handleOpenModal} />
            <LoadMoreButton loadMore={() => nextPage()} />
            <ItemModal open={modalOpen} handleClose={handleCloseModal} item={selectedFilm} />
        </div>
    );
}

export default FilmsPage;
