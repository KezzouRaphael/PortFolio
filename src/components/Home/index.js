import React from 'react';
import LogoTitle from '../../assets/images/logo-becode.png';
import {Link} from 'react-router-dom';
import './index.scss';
const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> The name is Raphael Kezzou<br/>
        I'm a Web Developer at
        <img src={LogoTitle} alt="developer" />
        </h1>
        <h2>Junior Fullstack Developer</h2>
        <Link to= "/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;