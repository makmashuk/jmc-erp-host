import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// @Modules
import { SharedModule } from 'app/shared/shared.module';
import { MaterialModule } from 'app/shared/material.module';

// @Entry Component
import { LocationDetailsComponent } from './view/location-details.component';
import { LocationListComponent } from './components/location-list/location-list.component';

@NgModule({
    declarations: [LocationDetailsComponent, LocationListComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LocationDetailsComponent,
            },
        ]),
        SharedModule,
        MaterialModule,
    ],
})
export class LocationDetailsModule {}
