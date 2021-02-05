import React, { Component } from "react"
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import '../../assets/styles/Sidebar.css'

export class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Interests', href: 'interests' },
        { content: 'Awards', href: 'awards' },
      ],
      isCollapsed: true,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  render() {
    const { tabs, isCollapsed } = this.state;
    return (
      <section id="sidebar">
      
				<div class="inner">
					<nav>
            
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#one">Who we are</a></li>
							<li><a href="#two">What we do</a></li>
							<li><a href="#three">Get in touch</a></li>
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <a href={`#${href}`}>
                      {content}
                    </a>
                  </li>
                );
              })}
						</ul>
            
            <button
              className={`navbar-toggler navbar-toggler-right ${
                isCollapsed ? 'collapsed' : ''
                }`}
              type="button"
              data-toggle="collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleNavbar}
            >
              Boton Misterioso
            </button>
            
					</nav>
				</div>
        <Link to="https://www.linkedin.com/in/aquiles-allel-lillo-882b5b61/">
          <FontAwesomeIcon icon={ faLinkedin } size="2x" />
        </Link> {' '}
        <Link to="https://github.com/AquilesAllelLillo">
          <FontAwesomeIcon icon={ faGithub } size="2x" />
        </Link>
			</section>
    );
  }
}

export default Sidebar
