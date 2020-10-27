import React, { useState } from 'react';

import { Criterion, Subheading, Resource, CodeSample } from '../../assets/data/models';

import './accordion.scss';

interface Props {
  accordionType: string,
  title: string,
  key: number,
  criteria?: Array<Criterion>,
  subheadings?: Array<Subheading>,
  resources?: Array<Resource>,
  codeSamples?: Array<CodeSample>
  code?: string
}

const Accordion = (props: Props) => {
  const { accordionType, title, key, criteria, subheadings, resources, codeSamples, code } = props
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  return (
    <div className={accordionType + ' accordion-wrapper'} key={`${accordionType}-${key}`}>

      <div className="accordion-title" onClick={() => {setIsAccordionOpen(!isAccordionOpen)}}>
        {title}
      </div>

      <div className="accordion-body-wrapper">
        { isAccordionOpen &&
          <div className="accordion-body">

            <ul>
              {criteria && criteria.map((criterion: Criterion, index: number) => {
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

            {resources && resources.length > 0 &&
              resources.map((resource) => {
                return (
                  <li>
                    <a href={resource.link}>
                      {resource.title}
                    </a>
                    {resource.description && (
                      `: ${resource.description}`
                    )}
                  </li>
                )
              })
            }

            {codeSamples && codeSamples.length > 0 &&
              codeSamples.map((codeSample: CodeSample, index: number) => {
                return (
                  <Accordion
                    accordionType={'accordion-code'}
                    title={codeSample.title}
                    key={index}
                    code={codeSample.code}
                  />
                )
              })
            }

            {code &&
              <div className="code">
                {code}
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Accordion;
