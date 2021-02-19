import React from 'react'

import { educationElements } from './EducationElements' 

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Education = () => {
  
  const styles = {
    verticalElement: {
      color: '#000',
    }
  }

  return (
    <section id="education" className="wrapper style5 fullscreen fade-up">
      <div className="inner">
        <h1>Educación</h1>
        <p>
          Estudios y certificaciones obtenidas.
        </p>

        <Timeline lineColor={'#ddd'}>
          {educationElements.map((element, index) => {
            return (
              <TimelineItem 
                key={index} 
                dateText={element.date}
                style={{ color: '#76bb7f' }}
                dateInnerStyle={{ background: '#76bb7f' }}
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
              </TimelineItem>
            )
          })}
        </Timeline>

      </div>
    </section>
  );
}

export default Education;