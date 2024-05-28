import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/3249/3249043.png" alt="Parapharmacy Store Logo" /></Link>
                    
                </div>
                
                <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                </nav>
                
            </div>
        </header>
    );
};

export default Header;
