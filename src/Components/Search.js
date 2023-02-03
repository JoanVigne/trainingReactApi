import React, { useState } from 'react';
import './search.css';
import countriesData from '../assets/countries.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
/* import { Link } from 'react-router-dom'; */

const Search = () => {

    const countries = Object.entries(countriesData);
    const searchIcon = <FontAwesomeIcon icon={faSearch} className="icon" />

    let [noFilter, setFilter] = useState("");
    let [display, setDisplay] = useState("displayNone")

    let [valueInput, setValueInput] = useState("Type a country");
    function handleChange(event) {
        setFilter(event.target.value);
        setValueInput(event.target.value);

        if (event.target.value === "") {
            setDisplay("displayNone")
        }
        else {
            setDisplay("");
        }

    }

    function choice(thisChoice) {
        setDisplay("displayNone");
        setValueInput(thisChoice);
    }

    /*     function startResult(link) {
            props.cntryName(link)
        } */
    return (
        <div id='searchContainer'>
            <form action="">
                <div className='searchGroup'>
                    <input type="text" placeholder='Chose a country' value={valueInput} onChange={handleChange} onClick={() => setValueInput("")} />
                    <Link to={`/${valueInput}`}>{searchIcon}</Link >
                </div>
                <ul className={display}>{countries.filter(country => country[1].name.toLowerCase().includes(`${noFilter}`)).map((country, index) => {
                    return (
                        <li key={index} onClick={() => choice(country[1].name)}>{country[1].name}</li>

                    )
                })
                }</ul>
            </form >
            <div className='fullList'>
                <h3>List of all the countries:</h3>
                {countriesData.map((country, index) => {
                    return (
                        <li key={index} onClick={() => setValueInput(country.name)
                        }>
                            {country.name}
                        </li>
                    )
                }
                )
                }
            </div>
        </div >
    );
};

export default Search;