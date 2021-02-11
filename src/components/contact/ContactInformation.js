import React from "react";
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ContactInformation = () =>
  <section>
    <ul className="contact">
      <li>
        <h3>Dirección</h3>
        <span>
          Ñuñoa
          <br />
          Santiago
          <br />
          Chile
        </span>
      </li>
      <li>
        <h3>Email</h3>
        <a href="/#">aquilesallellillo@gmail.com</a>
      </li>
      <li>
        <h3>Phone</h3>
        <span>(000) 000-0000</span>
      </li>
      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="/#" className="fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <Link to="https://github.com/AquilesAllelLillo">
              <FontAwesomeIcon icon={ faGithub } size="2x" />
            </Link>
          </li>
          <li>
            <a href="/#" className="fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/aquiles-allel-lillo-882b5b61/">
              <FontAwesomeIcon icon={ faLinkedin } size="2x" />
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
