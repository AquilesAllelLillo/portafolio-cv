import React from 'react'
import loadable from '@loadable/component'

const SkillBars = loadable(() => import('react-skillbars'));

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
