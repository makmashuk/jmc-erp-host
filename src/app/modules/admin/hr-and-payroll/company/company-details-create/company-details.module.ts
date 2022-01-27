import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { CompanyDetailsComponent } from './view/company-details.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

@NgModule({
    declarations: [CompanyDetailsComponent, CompanyListComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CompanyDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class CompanyDetailsModule {}
