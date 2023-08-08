import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const logoImageUrl = 'https://pbs.twimg.com/profile_images/1257735526066589697/6HfW0Ysi_400x400.jpg';


const Navbar = () => {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/">
                    <button className="logo">
                        <img src={logoImageUrl} alt="Logo" />
                    </button>
                </Link>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <i className='fa fa-bars'></i>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {isAuthenticated ?
                            <>
                                <li>
                                    <Link to="/securities">Securities</Link>
                                </li>
                                <li>
                                    <Link to="/trades">Trades</Link>
                                </li>
                                <li>
                                    <Link to="/pmi">Post Maturity Issues</Link>
                                </li>
                            </>
                            :
                            <></>

                        }

                        {/* <li>
                            <Link to="/about">About</Link>
                        </li> */}

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
