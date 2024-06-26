import React from 'react';
import Navigation from "./Navigation";
import '../App.css';

const Header = ()=> {
    return(
        <header className="header">
            <div className="headerContent">
                    <div className="title">
                        Sandy Vazquez
                    </div>
                    <Navigation />
            </div>
        </header>
    )
};

export default Header;