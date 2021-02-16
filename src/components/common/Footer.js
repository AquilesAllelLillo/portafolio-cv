import React from 'react';

import '../../assets/styles/sass/main.scss';

const Footer = () => (
  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>© &copy; {new Date().getFullYear()} Aquiles Allel Lillo</li>
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;