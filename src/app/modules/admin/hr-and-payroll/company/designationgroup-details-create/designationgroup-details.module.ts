import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { DesignationGroupDetailsComponent } from './view/designationgroup-details.component';
import { HeaderComponent } from './components/header/header.component';
import { DesignationGroupListComponent } from './components/designationgroup-list/designationgroup-list.component';

@NgModule({
    declarations: [
        DesignationGroupDetailsComponent,
        HeaderComponent,
        DesignationGroupListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DesignationGroupDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class DesignationGroupDetailsModule {}
