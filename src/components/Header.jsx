import React from 'react';
import Navigation from "./Navigation";
import '../App.css';

const Header = ()=> {
    return(
        <header>
            <div className="headerContent">
                <h2 className="logo">Sandy Vazquez</h2>
                <Navigation />
            </div>
        </header>
    )
};

export default Header;