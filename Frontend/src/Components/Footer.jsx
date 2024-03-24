import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate()


  const handleSignUpClick = () => {
    navigate('/signup');
};


  return (
    
    <div>
      <footer className="footer">
        <div className="footer-container">
            
          <div className="about-us-cont">
            <h2>About Us</h2>
            <p>
              We are a group computer science undergraduate at IIT. This project
              is part of our software development group project module. This
              project is developed to help job seekers to face interviews
              confidently by allowing them to taken on mutliple mock interviews.
            </p>
          </div>

          <div className="contact-us-cont">
            <h2>Contact Us</h2>
            <p>
              For any Queries and Improvements please feel free to drop in a
              message.
            </p>
          </div>

          <div className="site-map-cont">
            <h2>Site-Map</h2>
            <ul>
              <li><Link to='main' smooth={true} duration={1000}>Home Page</Link></li>
              <li><Link onClick={handleSignUpClick}>Login / SignUp </Link></li>
              <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
              <li><Link to='contact' smooth={true} duration={1000}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="points-cont">
            <h2>Points To consider before facing an Interview Sucessfully</h2>
            <ul>
              <li>Prepare</li>
              <li>Make your CV stand out</li>
              <li>Be Confident</li>
              <li>Maintain Proper Posture</li>
              <li>Dress Appropriate</li>
            </ul>
          </div>
        </div>

        <div className="copyright"> Ace Interview 2024 ©</div>
      </footer>
    </div>
  );
};

export default Footer;
