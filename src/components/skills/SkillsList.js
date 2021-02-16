import React from 'react'
import SkillBars from 'react-skillbars'

export default function SkillsList(props) {
  const { skills, colors } = props
  return (
    <div>
      <SkillBars 
        skills={ skills } 
        colors={ colors }
        animationDelay={0} 
        animationDuration={1500} 
      />
    </div>
  )
}
