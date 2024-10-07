
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.svg" alt="Logo" /> 
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li>
          <a href="https://github.com/its-kundan/urlShortner" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="github-icon" /> <span>GitHub</span>
          </a>
        </li>
        <li><a href="#request-feature">Feature</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#more">More</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

