import React, { useState } from 'react'
import { Select, MenuItem, Button } from "@mui/material";
import "./Home.css"
import { useAuth0 } from '@auth0/auth0-react';

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
        <div className='home-container'>
            {
                isAuthenticated?
                <h3 className='heading-name'>Hi {user.name}, welcome to the Bond App</h3>
                :
                <></>
            }

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


                <input type="search" placeholder={placeHolder} className='search-bar' onChange={handleChange} />
            </div>


            <div className="search-btn">
                <Button variant='contained'>Search</Button>
            </div>


        </div>
    )
}

export default Home