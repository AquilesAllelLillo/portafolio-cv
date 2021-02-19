import React from 'react';
import { Link } from 'gatsby';

const Capability = ({ heading, miniDescription, link }) =>
  <section>
    <h3>{heading}</h3>
    <p>{miniDescription}</p>
    
    <ul className="actions">
        <li>
          <Link className="button" to={link} target="_blank">
            Visitar Proyecto
          </Link>
        </li>
      </ul>
  </section>

export default Capability;
