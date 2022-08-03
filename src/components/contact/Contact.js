import React from 'react'
import './contact.css'

import {MdOutlineEmail} from'react-icons/md';
import {RiMessengerLine} from'react-icons/ri';
import {BsFillPhoneFill} from'react-icons/bs';
import {FaInstagram} from'react-icons/fa';
import emailjs from 'emailjs-com'
import  { useRef } from 'react';

const Contact = () => {
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ik012ys', 'template_i8dwmee', form.current, 'K09N80in52n74XB5v')
        e.target.reset()
    };



  return (
<section id='contact'>
  <h5>
   Get In Touch
  </h5>
  <h2>Contact Me</h2>
  <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email: </h4>
        <h5>bsubedi314@gmail.com</h5>
        <a href="mailto:bsubedi314@gmail.com" target='__blank'>Send a Message</a>
      </article>

      <article className="contact__option">
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger: </h4>
        <h5>Bibek Subedi</h5>
        <a href="https://www.messenger.com/t/100023258079481" target='__blank'>Send a Message</a>
      </article>

      <article className="contact__option">
        <BsFillPhoneFill className='contact__option-icon'/>
        <h4>Phone: </h4>
        <h5>+977 9815023258</h5>
        <a href="https://api.whatsapp.com/send?phone=+9779815023258" target='__blank'>Send a Message</a>
        
      </article>





      <article className="contact__option" target='__blank'>
        <FaInstagram className='contact__option-icon'/>
        <h4>Instagram: </h4>
        <h5>Bibek Subedi</h5>
        <a href="https://www.instagram.com/direct/t/340282366841710300949128177980628957291">Send a Message</a>
      </article>

    </div>
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder='Your Full Name' required/>

      <input type="email" name="email" placeholder='Your Email' required/>
      <textarea name="message" rows= '5' placeholder='Your Message: ' required/>
      <button type="submit" className='btn btn-primary'>Send Message</button>
    </form>
  </div>
  </section>  )
}

export default Contact