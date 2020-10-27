import React from 'react';

// import { Criterion, Subheading } from '../../assets/data/models';
// import SubheadingComponent from '../../components/subheading/subheading';
import Accordion from '../../components/accordion/accordion'

// import './checklist.scss';

interface Props {
  data: any
}


const Checklist = (props: Props) => {
  // const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  // const accordions = props.data.map((element: any, index: number) => {
  //   return (
  //     <div className="accordion-wrapper" key={index}>
  //       <div className="accordion-title" onClick={() => {setIsAccordionOpen(!isAccordionOpen)}}>
  //         {element.title}
  //       </div>
  //       <div className="accordion-body-wrapper">
  //         { isAccordionOpen &&
  //           <div className="accordion-body">
  //             <ul>
  //               {element.criteria.map((criterion: Criterion, index: number) => {
  //                 return (
  //                   <li key={index}>
  //                     {criterion.description} ({criterion.wcag})
  //                   </li>
  //                 )
  //               })}
  //             </ul>
  //             {element.subheadings.length > 0 && element.subheadings.map((subheading:
  //               Subheading, index: number) => {
  //               return (
  //                 <SubheadingComponent subheading={subheading} key={index} />
  //               )
  //             })}
  //           </div>
  //         }
  //       </div>
  //     </div>
  //   )
  // })

  return (
    <div className="checklist-content">
      { props.data.length > 0 &&
        props.data.map((element: any, index: number) => {
          return (
            <Accordion
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
