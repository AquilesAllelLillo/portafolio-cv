import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Sobre mi', href: 'about' },
    { content: 'Who we are', href: 'one' },
    { content: 'Proyectos', href: 'proyectos' },
    { content: 'Contacto', href: 'contact' },
    { content: 'About', href: 'about' },
    { content: 'Experiencia', href: 'experience' },
    { content: 'Educación', href: 'education' },
    { content: 'Skills', href: 'skills' },
    { content: 'Interests', href: 'interests' },
    { content: 'Awards', href: 'awards' },
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;