import React, { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-becode.png';
import {Link} from 'react-router-dom';
import './Home.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';
import Loader from 'react-loaders';
const Home = () => {

  const[letterClass,setLetterClass] = useState('text-animate');
  const nameArray=['R','a','p','h','a','e','l'];
  const surnameArray=['K','e','z','z','o','u'];
  const jobArray1 = ['W','e','b'];
  const jobArray2 = ['D','e','v','e','l','o','p','e','r'];
  const jobArray3 = ['a','t'];
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000)
    return () => {
    clearTimeout(timeoutId);
    }
}, [])
  return (
    <>    
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br /> 
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={surnameArray} idx={22}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray1} idx={28}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={31}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray3} idx={40}/>
          <img src={LogoTitle} alt="developer" />
          <br/>
          </h1>
          <br/>
          <br/>
          <h2>Junior Fullstack Developer</h2>
          <Link to= "/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman"/>
    </>
  );
};

export default Home;