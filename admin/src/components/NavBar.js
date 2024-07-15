import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>K-DASH</div>
            <ul className='navbar-menu'>
                <li><a href="/">Acceuil</a></li>
                <li><a href="/">Contact</a></li>
                <li><Link to="/connexion">Connexion</Link></li>
            </ul>

        </div>
    );
};

export default NavBar;