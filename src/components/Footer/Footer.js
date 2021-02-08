import React from 'react'

import '../../assets/styles/components/Footer.css'

const Footer = () => (
  <footer id="footer" className="wrapper alt">
		<div className="inner">
			<ul className="menu">
        <li>&copy; Proyecto portafolio con Gatsby</li>
				<li>&copy; Untitled. All rights reserved.</li>
        <li>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
			</ul>
		</div>
	</footer>
)

export default Footer
