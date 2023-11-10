// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Azhar Hussain<br />
            Web Developer & Designer<br />
            Email: buriro23@gmail.com<br />
            Phone: (555) 123-4567
          </p>
        </div>
        <div className="social-links">
          <h3>Connect with me:</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Azhar Hussain Buriro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
