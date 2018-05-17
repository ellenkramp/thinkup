import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";


let HomePageScreen = () => {
    return (
    <div className="home-page-container">
        <div>
            <Header />
        </div>
        <div className="search-container">
            <h1>Your next idea... just waiting to be thought up.</h1>
            <Link to="/search">                 
                <p>SEARCH</p>
            </Link>
        </div>  
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

export default HomePageScreen;