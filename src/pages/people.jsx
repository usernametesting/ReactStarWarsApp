import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../comps/searchBox';
import ItemList from '../comps/ItemList';
import LoadMoreButton from '../comps/LoadMoreButton';
import ItemModal from '../comps/ItemModal';
import { PeopleContext } from '../contexts/peopleContext';
import Navbar from '../comps/navbar';

const PeoplePage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [filteredPeople, setFilteredPeople] = useState([]);
    const { people, nextPage, previousPage } = useContext(PeopleContext);
    console.log(people); 

    useEffect(()=>{
        setFilteredPeople(prevFilms => [...prevFilms, ...people]);
    },[people]);

    const handleOpenModal = (person) => {
        setSelectedPerson(person);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPerson(null);
    }

    return (
        <div>
            <Navbar />
            <SearchBar filteredItems={filteredPeople} setFilteredItems={setFilteredPeople} items={people} filterKey={'name'}/>
            <ItemList items={filteredPeople} handleOpenModal={handleOpenModal} />
            <LoadMoreButton loadMore={() => nextPage()} />
            <ItemModal open={modalOpen} handleClose={handleCloseModal} item={selectedPerson} />
        </div>
    );
}

export default PeoplePage;
