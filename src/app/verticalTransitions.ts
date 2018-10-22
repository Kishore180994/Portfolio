import { Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';

export const verticalTransitions = 

    trigger('verticalTransitions', [
        state('* <=> *', style({
      
        })),
          // Initial state of new route
          transition(':enter',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(-100%)'
            })),
  
          // move page off screen right on leave
          transition(':leave',
            animate('500ms ease',
              style({
                position: 'fixed',
                width:'100%',
                transform: 'translateX(100%)'
              })
            )),
  
          // move page in screen from left to right
          transition(':enter',
            animate('5s ease',
              style({
                opacity: 1,
                transform: 'translateX(100%)'
              })
            )),
        ])
    