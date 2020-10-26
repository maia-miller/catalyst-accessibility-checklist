import React, { useState } from 'react';

import { Criterion } from '../../assets/data/models'

import './checklist.scss';

interface Props {
  data: any
}

const Checklist = (props: Props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const accordions = props.data.map((element: any, index: number) => {
    return (
      <div className="accordion-wrapper" key={index}>
        <div className="accordion-title" onClick={() => {setIsAccordionOpen(!isAccordionOpen)}}>
          {element.title}
        </div>
        <div className="accordion-body-wrapper">
          { isAccordionOpen &&
            <div className="accordion-body">
              <ul>
                {element.criteria.map((criterion: Criterion, index: number) => {
                  return (
                    <li key={index}>
                      {criterion.description} ({criterion.wcag})
                    </li>
                  )
                })}
              </ul>
            </div>
          }
        </div>
      </div>
    )
  })

  return (
    <div className="checklist-content">
      { props.data.length > 0 &&
        accordions
      }
    </div>
  );
}

export default Checklist;
