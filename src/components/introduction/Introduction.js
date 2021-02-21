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
      <p>
        Como persona, trato de ser un buen sujeto sin buscar un beneficio a cambio.
      </p>
      <p>
        Como profesional, soy Ingeniero en Computación. He trabajado como programador 
        desarrollando tanto Frontend como Backend en distintos proyectos, en su mayoría, 
        orientados al desarrollo web. En los proyectos que trabajé se aplicaron 
        buenas prácticas de programación, responsive design y 
        metodologías ágiles (SCRUM) durante el desarrollo, adaptándose a los 
        requerimientos de cada proyecto.
      </p>
      <hr />
      <h1>Intereses</h1>
      <p>
        Actualmente me interesa poder especializarme en el desarrollo Frontend 
        utilizando ReactJS, Redux y React-Native, motivo por el cual me encuentro
        estudiando de forma autodidacta para ir mejorando mis habilidades en estas 
        tecnologías.
      </p>
      <p>
        Además, me gusta leer, viajar, ir al cine, escuchar música, 
        ir a conciertos y muchas cosas más.
      </p>
      <hr />
      <h3>Más información </h3>
      <p>
        Para ver mis redes sociales o descargar mi curriculum:
      </p>
      <ul className="icons">
        <li>
          <Link to="https://github.com/AquilesAllelLillo" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={ faGithub } size="2x" />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/aquiles-allel-lillo-882b5b61/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon icon={ faLinkedin } size="2x" />
          </Link>
        </li>
      </ul>
      <ul className="actions">
        <li>
          <a href={CV} target="_blank" rel="noreferrer" className="button">
            Curriculum
          </a>
          <Scroll type="id" element="contact">
            <a href="#contact" className="button">
              Contacto
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
