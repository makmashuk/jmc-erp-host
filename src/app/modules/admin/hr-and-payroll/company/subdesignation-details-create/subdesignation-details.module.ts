import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { SubDesignationDetailsComponent } from './view/subdesignation-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SubDesignationListComponent } from './components/subdesignation-list/subdesignation-list.component';

@NgModule({
    declarations: [
        SubDesignationDetailsComponent,
        HeaderComponent,
        SubDesignationListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SubDesignationDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class SubDesignationDetailsModule {}
