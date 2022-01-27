import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { UnitDetailsComponent } from './view/unit-details.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';

@NgModule({
    declarations: [UnitDetailsComponent, UnitListComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: UnitDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class UnitDetailsModule {}
