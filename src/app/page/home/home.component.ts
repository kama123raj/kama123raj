import { Component, OnInit } from '@angular/core';
import { AnimateDirective } from '../animate/animate.directive';
import {
  trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height:'*',
        opacity: 1,
      })),
      state('closed', style({
        height: '0',
        opacity: 0.8,
        overflow:'hidden'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }


}
