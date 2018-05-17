import React from 'react';

import music from '../images/music.jpg';
import art from '../images/art.jpg';
import film from '../images/film.jpg';
import gaming from '../images/gaming.jpg';
import Header from './Header';
import Footer from './Footer'


import { Link } from "react-router-dom";



let CategoriesScreen = () => 
<div>
    <div><Header /></div>
    <div className="cateogires-screen-container">
        <div className="categories">
            <div className="c"><Link to="/categories/music"><img src={music} className="c-img" alt="music" /></Link></div>
            <div className="c"><Link to="/categories/design"><img src={art} className="c-img" alt="art" /></Link></div>
            <div className="c"><Link to="/categories/film"><img src={film} className="c-img" alt="film" /></Link></div>
            <div className="c"><Link to="/categories/gaming"><img src={gaming} className="c-img" alt="gaming" /></Link></div>
        </div>
    </div>
    <footer><Footer /></footer>
</div>

export default CategoriesScreen;