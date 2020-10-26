import { Element } from '../models'

export const button: Element = {
  title: 'Button',
  criteria:
    [
      {
        description: 'you can include  to generic buttons to prevent the browser from trying to submit a form when clicked',
        wcag: 'best practice',
      },
      {
        description: 'button must state disabled state',
        wcag: 'TBC 4.1.2',
      },
      {
        description: 'custom buttons must be able to be made active with enter AND spacebar, and must declare state. See “Overall (custom elements)” if you are creating a button without the HTML',
        wcag: '4.1.2',
      },
      {
        description: 'the down part of pressing a button should NOT trigger the event. The event trigger should be when the button is released (the up event)',
        wcag: '2.5.2',
      },
      {
        description: 'the name attribute must match the visible label of the button if one exists',
        wcag: 'TBC if 2.5.3 applies here',
      },
      {
        description: 'it must be visually apparent when a button is in focus, ie when the user tabs onto a button',
        wcag: '2.4.7',
      },
      {
        description: 'buttons that play the same function across different pages should have the same label+name',
        wcag: '3.2.4',
      },
    ],
  subheadings:
    [
      {
        content: {
          title: 'Icons as buttons',
          criteria:
          [
            {
              description: 'Icons as buttons: <br> 1) Wrapping element has aria-label (acts as button title for screen readers) if there is no text on button <br> 2) Icon itself is hidden <br> 3) Use CSS on  to insert icon <br> generally, we hide icons from screen readers and provide other ways for them to access the necessary info',
              wcag: 'TBD',
              code: '<button aria-label="Find out more"><i aria-hidden="true"></i></button>',
              code2: '<button><i aria-hidden="true"></i>Find out more</button> [TBC]'
            },
          ]
        }
      }
    ],
  resources:
    [
      { title: 'Resource 1', link: 'url'}
    ],
  codeSamples:
    [
      {
        title: 'Icon as button',
        output: 'img src string goes here',
        code: '<button aria-label="Find out more"><i aria-hidden="true"></i></button>',
      }
    ]
}
