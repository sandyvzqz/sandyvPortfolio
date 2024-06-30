import React from 'react';
import Navigation from "./Navigation";
import '../App.css';

const Header = ()=> {
    return(
        <header>
            <div className="headerContent">
                <h1 className="logo">Sandy Vazquez</h1>
                <Navigation />
            </div>
        </header>
    )
};

export default Header;