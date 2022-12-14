import React from 'react'
import './footer.css'
import{FaFacebookF}from 'react-icons/fa'
import{FiInstagram}from 'react-icons/fi'
import{IoLogoTwitter}from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <div className="hey">
      <a href="/" className='footer__logo'>Bibek Subedi</a>
    <ul className='permalinks'>
        <li><a href="/">Home</a>
        <a href="#about">About</a><a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a></li>
        
        
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://instagram.com"><FiInstagram/></a>
      <a href="https://twitter.com"><IoLogoTwitter/></a>

    </div>
    <div className="footer__copyright">
      <small>&copy; Bibek Subedi.All rights reserved.</small>
    </div>
    </div>


    </footer>
  )
}

export default Footer