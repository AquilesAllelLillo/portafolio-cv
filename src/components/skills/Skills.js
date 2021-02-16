import React from 'react'

import { frontendSkills, frontendSkillsColors } from './SkillsData'
import SkillsList from './SkillsList'
import { Container } from 'react-bootstrap'

export default function Skills() {
  
  return (
    <section id="skills" className="wrapper">
      <div className="skills">
        <h1>List de skills...</h1>
        <Container className="skills">
          <h2>Front-End Skills</h2>
          <SkillsList skills={ frontendSkills } colors={ frontendSkillsColors } />
        </Container>
      </div>
    </section>
  )
}
