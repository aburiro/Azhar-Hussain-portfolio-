// Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please feel free to get in touch with us.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
