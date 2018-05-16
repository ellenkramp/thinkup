import React from 'react';
import Header from './Header';
import Footer from './Footer';

import SearchBar from './SearchBar';

let HomePageScreen = () => {
    return (
    <div className="home-page-container">
    <div className="header">
        <Header />
    </div>
    <div className="hp">
        <SearchBar />
    </div>
    <Footer />
    </div>
    )
}

export default HomePageScreen;