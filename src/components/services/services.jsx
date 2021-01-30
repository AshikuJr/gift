import React from 'react';
import './services.sass';

import bday from './birthday.jpg';
import anni from './anniversary.jpg';
import vday from './vday.jpg';
import christmas from './christmas.jpg';

const ServiceCard = props => {
  function showDescr(event){
    event.target.parentNode.classList.toggle('card_spread');
  }
  return <div className="card">
    <img src={props.pic} alt={props.title} className="card-pic"/>
    <h3 className="card-title">{props.title}</h3>
    <p className="card-descr">{props.descr}</p>
    <button className="card-seemore" onClick={showDescr}>See More ›</button>
  </div>
};

const Services = props => {
  return <section className="services" id='services'>
    <div className="container">
      <div className="services-wrap">
        <h2 className="services-title">Gifts for all Occasions</h2>
        <p className="services-subtitle">“Try our web app to find the best gifts for all occasions”</p>
        <div className="services-list">
          <ServiceCard 
          title='Birthday'
          pic={bday}
          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis consectetur ex sit amet eleifend. Duis auctor a lacus at viverra. Quisque nec egestas nunc. Fusce placerat nibh pellentesque eros tristique, id semper libero feugiat. Pellentesque pretium eget ex ac tempor.'/>
          <ServiceCard 
          title='Anniversary'
          pic={anni}
          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis consectetur ex sit amet eleifend. Duis auctor a lacus at viverra. Quisque nec egestas nunc. Fusce placerat nibh pellentesque eros tristique, id semper libero feugiat. Pellentesque pretium eget ex ac tempor.'/>
          <ServiceCard 
          title="Valentine's Day"
          pic={vday}
          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis consectetur ex sit amet eleifend. Duis auctor a lacus at viverra. Quisque nec egestas nunc. Fusce placerat nibh pellentesque eros tristique, id semper libero feugiat. Pellentesque pretium eget ex ac tempor.'/>
          <ServiceCard 
          title='Christmas'
          pic={christmas}
          descr='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis consectetur ex sit amet eleifend. Duis auctor a lacus at viverra. Quisque nec egestas nunc. Fusce placerat nibh pellentesque eros tristique, id semper libero feugiat. Pellentesque pretium eget ex ac tempor.'/>
        </div>
      </div>
    </div>
  </section>
};

export default Services;