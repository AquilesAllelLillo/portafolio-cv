import React from 'react';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="projects" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>Proyectos</h2>
      <p>
        Proyectos desarrollados ya sea para aprender de forma autodidacta sobre 
        algunas tecnologías junto con su aplicación o para algún desarrollo 
        solicitado por clientes.
      </p>
      <hr />
      <div className="features">
        <CapabilityList />
      </div>
      <hr />
    </div>
  </section>

export default Capabilities;
