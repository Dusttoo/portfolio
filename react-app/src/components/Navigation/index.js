import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


import './Navigation.css'


function Navigation(){

  return (
    <>
      <div className="nav-bar">
        <div className="left">
          <div className="nav-links">
            <a href="https://github.com/Dusttoo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="social-media"/></a>
            <a href="https://www.linkedin.com/in/dusty-mumphrey/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="social-media"/></a>
          </div>
        </div>
        <div className="right">
          <h2 className="phone">(430) 435 - 5503</h2>
          <a href = "mailto: dusty.mumphrey@gmail.com" className="email">dusty.mumphrey@gmail.com</a>
        </div>
      </div>
    </>
  );
}

export default Navigation;