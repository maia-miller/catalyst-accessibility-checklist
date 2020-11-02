import { Element } from '../models'

export const audio: Element = {
  title: 'Audio',
  criteria:
    [
      {
        description: 'try to avoid having audio play immediately and automatically on page load',
        wcag: 'best practice',
      },
      {
        description: 'if you do have audio play automatically, you must provide means to stop/pause/mute/adjust volume of audio that automatically plays on a page for more than 3secs',
        wcag: '1.4.2',
      },
      {
        description: 'mechanism to do so must be achievable by keyboard alone',
        wcag: '2.1.1, 1.4.2',
      },
      {
        description: 'mechanism shouldn’t impact audio system-wide, just on the page',
        wcag: '1.4.2',
      },
      {
        description: 'mechanism must be accessible by keyboard shortcut/navigation',
        wcag: '2.1.1',
      },
      {
        description: 'audio must not autoplay',
        wcag: '--',
      },
    ],
}
