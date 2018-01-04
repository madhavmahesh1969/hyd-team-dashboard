import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransitionToRight() {
  return slideToRight();
}
export function routerTransitionToLeft() {
  return slideToLeft();
}
export function routerTransitionToBottom() {
  return slideToBottom();
}
export function routerTransitionToTop() {
  return slideToTop();
}

function slideToRight() {
  return trigger('routerTransitionToRight', [
    state('void', style({position:'absolute', width:'100%', left:'260px'}) ),
    state('*', style({position:'absolute', width:'100%', left:'260px'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransitionToLeft', [
    state('void', style({position:'absolute', width:'100%', left:'260px'}) ),
    state('*', style({position:'absolute', width:'100%', left:'260px'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransitionToBottom', [
    state('void', style({position:'absolute', width:'100%', height:'100%', left:'260px'}) ),
    state('*', style({position:'absolute', width:'100%', height:'100%', left:'260px'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransitionToTop', [
    state('void', style({position:'absolute', width:'100%', height:'100%', left:'260px'}) ),
    state('*', style({position:'absolute', width:'100%', height:'100%', left:'260px'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}