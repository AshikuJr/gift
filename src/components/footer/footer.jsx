import React from 'react';
import './footer.sass';

import fb from './fb.svg';
import twitter from './twitter.svg';
import insta from './insta.svg';
import yt from './yt.svg';
import pin from './pin.svg';
import logo from './footer-logo.svg';

const Footer = props => {
  return <footer className="footer">
    <div className="container">
      <div className="footer-wrap">
        <nav className="footer-nav">
          <a href="#" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <img src={logo} alt="logo"/>
          <a href="#services" className="footer-link">Services</a>
          <a href="#blogs" className="footer-link">Blogs</a>
        </nav>
        <div className="footer-socials">
          <a href="https://ashikujr.github.io/resume/dist/index.html" className="footer-socials__icon">
            <img src={fb} alt="fb"/>
          </a>
          <a href="https://ashikujr.github.io/resume/dist/index.html" className="footer-socials__icon">
            <img src={twitter} alt="twitter"/>
          </a>
          <a href="https://ashikujr.github.io/resume/dist/index.html" className="footer-socials__icon">
            <img src={insta} alt="insta"/>
          </a>
          <a href="https://ashikujr.github.io/resume/dist/index.html" className="footer-socials__icon">
            <img src={yt} alt="yt"/>
          </a>
          <a href="https://ashikujr.github.io/resume/dist/index.html" className="footer-socials__icon">
            <img src={pin} alt="pin"/>
          </a>
        </div>
        <div className="footer-privacy">
          <span>© 2010 — 2020</span>
          <span>Privacy — Terms</span>
        </div>
      </div>
    </div>
  </footer>
};

export default Footer;