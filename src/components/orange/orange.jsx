import React from 'react';
import './orange.sass';

import Button from '../button/button.jsx';

const Orange = props => {
  return <div className="orange">
        <div className="orange-text">
          <span className="orange-question">Ready to get started?</span>
          <span className="orange-answer">Sign up or contact us</span>
        </div>
        <div className="orange-buttons">
          <Button text='Find gift now' theme='dark-full'/>
          <Button text='how it works' theme='dark-empty'/>
        </div>
  </div>
};

export default Orange;