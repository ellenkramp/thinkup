import React from 'react';

import logo from '../images/logo.png'
import music from '../images/music.jpg';
import design from '../images/design.jpg';
import film from '../images/film.jpg';
import gaming from '../images/gaming.jpg';


import { Link } from "react-router-dom";



let CategoriesScreen = () => 
    <div className="cateogires-screen-container">
        <div className="c-header"> 
            <div><Link to="/"><img src={logo} className="logo" alt="logo" /></Link></div>
        </div>

        <div className="categories">
            <div className="c"><Link to="/categories/2"><img src={music} className="c-img" alt="music" /></Link></div>
            <div className="c"><Link to="/categories/2"><img src={design} className="c-img" alt="design" /></Link></div>
            <div className="c"><Link to="/categories/3"><img src={film} className="c-img" alt="film" /></Link></div>
            <div className="c"><Link to="/categories/4"><img src={gaming} className="c-img" alt="gaming" /></Link></div>
        </div> 
    </div>

export default CategoriesScreen;