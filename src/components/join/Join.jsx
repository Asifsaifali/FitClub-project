import React from 'react';
import { useRef } from 'react';
import "./Join.css";
import emailjs from "@emailjs/browser";
    

const Join = () => {
    const form= useRef()
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dcft0po', 'template_tpc4eyl', form.current, 'CDzpKxBsbIb2LkzyQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='join' id='join'>
        <div className="left-join">
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US</span>
            </div>
        </div>
        <div className="right-join" action="">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email"name="from_name" placeholder='Enter your email here....!' />
                <button className='btn btn-join'>join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join