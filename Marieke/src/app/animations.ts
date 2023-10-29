import { animate, state, transition, trigger, style } from '@angular/animations'

export let fade = trigger('fade', [
    state('void', style({opacity:0})),
    transition(':enter, :leave', [
      animate(2000)
    ])
  ]);


  //   trigger('fade', [
  //     state('void', style({opacity:0})),
  //     transition('void => *', [
  //       //style({backgroundColor: 'black', opacity: 0}),
  //       animate(2000)
  //       //animate(2000, style({backgroundColor: 'white', opacity:1}))
  //     ]),
  //     transition('* => void', [
  //       //style({backgroundColor: 'black', opacity: 0}),
  //       animate(2000)
  //     ])
  //   ])