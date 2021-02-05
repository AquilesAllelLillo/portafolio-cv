import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="copyright">
        <li>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>&copy; Proyecto portafolio con Gatsby</li>
      </ul>
    </div>
  </div>
)

export default Footer
