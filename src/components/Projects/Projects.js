import "./Projects.scss";

import React, { useEffect, useState } from 'react';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

const Projects = () => {
  const[letterClass,setLetterClass] = useState('text-animate');
  const titleArray=['M','y',' ','P','r','o','j','e','c','t','s'];
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
    <div className="container project-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15}/>
        </h1>   
        <p>Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
        <ul className='project-lists'>
          <li className='project-item'>
            Projet 1
          </li>
          <li className='project-item'>
            Projet 2
          </li>
          <li className='project-item'>
            Projet 3
          </li>
        </ul>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default Projects;