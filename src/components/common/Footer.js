import React from 'react';

import '../../assets/styles/sass/main.scss';

const Footer = () => (
  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>&copy; {new Date().getFullYear()} Aquiles Allel Lillo</li>
        <li>
          Diseñado utilizando: {' '}
          <a href="http://html5up.net">HTML5 UP</a> & {' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;