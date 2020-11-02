import { Element } from '../models'

export const carousel: Element = {
  title: 'Carousel',
  criteria:
    [
      {
        description: 'don’t use if possible: there are a lot of accessibility challenges with carousels (plus they’re ineffective marketing tools in general)',
        wcag: 'best practice',
      },
      {
        description: '• screen reader users need to be notified that they’ve entered into a carousel, which slide they are currently on, they (+ keyboard users) need access to the content of the slide, and need to have access to the controls',
        wcag: '--',
      },
      {
        description: 'if you must create a carousel, inspect this page’s carousel https://w3c.github.io/aria-practices/examples/carousel/carousel-1.html for an accessible example',
        wcag: '--',
      },
      {
        description: '• user must be able to flip through carousel images via keyboard navigation keys:',
        wcag: '2.1.1',
      },
      {
        description: 'A) Dots under carousel that can tab through, or',
        wcag: '--',
      },
      {
        description: 'B) Prev/Next arrows on left+right of carousel to tab through',
        wcag: '--',
      },
      {
        description: '• user must be able to pause/stop/hide or control the timing of the carousel changes',
        wcag: '--',
      },
      {
        description: '• carousels must indicate its role and state, and its total number of slides',
        wcag: '4.1.2',
      },
    ],
}
