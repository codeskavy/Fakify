import React from 'react';
import '../styles/Contact.css'
import gif from '../assets/anime.gif';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
      <div className="contact-gif">
        <img src={gif}alt="Contact GIF" />
      </div>
    </div>
  );
};

export default Contact;
