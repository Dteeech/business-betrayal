import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul className={`nav-list ${isMenuOpen ? 'open' : 'closed'}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/rulesroles'>Rules</Link></li>
                    {/* Ajoutez d'autres liens si nécessaire */}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
