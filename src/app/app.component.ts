import { Component, OnInit} from '@angular/core';
import { slideInAnimation } from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slideInAnimation],
})
export class AppComponent {
title="angular"
   

constructor(){ }
 
}



