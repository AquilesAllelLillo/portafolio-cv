import React from 'react'

import { experienceElements } from './ExperienceElements' 

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Experience = () => {
  
  const styles = {
    verticalElement: {
      color: '#000',
    }
  }

  return (
    <section id="experience" className="wrapper style4 fullscreen fade-up">
      <div className="inner">
        <h1>Experiencia</h1>
        <p>
          Experiencia profesional y autodidacta, aplicando tecnologías junto a lenguajes de programación.
        </p>

        <Timeline lineColor={'#ddd'}>
          {experienceElements.map((element, index) => {
            return (
              <TimelineItem 
                key={index} 
                dateText={element.date}
                style={{ color: '#e86971' }}
                bodyContainerStyle={{
                  background: '#ddd',
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                }}
              >
                <h3 style={{ color: '#61b8ff' }} >{element.title}</h3>
                <h4 style={{ color: '#61b8ff' }} >{element.institution}</h4>
                <p style={styles.verticalElement}>
                  {element.description}
                </p>
                <p>
                  {element.description2}
                </p>
              </TimelineItem>
            )
          })}
        </Timeline>

      </div>
    </section>
  );
}

export default Experience;