import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';



@NgModule({
  declarations: [
    SolutionComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
  ],
  imports: [
    CommonModule,
    SolutionRoutingModule,
     ]
})
export class SolutionModule { }
