import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionListComponent } from './components/permission-list/permission-list.component';
import { RouterModule } from '@angular/router';
import { PermissionManageComponent } from './view/permission-manage/permission-manage.component';
import { FuseCardModule } from '@fuse/components/card';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { MaterialModule } from 'app/shared/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    PermissionListComponent,
    HeaderComponent,
    PermissionManageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PermissionManageComponent
  
      }
     
    ]),
    SharedModule,
    MaterialModule,
    FuseCardModule,
    FuseNavigationModule,
  ]
})
export class PermissionCreateModule { }
