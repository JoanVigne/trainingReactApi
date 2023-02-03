import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header>
            <h1> University all around the world </h1>
            <Link to={"/home"}>An other country?</Link>
            {/*             <Link to={"/uni"}>The uni's</Link> */}
        </header>
    );
};

export default Header;