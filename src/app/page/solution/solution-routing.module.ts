import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiveComponent } from './five/five.component';
import { FourComponent } from './four/four.component';
import { OneComponent } from './one/one.component';
import { SixComponent } from './six/six.component';
import { SolutionComponent } from './solution.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {path:'', component:SolutionComponent,
  children:[
    {path:'', component:OneComponent},
    {path:'one', component:OneComponent},
    {path:'two', component:TwoComponent},
    {path:'three', component:ThreeComponent},
    {path:'four', component:FourComponent},
    {path:'five', component:FiveComponent},
    {path:'six', component:SixComponent},
  ]},
  // {path:'one', component:OneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule { }
