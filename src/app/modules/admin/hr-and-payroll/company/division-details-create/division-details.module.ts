import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { DivisionDetailsComponent } from './view/division-details.component';
import { HeaderComponent } from './components/header/header.component';
import { DivisionListComponent } from './components/division-list/division-list.component';

@NgModule({
    declarations: [
        DivisionDetailsComponent,
        HeaderComponent,
        DivisionListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DivisionDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class DivisionDetailsModule {}
