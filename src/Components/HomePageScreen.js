import React from 'react';
import Header from './Header';

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
    </div>
    )
}

export default HomePageScreen;