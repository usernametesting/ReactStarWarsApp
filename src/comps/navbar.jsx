import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
    return (
        <div>
            <img
                style={{ width: '150px', height: '150px', borderRadius: '50%',marginBottom:'50px !important', margin: '0 auto', display: 'block' }}
                src="https://th.bing.com/th?id=OIP.etEOAcyNZhHd3RruaYQcPgHaGO&w=272&h=229&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2"
                alt="Star Wars Logo"
                className='navbar-logo'
            />            <div className='navbar-div'>
                <Link to="/" >Main Page</Link>
                <Link to="/films">Films</Link>
                <Link to="/people">People</Link>
                <Link to="/planets">Planets</Link>
            </div>
        </div>
    );
}

export default Navbar;