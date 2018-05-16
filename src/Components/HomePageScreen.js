import React from 'react';
import Header from './Header';
import Footer from './Footer';

let HomePageScreen = () => {
    return (
    <div className="home-page-container">
    <div className="header">
        <Header />
    </div>
    <div className="hp">
        <div><h1>Search Idea</h1></div>
        <div><p>By username</p><input type="text" name="username" /></div>
        <div><p>By Categories</p><input type="text" name="categories" /></div>
        <button>Search</button>
    </div>
    <Footer />
    </div>
    )
}

export default HomePageScreen;