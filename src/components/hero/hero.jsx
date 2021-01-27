import React from 'react';
import './hero.sass';

import bg1 from './hero-bg1.jpg';
import bg2 from './hero-bg2.jpg';

import Button from '../button/button.jsx';

const Hero = props => {
  return <section className="hero">
    <div className="hero-about">
      <h1 className="hero-title">Find a gift for your wife or girlfriend</h1>
      <p className="hero-subtitle">Struggling to find a gift for your wife or girlfriend?
No problem!</p>
      <Button theme='main-full' text='find gift now'/>
    </div>
    <div className="hero-bg1"></div>
    <div className="hero-bg2"></div>
    <div className="hero-about" id='about'>
      <h2 className="hero-title">How we work</h2>
      <p className="hero-subtitle">We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey, and our proprietary algorithm will match you with a few perfect gift options.</p>
      <Button theme='main-full' text='Learn More'/>
    </div>
  </section>
};

export default Hero;