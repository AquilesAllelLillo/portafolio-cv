import React from 'react';
import { Link } from 'gatsby';

const Capability = ({ heading, description, iconClass }) =>
  <section>
    <span className={`icon major ${iconClass}`} />
    <h3>{heading}</h3>
    <p>{description}</p>
    
    <ul className="actions">
        <li>
          <Link className="button" to="/generic">
            Learn more
          </Link>
        </li>
      </ul>
  </section>

export default Capability;
