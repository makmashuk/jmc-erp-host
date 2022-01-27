import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTransferComponent } from './employee-transfer/employee-transfer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmployeeTransferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: EmployeeTransferComponent,
    }]),
  ]
})
export class EmployeeTransferModule { }
