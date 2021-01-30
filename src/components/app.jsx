import React from 'react';
import '../styles.sass';

import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import Services from './services/services.jsx';
import Orange from './orange/orange.jsx';

const App = () => {
  return <>
  <Navbar/>
  <Hero/>
  <Services/>
  <Orange/>
  </>
};

export default App;