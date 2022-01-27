import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { HeaderComponent } from './components/header/header.component';
import { SubSectionDetailsComponent } from './view/subsection-details.component';
import { SubSectionListComponent } from './components/subsection-list/subsection-list.component';

@NgModule({
    declarations: [
        SubSectionDetailsComponent,
        HeaderComponent,
        SubSectionListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SubSectionDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class SubSectionDetailsModule {}
