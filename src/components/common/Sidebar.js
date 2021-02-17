import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Sobre mi', href: 'about' },
    { content: 'Who we are', href: 'one' },
    { content: 'Skills', href: 'skills' },
    { content: 'Experiencia', href: 'experience' },
    { content: 'Educación', href: 'education' },
    { content: 'Proyectos', href: 'projects' },
    { content: 'Contacto', href: 'contact' },
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