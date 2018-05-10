import React from 'react';
import Header from './Header';

let HomePageScreen = () => {
    return (
    <div className="home-page-container">
    <div className="header">
        <Header />
    </div>
    <div className="hp">
        <div><h3>Search Idea</h3></div>
        <div><p>By username<input type="text" name="username" /></p></div>
        <div><p>By Categories<input type="text" name="categories" /></p></div>
    </div>
    </div>
    )
}

export default HomePageScreen;