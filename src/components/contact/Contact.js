import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="contact" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Contacto</h2>
      <p>
        A continuación, encontrarás mis datos de contacto por si te quieres
        comunicar conmigo, así como mis redes sociales.
      </p>
      <hr />
      <p>
        El formulario de contacto no se encuentra operativo... por el momento.
      </p>
      <div className="split style1">
        <ContactForm />
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
