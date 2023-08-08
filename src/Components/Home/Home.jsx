import React, { useState } from 'react'
import { Select, MenuItem, Button } from "@mui/material";
import "./Home.css"
import { useAuth0 } from '@auth0/auth0-react';
import BondCards from '../BondCards/BondCards';

const Home = () => {

    const [placeHolder, setPlaceHolder] = useState("ISIN");
    const [searchText, setSearchText] = useState(""); // eslint-disable-line
    const { isAuthenticated, user } = useAuth0();

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSelect = (e) => {
        // e.preventDefault();
        if (e.target.value === 1) {
            setPlaceHolder("ISIN");
        }
        else {
            setPlaceHolder("Company");
        }
    }

    return (
        <>

            {
                isAuthenticated ?
                    <>
                        <div className='home-container'>
                            <h3 className='heading-name'>Hi {user.name}, welcome to the Stonks App</h3>
                            <div className="search-container">
                                <Select
                                    sx={{
                                        marginRight: 1,
                                    }}
                                    defaultValue={1}
                                    onChange={handleSelect}
                                    className='select-option'
                                    variant="standard"
                                    disableUnderline
                                >
                                    <MenuItem value={1}>ISIN</MenuItem>
                                    <MenuItem value={2}>Company</MenuItem>

                                </Select>


                                <input type="search" placeholder={placeHolder} className='search-bar' onChange={handleChange} onKeyDown={handleSearch} />
                            </div>


                            <div className="search-btn">
                                <Button variant='contained'>Search</Button>
                            </div>
                        </div>
                        <BondCards />
                    </>
                    :
                    <div className="home-container">
                        <h3 className='heading-name'>Hi, welcome to the Stonks app. Login to see the status of the bonds</h3>
                    </div>



            }
        
        </>
    )
}

export default Home
