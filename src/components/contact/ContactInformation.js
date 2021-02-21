import React from "react";
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const dataContact = [
  {
    title: 'Dirección',
    info: 'Ñuñoa, Santiago de Chile',
  },
  {
    title: 'Email',
    info: 'aquilesallellillo@gmail.com',
  },
  {
    title: 'Teléfono',
    info: '(+56) 9 8371 3599',
  },
]

const socialContact = [
  {
    link: 'https://github.com/AquilesAllelLillo',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/aquiles-allel-lillo-882b5b61/',
    icon: faLinkedin,
  },
]

const ContactInformation = () =>
  <section>
    <ul className="contact">
      {dataContact.map((item, index) => (
        <li key={index}>
          <h3>{item.title}:</h3>
          <span>{item.info}</span>
        </li>
      ))}
      <li>
        <h3>Social</h3>
        <ul className="icons">
          {socialContact.map((item, index) => (
            <li key={index}>
              <Link to={item.link} target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={ item.icon } size="2x" />
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
