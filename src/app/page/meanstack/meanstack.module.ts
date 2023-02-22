import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeanstackRoutingModule } from './meanstack-routing.module';
import { MeanstackComponent } from './meanstack.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    MeanstackComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    MeanstackRoutingModule
  ]
})
export class MeanstackModule { }
