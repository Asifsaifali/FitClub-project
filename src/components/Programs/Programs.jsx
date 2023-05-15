import React from 'react'
import "./Programs.css"
import ProgramData from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"


const Programs = () => {
  return (
    <div className='programs'>
        <div className="programs-header">
        <span className='stroke-text'>Explore out</span>
        <span>Programs</span>
        <span className='stroke-text'>to Shape You</span>
        </div>

        <div className="programs-catogries">
            {ProgramData.map((props)=>(
                <div className="catogry">
                    {props.image}
                    <span>{props.heading}</span>
                    <span>{props.details}</span>
                    <div className="join-now"><span>join Now</span> <img src={RightArrow} alt="" /></div>
                </div>
               
))}
        </div>
    </div>
  )
}

export default Programs