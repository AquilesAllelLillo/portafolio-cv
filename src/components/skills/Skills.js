import React from 'react'

import { frontendSkills, frontendSkillsColors } from './DataSkills'
import SkillsList from './SkillsList'
import { Container } from 'react-bootstrap'

export default function Skills() {
  
  return (
    <div className="skills">
      <h1>List de skills...</h1>
      <Container className="skills">
        <h2>Front-End Skills</h2>
        <SkillsList Skills={ frontendSkills } colors={ frontendSkillsColors } />
      </Container>
    </div>
  )
}
