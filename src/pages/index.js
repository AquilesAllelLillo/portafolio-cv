import React from 'react';

//import SEO from '../components/SEO/Seo';
import Layout   from '../components/common/Layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Capabilities from '../components/capabilities/Capabilities';
import Contact      from '../components/contact/Contact';
import Skills       from '../components/skills/Skills';
import Education    from '../components/education/Education';
import Experience   from '../components/experience/Experience';

const IndexPage = () =>
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <Introduction />
      <Skills />
      <Experience />
      <Education />
      <Capabilities />
      <Contact />
    </div>

    <Footer />
  </Layout>

export default IndexPage;
