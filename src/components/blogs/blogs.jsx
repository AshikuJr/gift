import React from 'react';
import './blogs.sass';

import first from './blog1.jpg';
import second from './blog2.jpg';
import third from './blog3.jpg';

const Article = props => {
  return <div className={`article${props.active===true ? '_active' : ''}`} onClick={props.onClick} style={{order: `${props.order}`}}>
    <div className="article__pic" style={{background: `no-repeat center/cover url(${props.pic})`}}></div>
    <span className="article__author">{props.author}</span>
    <h3 className="article__title">{props.title}</h3>
    <p className="article__descr">{props.descr}</p>
    <a href="http://ashikujr.github.io/resume/" className="article__readmore">Read More</a>
  </div>
};

const Blogs = props => {
  let isChanging = false;
  function setActive(event){
    if (!event.target.closest('.article')) return
    if (isChanging) return
    else {
      isChanging = true;
      setTimeout(() => isChanging = false, 1000);
    }
    let newActive = event.target.closest('.article');
    let oldActive = document.querySelector('.article_active');
    newActive.style.animation = 'fade 1s';
    setTimeout(() => newActive.style.animation = 'none', 1000);
    oldActive.style.animation = 'fade 1s';
    setTimeout(() => oldActive.style.animation = 'none', 1000);
    setTimeout(() => {
      newActive.classList.toggle('article_active');
      newActive.classList.toggle('article');
      oldActive.style.order = getComputedStyle(newActive).order;
      oldActive.classList.toggle('article');
      oldActive.classList.toggle('article_active');
    }, 500);
  }
  return <section className="blogs" id='blogs'>
    <div className="container">
      <div className="blogs-wrap">
        <h2 className="blogs-title">Our Best Blogs Ever</h2>
        <p className="blogs-subtitle">“Try our blog to find the best tips and tricks to select your gift”</p>
        <div className="blogs-articles">
          <Article active={true}
          author='Mr. John Doe'
          title="The best way to wish your wife"
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
          pic={first}
          order={1}
          onClick={setActive}/>
          <Article active={false}
          author='Mr. Mikhail Kozlov'
          title="Database to find the gifts for your girlfriend"
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
          pic={second}
          order={2}
          onClick={setActive}/>
          <Article active={false}
          author='Mrs. Big Mac'
          title="How Artificial Intelligence read your mind to find the best gift"
          descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."
          pic={third}
          order={3}
          onClick={setActive}/>
        </div>
      </div>
    </div>
  </section>
};

export default Blogs;