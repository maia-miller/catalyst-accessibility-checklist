import { Element } from '../models'

export const ariaDescribedby: Element = {
  title: 'aria-describedby, aria-labelledby',
  criteria:
    [
      {
        description: 'the value for <aria-describedby> or <aria-labelledby> isn’t the label itself; rather, it is a reference to a <p> or <span> with the same id which in turn is the actual description/label',
        wcag: '--',
      },
      {
        description: 'aria-describedby not that common, used when the description of the element and the element itself aren’t immediately next to each other',
        wcag: '1.1.1',
      },
      {
        description: 'to use: • create element to be described, with aria-describedby attribute: <button aria-describedby="btnDesc">Click here</button>; • create a <p> with a unique id that matches the aria-describedby. This <p> is the description of the element:<p id="btnDesc">Some instructions about the element</p>; • whitespaces are not allowed in ID’s',
        wcag: '1.3.1',
      },
    ],
}
