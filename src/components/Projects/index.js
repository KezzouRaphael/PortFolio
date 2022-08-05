import "./index.scss";

import React, { useEffect, useState } from 'react';
import Loader from "react-loaders";

const Projects = () => {
  const[letterClass,setLetterClass] = useState('text-animate');
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
      <h1>Hello world!</h1>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default Projects;