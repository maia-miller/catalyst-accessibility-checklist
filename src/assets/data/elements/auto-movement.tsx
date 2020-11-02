import { Element } from '../models'

export const autoMovement: Element = {
  title: 'Automatic movement (moving, blinking, scrolling, updating, flashing)',
  criteria:
    [
      {
        description: 'if the moving/blinking/scrolling lasts longer than *5 sec*, the user must be able to pause/stop/hide the moving element',
        wcag: '2.2.2',
      },
      {
        description: 'Pause/stop/hide must be keyboard accessible',
        wcag: '2.1.1',
      },
      {
        description: 'content that gets automatically updated must be able to be paused/stopped/hidden or the user must be able to control the timing of the updates',
        wcag: '2.2.2',
      },
      {
        description: 'Automatic movement like scrolling should be gradual and keep the focus element on-screen',
        wcag: 'best practice',
      },
      {
        description: 'Automatically updating content: screen readers will only present the changed parts of an element. If you want a screen reader to be notified of an entire region, use atomic attribute: <div aria-atomic="true">:',
        wcag: '--',
      },
      {
        description: '• for example, you have a section that appears depending on what button the user clicks. The heading is always the same and the content changes, although some lines are the same. If <aria-atomic> is unset or set to “false”, the screen reader won’t read out the heading or the sentences in the content that is the same. If you want all of these things to be read out, <aria-atomic> must be set to “true”',
        wcag: '--',
      },
      {
        description: 'the section that appears should be appropriately/semantically identified (ie,  or )the section that appears should be appropriately/semantically identified (ie, <div role="dialog"> or <p>)',
        wcag: '--',
      },
      {
        description: 'for automatically updated content, set the role attribute: <div role="alert">, OR aria-live attribute: <div aria-live="polite">',
        wcag: '--',
      },
      {
        description: '• the attributes are placed on elements that *already exist* in the DOM, not that are created on the update',
        wcag: '--',
      },
      {
        description: '• <aria-live="polite">:  Any region which receives updates that are important for the user to receive, but not so rapid as to be annoying, should receive this attribute. The screen reader will speak changes whenever the user is idle. Set to “off” if the updates are not important or if the updates are so rapid that it would be annoying for the user to hear the updates',
        wcag: '--',
      },
    ],
}
