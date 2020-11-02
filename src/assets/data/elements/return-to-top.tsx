import { Element } from '../models'

export const returnToTop: Element = {
  title: 'Return to top',
  criteria:
    [
      {
        description: 'screen reader and keyboard/tabbing focus moves along with visual focus',
        wcag: '1.3.2, 2.4.3',
      },
      {
        description: '     elements that are interactive (like links) receive focus. Try not to give focus to static elements',
        wcag: '1.3.2, 2.4.3',
      },
      {
        description: '     set tab focus with attribute tab-index: <div tab-index=1>',
        wcag: '1.3.2, 2.4.3',
      },
    ],
}
