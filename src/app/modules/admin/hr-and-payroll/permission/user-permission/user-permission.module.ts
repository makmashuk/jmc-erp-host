import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { UserPermissionManageComponent } from './view/user-permission-manage/user-permission-manage.component';
import { FuseCardModule } from '@fuse/components/card';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddPermissionComponent } from './components/add-permission/add-permission.component';
import { PermissionResolver } from './components/resolvers/permission.resolver';



@NgModule({
  declarations: [
    AddPermissionComponent,
    HeaderComponent,
    EmployeeListComponent,
    UserPermissionManageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserPermissionManageComponent
  
      },
      {
        path: ':id',
        component: AddPermissionComponent,
        resolve: {
          assignedPermission: PermissionResolver
        }
  
      }
     
    ]),
    SharedModule,
    MaterialModule,
    FuseCardModule,
    FuseNavigationModule,
  ],
  providers:[
    PermissionResolver
  ]

})
export class UserPermissionModule { }
