import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { DesignationDetailsComponent } from './view/designation-details.component';
import { HeaderComponent } from './components/header/header.component';
import { DesignationListComponent } from './components/designation-list/designation-list.component';

@NgModule({
    declarations: [
        DesignationDetailsComponent,
        HeaderComponent,
        DesignationListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DesignationDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class DesignationDetailsModule {}
