import React from 'react';
import Scroll from '../common/Scroll';

import CV from '../../images/CV-Aquiles-Allel-Lillo.pdf'

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Aquiles Allel Lillo</h1>
      <h1>Hyperspace</h1>
      <p>
        Soy Ingeniero en Computación. He trabajado como programador 
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
      <ul className="actions">
        <li>
          <a href={CV} target="_blank" className="button">
            Curriculum
          </a>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Curriculum
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
