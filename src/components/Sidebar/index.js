import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoSubtitle from '../../assets/images/logo-becode.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className = 'logo' to= '/'>
      <img className="sub-logo" src= {LogoSubtitle} alt = "slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassName="active" className="project-link" to="/projects">
        <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e"/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/raphael-kezzou/'>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a target="_blank" rel='noreferrer' href='https://github.com/KezzouRaphael'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar