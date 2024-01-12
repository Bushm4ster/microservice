import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Matches</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/teams" className="navbar-link">Teams</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
