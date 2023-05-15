import React from 'react'
import "./Footer.css";
import Logo from "../../assets/logo.png";
import Instagram from "../../assets/instagram.png";
import Linkdin from "../../assets/linkedin.png";
import Github from "../../assets/github.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr/>
        <div className="footer">
            <div className="social">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={Linkdin} alt="" />
            </div>    
        
        <div className="log-footer">
            <img src={Logo} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Footer