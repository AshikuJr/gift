import React from 'react';
import './button.sass';

const Button = props => {
  return <button className={`button button_${props.theme}`}>{props.text}</button>
};

export default Button;