import '../styles/ResponsiveNav.css';
import React, { useState } from 'react';
import { FaInfoCircle, FaRocket, FaProjectDiagram, FaPhone} from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { GiStarSwirl } from 'react-icons/gi';
import ModeLink from './ModeLink';
import Footer from './Footer';

function ResponsiveNav({darkMode}) {
  const cont = document.querySelector('.container');

  const scrollHome = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('title-section');
    const { bottom } = targetElement.getBoundingClientRect();
    cont.scrollTo(bottom, 0);
  }

  const scrollAbout = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('about-section');
    const { bottom } = targetElement.getBoundingClientRect();
    // cont.scrollBy(bottom);
    cont.scrollBy(targetElement.getBoundingClientRect());
  }

  return (
    <>
      <div className='navbar'>
        <ul className='navbar-nav'>
          <li className='logo-home'>
          <a href="#title-section" onClick={scrollHome}>
            <div className='nav-link' >            
              <GiStarSwirl />
              <span className='link-text'>CT</span>              
            </div>
            </a>
          </li>
          <li className='nav-item'>
          <a href="#about-section" onClick={scrollAbout}>
            <div className='nav-link'>   
              <FaInfoCircle />
              <span className='link-text'>About</span>  
            </div>
            </a>
          </li>
          <li className='nav-item'>
            <a href="#skills-section">
            <div
              className='nav-link'
            >
              <FaRocket />

              <span className='link-text'>Skills</span>
            </div>
            </a>
          </li>
          <li className='nav-item home-link'>
            <div className='nav-link'>
              <HiHome />
              <span className='link-text'>Home</span>
            </div>
          </li>
          <li className='nav-item'>
            <div
              className='nav-link'
            >
              <FaProjectDiagram />

              <span className='link-text'>Projects</span>
            </div>
          </li>
          <li className='nav-item'>
            <a href="#contact-section">
            <div
              className='nav-link'
            >
              <FaPhone />

              <span className='link-text'>Contact</span>
            </div>
            </a>
          </li>

          <li className='nav-item'>
            <ModeLink />
          </li>

          {/* Footer Section: Hidden on Mobile */}

          <li className='nav-item footer'>
            <Footer />
          </li>
        </ul>
      </div>
      </>
  );
}

export default ResponsiveNav