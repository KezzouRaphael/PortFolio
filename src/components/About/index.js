import './index.scss';
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/index';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  const[letterClass,setLetterClass] = useState('text-animate');
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
                clearTimeout(timeoutId)
            }
}, [])
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15} />
        </h1>

      <p>
        Merci de venir lire ma petite bio, 

        Je me présente Raphael Kezzou, je suis un "Junior Fullstack Developer" à la recherche d'un stage dans une entreprise IT afin d'approfondir mes connaissances mais aussi de travailler avec d'autres professionnels du milieu. 
      </p>
      <p>
        Je suis un développeur autonome, aussi bien curieux que touche à tout, j'apprends une erreur à la fois .
      </p>
      <p>
        Si je devais me décrire en tant que personne en quelques mots, je dirai que je suis une personne souriante, féru de lecture et de sciences et un peu geek sur les bords.
      </p>
    </div>  
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faPhp} color="#474A8A" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
  </div>

  );
};

export default About;