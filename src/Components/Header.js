import React from 'react';
import logo from '../images/logo.png'

import { Link } from "react-router-dom";



let Header = () => {
    return (
    <div className="header"> 
        <div><Link to="/"><img src={logo} className="logo" alt="logo" /></Link></div>
        <div className="space"></div>
        <div className="link">
            <div className="el"><Link to="/categories">Categories</Link></div>
            <div className="el"><Link to="/new">Create New</Link></div>
        </div> 
    </div> 

    )
}

export default Header;