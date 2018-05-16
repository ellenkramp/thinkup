import React from 'react';
import { Link } from "react-router-dom";



let Footer = () => {
    return (
    <div className="footer"> 
        <div className="foot">
            <div className="el-f"><Link to="/"><p>HOME</p></Link></div>
            <div className="el-f"><Link to="/ideas"><p>ALL</p></Link></div>
            <div className="el-f"><Link to="/categories"><p>CATEGORIES</p></Link></div>
            <div className="el-f"><Link to="/new"><p>NEW POST</p></Link></div>
        </div> 
    </div> 

    )
}

export default Footer;