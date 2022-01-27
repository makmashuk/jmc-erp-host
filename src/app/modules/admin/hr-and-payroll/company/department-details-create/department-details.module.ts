import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { DepartmentDetailsComponent } from './view/department-details.component';
import { HeaderComponent } from './components/header/header.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';

@NgModule({
    declarations: [
        DepartmentDetailsComponent,
        HeaderComponent,
        DepartmentListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DepartmentDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class DepartmentDetailsModule {}
