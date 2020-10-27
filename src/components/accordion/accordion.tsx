import React, { useState } from 'react';

import { Criterion, Subheading } from '../../assets/data/models';
import SubheadingComponent from '../../components/subheading/subheading';

import './accordion.scss';

interface Props {
  accordionType: string,
  title: string,
  key: number,
  criteria: Array<Criterion>,
  subheadings?: Array<Subheading>
}

const Accordion = (props: Props) => {
  const { accordionType, title, key, criteria, subheadings } = props
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  return (
    <div className={accordionType + ' accordion-wrapper'} key={key}>

      <div className="accordion-title" onClick={() => {setIsAccordionOpen(!isAccordionOpen)}}>
        {title}
      </div>

      <div className="accordion-body-wrapper">
        { isAccordionOpen &&
          <div className="accordion-body">

            <ul>
              {criteria.map((criterion: Criterion, index: number) => {
                return (
                  <li key={index}>
                    {criterion.description} ({criterion.wcag})
                  </li>
                )
              })}
            </ul>

            {subheadings &&
              subheadings.length > 0 &&
              subheadings.map((subheading:
              Subheading, index: number) => {
              return (
                <Accordion
                  accordionType={'accordion-subheading'}
                  title={subheading.title}
                  key={index}
                  criteria={subheading.criteria}
                />
              )
            })}

          </div>
        }
      </div>
    </div>
  )
}

export default Accordion;
