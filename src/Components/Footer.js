import React from 'react';
import { Link } from "react-router-dom";



let Footer = () => {
    return (
    <div className="footer"> 
        <div className="foot">
            <div className="el-f"><Link to="/"><p>about thinkup |</p></Link></div>
            <div className="el-f"><Link to="/ideas"><p>careers |</p></Link></div>
            <div className="el-f"><Link to="/categories"><p>explore |</p></Link></div>
            <div className="el-f"><Link to="/new"><p>get started</p></Link></div>
        </div> 
    </div> 

    )
}

export default Footer;