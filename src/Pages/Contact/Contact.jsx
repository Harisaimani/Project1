import React from 'react';
import './Contact.css'; // Import your CSS file for styling
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import contactimage from '../../Assests/images/contactimage.png'
function Contact() {
    return (
        <div className="contact-page-container">
            <div className="contact-info">
                <div className="contact-item phone">
                    <FaPhone size={25} className='icon'/>
                    <span>Phone: +91 8328099775</span>
                </div>
                <div className="contact-item email">
                    <MdEmail size={25} className='icon'/>
                    <span>Email: nsm343134@gmail.com</span>
                </div>
                <div className="contact-item">
                    <FaLink size={25} className='icon'/>
                    <span>Website: <a href="link">link</a></span>
                </div>
            </div>
            <div className="contact-image">
                <img src={contactimage} alt="Contact" />
            </div>
        </div>
    );
}

export default Contact;
