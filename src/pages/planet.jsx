import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../comps/searchBox';
import ItemList from '../comps/ItemList';
import LoadMoreButton from '../comps/LoadMoreButton';
import ItemModal from '../comps/ItemModal';
import { PlanetContext } from '../contexts/planetContext';
import Navbar from '../comps/navbar';

const PlanetsPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const [filteredPlanets, setFilteredPlanets] = useState([]);
    const { planets, nextPage, previousPage } = useContext(PlanetContext);

    useEffect(() => {
        setFilteredPlanets(prevPlanets => [...prevPlanets, ...planets]);
    }, [planets]);

    
    const handleOpenModal = (planet) => {
        setSelectedPlanet(planet);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPlanet(null);
    }

    return (
        <div>
            <Navbar />
            <SearchBar filteredItems={filteredPlanets} setFilteredItems={setFilteredPlanets} items={planets} filterKey={'name'} />
            <ItemList items={filteredPlanets} handleOpenModal={handleOpenModal} />
            <LoadMoreButton loadMore={() => nextPage()} />
            <ItemModal open={modalOpen} handleClose={handleCloseModal} item={selectedPlanet} />
        </div>
    );
}

export default PlanetsPage;
