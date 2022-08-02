import './index.scss';

import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Contact = () => {
  const[letterClass,setLetterClass] = useState('text-animate');
  const refForm = useRef();
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
                clearTimeout(timeoutId)
            }
  }, [])

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_8hlthgp','template_2m1bw5h',refForm.current,'GtbIDHIm878zWs4Df')
    .then(
      () =>{
      alert('Email sent successfully!');
      window.location.reload(false);
    },
    () =>{
      alert('Failed to send email,please try again.');
    }
    )
  }
  return (
    <>    
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} letterClass={letterClass}/>
          </h1>
          <p>
            Actuellement à la recherche d'un stage dans le milieu du développement, je reste à l'écoute de nouvelles opportunités.

            Si vous avez de plus amples questions ou d'autres requêtes, n'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <input type="hidden" name="to_name" value="Raphael Kezzou"/>
              <ul>
                <li className="half">
                  <input type="text" name='from_name' placeholder="Name" required/>
                </li>
                <li className="half">
                  <input type="email" name='from_email' placeholder="Email" required/>
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required/>
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required/>
                </li>
                <li>
                  <input type="submit" className='flat-button' value='ENVOYER'/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kezzou Raphael,
          <br />
          Belgium,
          <br />
          4400 Flémalle
          <br />
          <span><a href="mailto:Raphael.Kezzou@live.fr">Raphael.Kezzou@live.fr</a></span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[50.5994478,5.4699616]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[50.5994478,5.4699616]}>
              <Popup>Je suis situé à Flémalle.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>

  );
};

export default Contact;