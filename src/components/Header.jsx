import React from 'react';
import Navigation from "./Navigation";
import '../App.css';
// import headerImage from '../assets/images/mountains.png';

const Header = ()=> {
    return(
        <header className="header">
            <div className="headerContent">
            {/* <img src={ headerImage} alt="mountain landscape in sunset"/> */}
                <div className="title">
                    Sandy Vazquez
                </div>
            </div>
        </header>
    )
};

export default Header;