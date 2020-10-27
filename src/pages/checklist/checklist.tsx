import React from 'react';

import Accordion from '../../components/accordion/accordion'

interface Props {
  data: any
}

const Checklist = (props: Props) => {
  return (
    <div className="checklist-content">
      { props.data.length > 0 &&
        props.data.map((element: any, index: number) => {
          return (
            <Accordion
              accordionType={'accordion-element'}
              title={element.title}
              key={index}
              criteria={element.criteria}
              subheadings={element.subheadings}
            />
          )
        })
      }
    </div>
  );
}

export default Checklist;
