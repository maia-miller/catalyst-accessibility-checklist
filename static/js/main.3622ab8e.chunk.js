(this["webpackJsonpaccessibility-checklist"]=this["webpackJsonpaccessibility-checklist"]||[]).push([[0],[,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),s=i(1),n=i.n(s),o=i(4),c=i.n(o),r=(i(10),i(2)),l=(i(11),function e(t){var i=t.accordionType,n=t.title,o=t.key,c=t.criteria,l=t.subheadings,d=t.resources,u=t.codeSamples,h=t.code,p=Object(s.useState)(!1),b=Object(r.a)(p,2),m=b[0],g=b[1];return Object(a.jsxs)("div",{className:i+" accordion-wrapper",children:[Object(a.jsx)("div",{className:"accordion-title",onClick:function(){g(!m)},children:n}),Object(a.jsx)("div",{className:"accordion-body-wrapper",children:m&&Object(a.jsxs)("div",{className:"accordion-body",children:[Object(a.jsx)("ul",{children:c&&c.map((function(e,t){return Object(a.jsxs)("li",{children:[e.description," (",e.wcag,")"]},t)}))}),l&&l.length>0&&l.map((function(t,i){return Object(a.jsx)(e,{accordionType:"accordion-subheading",title:t.title,criteria:t.criteria},i)})),d&&d.length>0&&d.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{href:e.link,children:e.title}),e.description&&": ".concat(e.description)]})})),u&&u.length>0&&u.map((function(t,i){return Object(a.jsx)(e,{accordionType:"accordion-code",title:t.title,code:t.code},i)})),h&&Object(a.jsx)("div",{className:"code",children:h})]})})]},"".concat(i,"-").concat(o))}),d=function(e){return Object(a.jsx)("div",{className:"checklist-content",children:e.data.length>0&&e.data.map((function(e,t){return Object(a.jsx)(l,{accordionType:"accordion-element",title:e.title,criteria:e.criteria,subheadings:e.subheadings,resources:e.resources,codeSamples:e.codeSamples},t)}))})},u=[{title:"aria-describedby, aria-labelledby",criteria:[{description:"the value for <aria-describedby> or <aria-labelledby> isn\u2019t the label itself; rather, it is a reference to a <p> or <span> with the same id which in turn is the actual description/label",wcag:"--"},{description:"aria-describedby not that common, used when the description of the element and the element itself aren\u2019t immediately next to each other",wcag:"1.1.1"},{description:'to use: \u2022 create element to be described, with aria-describedby attribute: <button aria-describedby="btnDesc">Click here</button>; \u2022 create a <p> with a unique id that matches the aria-describedby. This <p> is the description of the element:<p id="btnDesc">Some instructions about the element</p>; \u2022 whitespaces are not allowed in ID\u2019s',wcag:"1.3.1"}]},{title:"Audio",criteria:[{description:"try to avoid having audio play immediately and automatically on page load",wcag:"best practice"},{description:"if you do have audio play automatically, you must provide means to stop/pause/mute/adjust volume of audio that automatically plays on a page for more than 3secs",wcag:"1.4.2"},{description:"mechanism to do so must be achievable by keyboard alone",wcag:"2.1.1, 1.4.2"},{description:"mechanism shouldn\u2019t impact audio system-wide, just on the page",wcag:"1.4.2"},{description:"mechanism must be accessible by keyboard shortcut/navigation",wcag:"2.1.1"},{description:"audio must not autoplay",wcag:"--"}]},{title:"Automatic movement (moving, blinking, scrolling, updating, flashing)",criteria:[{description:"if the moving/blinking/scrolling lasts longer than *5 sec*, the user must be able to pause/stop/hide the moving element",wcag:"2.2.2"},{description:"Pause/stop/hide must be keyboard accessible",wcag:"2.1.1"},{description:"content that gets automatically updated must be able to be paused/stopped/hidden or the user must be able to control the timing of the updates",wcag:"2.2.2"},{description:"Automatic movement like scrolling should be gradual and keep the focus element on-screen",wcag:"best practice"},{description:'Automatically updating content: screen readers will only present the changed parts of an element. If you want a screen reader to be notified of an entire region, use atomic attribute: <div aria-atomic="true">:',wcag:"--"},{description:"\u2022 for example, you have a section that appears depending on what button the user clicks. The heading is always the same and the content changes, although some lines are the same. If <aria-atomic> is unset or set to \u201cfalse\u201d, the screen reader won\u2019t read out the heading or the sentences in the content that is the same. If you want all of these things to be read out, <aria-atomic> must be set to \u201ctrue\u201d",wcag:"--"},{description:'the section that appears should be appropriately/semantically identified (ie,  or )the section that appears should be appropriately/semantically identified (ie, <div role="dialog"> or <p>)',wcag:"--"},{description:'for automatically updated content, set the role attribute: <div role="alert">, OR aria-live attribute: <div aria-live="polite">',wcag:"--"},{description:"\u2022 the attributes are placed on elements that *already exist* in the DOM, not that are created on the update",wcag:"--"},{description:'\u2022 <aria-live="polite">:  Any region which receives updates that are important for the user to receive, but not so rapid as to be annoying, should receive this attribute. The screen reader will speak changes whenever the user is idle. Set to \u201coff\u201d if the updates are not important or if the updates are so rapid that it would be annoying for the user to hear the updates',wcag:"--"}]},{title:"Button",criteria:[{description:"you can include  to generic buttons to prevent the browser from trying to submit a form when clicked",wcag:"best practice"},{description:"button must state disabled state",wcag:"TBC 4.1.2"},{description:"custom buttons must be able to be made active with enter AND spacebar, and must declare state. See \u201cOverall (custom elements)\u201d if you are creating a button without the HTML",wcag:"4.1.2"},{description:"the down part of pressing a button should NOT trigger the event. The event trigger should be when the button is released (the up event)",wcag:"2.5.2"},{description:"the name attribute must match the visible label of the button if one exists",wcag:"TBC if 2.5.3 applies here"},{description:"it must be visually apparent when a button is in focus, ie when the user tabs onto a button",wcag:"2.4.7"},{description:"buttons that play the same function across different pages should have the same label+name",wcag:"3.2.4"}],subheadings:[{title:"Icons as buttons",criteria:[{description:"Icons as buttons: <br> 1) Wrapping element has aria-label (acts as button title for screen readers) if there is no text on button <br> 2) Icon itself is hidden <br> 3) Use CSS on  to insert icon <br> generally, we hide icons from screen readers and provide other ways for them to access the necessary info",wcag:"TBD",code:'<button aria-label="Find out more"><i aria-hidden="true"></i></button>',code2:'<button><i aria-hidden="true"></i>Find out more</button> [TBC]'}]}],resources:[{title:"Resource 1",link:"url"}],codeSamples:[{title:"Icon as button",output:"img src string goes here",code:'<button aria-label="Find out more"><i aria-hidden="true"></i></button>'}]},{title:"Captcha",criteria:[{description:"Ensure there is an option to complete the CAPTCHA without vision (the alternative is usually an audo CAPTCHA, but modalities can differ)",wcag:"1.1.1"}]},{title:"Carousel",criteria:[{description:"don\u2019t use if possible: there are a lot of accessibility challenges with carousels (plus they\u2019re ineffective marketing tools in general)",wcag:"best practice"},{description:"\u2022 screen reader users need to be notified that they\u2019ve entered into a carousel, which slide they are currently on, they (+ keyboard users) need access to the content of the slide, and need to have access to the controls",wcag:"--"},{description:"if you must create a carousel, inspect this page\u2019s carousel https://w3c.github.io/aria-practices/examples/carousel/carousel-1.html for an accessible example",wcag:"--"},{description:"\u2022 user must be able to flip through carousel images via keyboard navigation keys:",wcag:"2.1.1"},{description:"A) Dots under carousel that can tab through, or",wcag:"--"},{description:"B) Prev/Next arrows on left+right of carousel to tab through",wcag:"--"},{description:"\u2022 user must be able to pause/stop/hide or control the timing of the carousel changes",wcag:"--"},{description:"\u2022 carousels must indicate its role and state, and its total number of slides",wcag:"4.1.2"}]},{title:"Return to top",criteria:[{description:"screen reader and keyboard/tabbing focus moves along with visual focus",wcag:"1.3.2, 2.4.3"},{description:"     elements that are interactive (like links) receive focus. Try not to give focus to static elements",wcag:"1.3.2, 2.4.3"},{description:"     set tab focus with attribute tab-index: <div tab-index=1>",wcag:"1.3.2, 2.4.3"}]}],h=(i(12),function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),i=t[0],n=t[1],o=Object(s.useState)(""),c=Object(r.a)(o,2),l=c[0],h=c[1];return Object(s.useEffect)((function(){if(n([]),l.length>0&&" "!==l){var e=[];u.forEach((function(t){var i=t.criteria.map((function(e){return e.description}));"".concat(t.title," ").concat(i.toString()).toLowerCase().indexOf(l.toLowerCase())>-1&&e.push(t)})),n(e)}}),[l]),Object(a.jsx)("div",{className:"mainpage-wrapper",children:Object(a.jsxs)("main",{children:[Object(a.jsxs)("div",{className:"mainpage-hero",children:[Object(a.jsx)("h1",{children:"Accessibility Checklist"}),Object(a.jsxs)("div",{className:"search-input-wrapper",children:[Object(a.jsx)("p",{children:"Search for an element"}),Object(a.jsx)("input",{type:"text",name:"search",onChange:function(e){h(e.target.value)}})]}),Object(a.jsx)("div",{className:"view-all-wrapper",children:Object(a.jsxs)("span",{children:["or ",Object(a.jsx)("button",{onClick:function(){n(u)},children:"view all elements"})]})})]}),Object(a.jsx)("div",{className:"checklist-wrapper",children:i&&Object(a.jsx)(d,{data:i})})]})})}),p=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,14)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;i(e),a(e),s(e),n(e),o(e)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),p()}],[[13,1,2]]]);
//# sourceMappingURL=main.3622ab8e.chunk.js.map