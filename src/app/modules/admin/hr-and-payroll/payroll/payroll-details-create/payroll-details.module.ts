import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { PayrollDetailsComponent } from './view/payroll-details.component';
import { HeaderComponent } from './components/header/header.component';
import { PayrollListComponent } from './components/payroll-list/payroll-list.component';

@NgModule({
    declarations: [
        PayrollDetailsComponent,
        HeaderComponent,
        PayrollListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: PayrollDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class PayrollDetailsModule {}
