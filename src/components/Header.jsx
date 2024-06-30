import React from 'react';
import Navigation from "./Navigation";
import '../App.css';

const Header = ()=> {
    return(
        <header>
            <div>
                <div>Sandy Vazquez</div>
            </div>
            <div className="navContainer">
                <Navigation />
            </div>
        </header>
    )
};

export default Header;