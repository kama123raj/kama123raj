import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";


export const slideInAnimation = trigger('fadeInOut', [
    transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: -100,
            width: '100%',
            opacity: 0,
          }),
        ],),
        // Animate the new page in
        query(':enter', [
          animate(600, style({ opacity: 1, left:0 })),
        ],),


      ]),

    
  ]);
  