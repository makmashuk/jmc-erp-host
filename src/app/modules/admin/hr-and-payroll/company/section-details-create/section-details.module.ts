import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { SectionDetailsComponent } from './view/section-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionListComponent } from './components/section-list/section-list.component';

@NgModule({
    declarations: [
        SectionDetailsComponent,
        HeaderComponent,
        SectionListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SectionDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class SectionDetailsModule {}
