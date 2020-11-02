import { Element } from '../models'

export const captcha: Element = {
  title: 'Captcha',
  criteria:
    [
      {
        description: 'Ensure there is an option to complete the CAPTCHA without vision (the alternative is usually an audo CAPTCHA, but modalities can differ)',
        wcag: '1.1.1',
      },
    ],
}
