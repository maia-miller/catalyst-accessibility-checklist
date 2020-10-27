import React, { useState } from 'react';

import { Criterion, Subheading } from '../../assets/data/models';
import SubheadingComponent from '../../components/subheading/subheading';

import './accordion.scss';

interface Props {
  title: string,
  key: number,
  criteria: Array<Criterion>,
  subheadings?: Array<Subheading>
}


const Accordion = (props: Props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  return (
    <div className="accordion-wrapper" key={props.key}>
      <div className="accordion-title" onClick={() => {setIsAccordionOpen(!isAccordionOpen)}}>
        {props.title}
      </div>
      <div className="accordion-body-wrapper">
        { isAccordionOpen &&
          <div className="accordion-body">
            <ul>
              {props.criteria.map((criterion: Criterion, index: number) => {
                return (
                  <li key={index}>
                    {criterion.description} ({criterion.wcag})
                  </li>
                )
              })}
            </ul>
            {props.subheadings &&
              props.subheadings.length > 0 &&
              props.subheadings.map((subheading:
              Subheading, index: number) => {
              return (
                <SubheadingComponent subheading={subheading} key={index} />
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default Accordion;
