import "./Projects.scss";

import React, { useEffect, useState } from 'react';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import projectInfos from "../../data/portfolio.json";

const Projects = () => {
  const[letterClass,setLetterClass] = useState('text-animate');
  const titleArray=['M','y',' ','P','r','o','j','e','c','t','s'];
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, []);

  const renderPortfolio = (portfolio) => {
    console.log(portfolio)
    return(
      <div className="images-container">
        {
          portfolio.map((port,index)=>{
            return(
              <div className="project-box">              
                <div className="title-box">
                  <h2>{port.title}</h2>
                </div>
                <div className="image-box" key={index}>
                  <img className="portfolio-image" src={port.cover} alt="project"/>
                </div>
                <div className="descriptions-box">
                  <p className="description">{port.description}</p>
                </div>
                <div className="url-box">
                  <a className ="flat-button" href={port.url} target="_blank" rel="noreferrer">Link to project</a>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
  return (
    <>  
    <div className="container project-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={15}/>
        </h1>   
        <p>Voici quelques preview de mes projets vous pouvez retrouver les autres sur mon Github: </p>
        <div>{renderPortfolio(projectInfos.portfolio)}</div>
      </div>
    </div>        

    <Loader type="pacman"/>
    </>
  );
};

export default Projects;