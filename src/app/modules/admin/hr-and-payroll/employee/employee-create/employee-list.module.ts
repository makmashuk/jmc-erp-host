import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BasicInfoComponent } from '../employee-details/components/basic-info/basic-info.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { SidenavComponent } from '../employee-details/view/sidenav.component';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { EmployeeManageComponent } from './view/employee-manage/employee-manage.component';
import { HeaderComponent } from './components/header/header.component';
import { FuseCardModule } from '@fuse/components/card';



@NgModule({
  declarations: [
    EmployeeListComponent,
    BasicInfoComponent,
    EmployeeDetailsComponent,
    SidenavComponent,
    EmployeeManageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeManageComponent,
  
      },
      {
        path: ':id',
        loadChildren: () =>
        import(
            'app/modules/admin/hr-and-payroll/employee/employee-details/employee-details.module'
        ).then((m) => m.EmployeeDetailsModule),
      },
     
    ]),
    SharedModule,
    MaterialModule,
    FuseCardModule,
    FuseNavigationModule,
  ]
})
export class EmployeeListModule { }
