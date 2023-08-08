import React, { useContext, useEffect, useState } from 'react'
import { Select, MenuItem, Button } from "@mui/material";
import "./Home.css"
import { useAuth0 } from '@auth0/auth0-react';
import appContext from '../../context/appContext';
import BondCards from '../BondCards/BondCards';
import FilterSearch from '../FilterSearch/FilterSearch';

const Home = () => {

    const [placeHolder, setPlaceHolder] = useState("ISIN");
    const [searchText, setSearchText] = useState(""); // eslint-disable-line
    const { isAuthenticated, user } = useAuth0();
    const [filterSearch, setFilterSearch] = useState([]);
    

    const context = useContext(appContext);
    const { securities, getSecurities } = context;;

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(()=>{
        getSecurities();
        // eslint-disable-next-line
    },[])

    const handleSelect = (e) => {
        // e.preventDefault();
        if (e.target.value === 1) {
            setPlaceHolder("ISIN");
        }
        else {
            setPlaceHolder("Company");
        }
    }

    const handleSearch = (e) => {
        
        if (e.key === "Enter" || e.type === "click") {

            // console.log(securities)
            const arr = [];
            if(searchText.length === 0){
                alert("Please enter something to search!");
                return;
            }
           
            else if (placeHolder === "ISIN") {
                for (let i = 0; i < securities.length; i++) {
                    if (securities[i].ISIN === searchText) {
                        arr.push(securities[i]);
                    }
                }
                setFilterSearch(arr);
                
            }
            else {
                for (let i = 0; i < securities.length; i++) {
                    if (securities[i].Issuer === searchText) {
                        arr.push(securities[i]);
                    }
                }
                setFilterSearch(arr);
            }
        }
        else return;
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
                                <Button variant='contained' onClick={handleSearch}>Search</Button>
                            </div>
                        </div>
                        <FilterSearch data={filterSearch}/>
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

export default Home;
