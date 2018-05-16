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
            <Link to="/search">                 
                <h1>Click here to search your ideas</h1>
            </Link>
        </div>  
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

export default HomePageScreen;