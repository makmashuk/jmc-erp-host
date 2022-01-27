import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { SubPayrollDetailsComponent } from './view/subpayroll-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SubPayrollListComponent } from './components/subpayroll-list/subpayroll-list.component';

@NgModule({
    declarations: [
        SubPayrollDetailsComponent,
        HeaderComponent,
        SubPayrollListComponent,
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SubPayrollDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class SubPayrollDetailsModule {}
