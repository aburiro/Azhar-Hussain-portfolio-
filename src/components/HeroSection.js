// HeroSection.js

import React from 'react';
import profile from "../assets/images/Azhar_Hussain_Buriro.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="container-interpage">
          <div>
            <div className="content-text">
              <h2>Working Currently in Sukkur</h2>
              <h3>
                Experienced undergraduate software engineer with 6 months of
                industry experience, specializing in full stack Software
                Development
              </h3>
              <br />
              <br />
              <button type="button" className="btn btn-light">
                READ MORE...
              </button>
              <br />
              <br />
              <div className="d-grid gap-2 d-md-block">
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ borderRadius: '10px', height: '70px' }}
                >
                  <h1>Hire Me</h1>
                </button>
              </div>
            </div>
          </div>
          <div style={{ borderRadius: '50%', width: '200px' }}>
            <img
              className="profile-image"
              src={profile}
              alt="Azhar Hussain Buriro"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
