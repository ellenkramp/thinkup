import React from 'react';
import logo from '../images/logo.png'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { Link } from "react-router-dom";



let Header = () => {
    return (
    <div className="header"> 
        <div><Link to="/"><img src={logo} className="logo" alt="logo" /></Link></div>
        <div className="space"></div>
        <div className="link">
            <div className="el"><Link to="/"><p>HOME</p></Link></div>
            <div className="el"><Link to="/ideas"><p>ALL</p></Link></div>
            <div className="el"><Link to="/categories"><p>CATEGORIES</p></Link></div>
            <div className="el"><Link to="/new"><p>NEW POST</p></Link></div>
        </div> 
    </div> 

    )
}

export default Header;