import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="logo">
                    Bond App
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <i className='fa fa-bars'></i>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/trade">Trades</Link>
                        </li>
                        <li>
                            <Link to="/securities">Securities</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;