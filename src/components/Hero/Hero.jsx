import React from 'react'
import Header from '../Header/Header'
import hero_image from "../../assets/dog.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"; 
import { motion } from 'framer-motion';

import "./Hero.css"

const Hero = () => {

  const transition={type:'spring',duration:3}
  const mobile=window.innerWidth<=768?true:false
  return (
    <div className="hero">

        <div className="left-hero">
        <Header/>

      <div className="the-ad">
        <motion.div 
         initial={{left:mobile? "178px":"238px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}></motion.div>
        <span>The best fitness in the town</span>
      </div>

      <div className="hero-text" >
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div>
          <span> In here we will help you to shape and build your ideas body and live up your life to fullset</span>
        </div>
      </div>

      <div className="figures">
        <div>
          <span>+140</span>
          <span>expert coaches</span>
        </div>
        <div>
          <span>+978</span>
          <span>members joined</span>
        </div>
        <div>
          <span>+50</span>
          <span>fitness programs</span>
         </div>
         </div>
      <div className="hero-button">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
      </div>
    </div>    
      <div className="right-hero">
       <button className="btn">join now</button>

       <motion.div 
        initial={{right:"-1rem"}}
        transition={transition}
        whileInView={{right:"4rem"}}
        className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span><span>116 bpm</span>
       </motion.div>

       <img src={hero_image} alt="" className='hero-img' />
       <motion.img 
          initial={{right:"11rem"}}
          transition={transition}
          whileInView={{right:"20rem"}}
          src={hero_image_back} alt="" className='hero-img-back' />


       <motion.div
          initial={{right:"37rem"}}
          transition={transition}
          whileInView={{right:"28rem"}} 
         className="calories">
        <img src={Calories} alt="" />
        <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
        </div>  
      </motion.div>
    </div>
  </div>
  
  )
}

export default Hero