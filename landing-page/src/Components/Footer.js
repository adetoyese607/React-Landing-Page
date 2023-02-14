import React from 'react'
import Logo from "../Assets/footer-logo.png"
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'


const Footer = () => {
  return   <div className='footer-wrapper'>
      <div className="footer-section-one">
        <div className="footer-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
            <BsTwitter/>
            <BsLinkedin/>
            <BsYoutube/>
            <BsFacebook/>
        </div>
      </div>
      <div className="footer-section-two">
       <div className="footer-section-columns">
        <span>Quality</span>
        <span>Help</span>
        <span>Share</span>
        <span>Carrers</span>
        <span>Testimonials</span>
        <span>Work</span>
       </div>

       <div className="footer-section-columns">
        <span>244-5333-7783</span>
        <span>hello@cook.com</span>
        <span>hello@cook.com</span>
        <span>hello@cook.com</span>
       </div>

       <div className="footer-section-columns">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
       </div>
       
      </div>

    </div>

}

export default Footer
