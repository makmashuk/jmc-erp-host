import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from 'app/store/reducers';
import { effects } from 'app/store/effects';
import { environment } from '../../environments/environment';

@NgModule({
    declarations: [],
    imports: [
        // Ngrx store
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot(effects),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
    exports: [StoreModule],
})
export class AppStoreModule {}
