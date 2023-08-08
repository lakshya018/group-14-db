import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    Stonks App
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
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        {
                            isAuthenticated ?
                                <li>
                                    <button className="auth-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                </li> :
                                <li>
                                    <button className='auth-btn' onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                        }
                    </ul>
                </div>


            </div>
        </nav>

    );
}

export default Navbar;