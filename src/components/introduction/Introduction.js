import React from 'react';
import { Link } from 'gatsby';
import Scroll from '../common/Scroll';

import CV from '../../images/CV-Aquiles-Allel-Lillo.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Introduction = () =>
  <section id="about" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Aquiles Allel Lillo</h1>
      <h1>Hyperspace</h1>
      <p>
        Como persona, trato de ser un buen sujeto sin buscar un beneficio a cambio.
      </p>
      <p>
        Como profesional, soy Ingeniero en Computación. He trabajado como programador 
        Full Stack en distintos proyectos, en su mayoría, orientados 
        al desarrollo web. En los proyectos que trabajé se aplicaron 
        buenas prácticas de programación, responsive design y 
        metodologías ágiles durante el desarrollo, adaptándose a los 
        requerimientos de cada proyecto.
      </p>
      <p>
        Just another fine responsive site template designed by{' '}
        <a href="http://html5up.net">HTML5 UP</a>
        <br />
        and released for free under the{' '}
        <a href="http://html5up.net/license">Creative Commons</a>.
      </p>
      <hr />
      <h3>Para ver mis redes sociales o descargar mi curriculum: </h3>
      <ul className="icons">
        <li>
          <Link to="https://github.com/AquilesAllelLillo">
            <FontAwesomeIcon icon={ faGithub } size="2x" />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/aquiles-allel-lillo-882b5b61/">
            <FontAwesomeIcon icon={ faLinkedin } size="2x" />
          </Link>
        </li>
      </ul>
      <ul className="actions">
        <li>
          <a href={CV} target="_blank" className="button">
            Curriculum
          </a>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Siguiente
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
