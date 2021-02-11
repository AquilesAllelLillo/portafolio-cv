import React from 'react'
import Link from 'gatsby'

import '../../assets/styles/components/Header.css'

const Header = () => (
  <header id="header">
		<Link to="/">Home</Link>
		<a href="#" className="title">Hyperspace</a>
		<nav>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#" className="active">Generic</a></li>
				<li><a href="#">Elements</a></li>
			</ul>
		</nav>
	</header>
)

export default Header