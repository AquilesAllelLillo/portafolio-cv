import React from 'react'

import { fullSkills } from './SkillsData'
import SkillsList from './SkillsList'
import { Container } from 'react-bootstrap'

export default function Skills() {
  
  return (
    <section id="skills" className="wrapper style6 fullscreen fade-up">
      <div className="inner">
        <h1>Skills</h1>
        <p>
          Lenguajes de programación y herramientas
        </p>
        <Container className="skills">
          <h2>Front-End Skills</h2>
          <SkillsList skills={ fullSkills } />
        </Container>
      </div>
    </section>
  )
}
