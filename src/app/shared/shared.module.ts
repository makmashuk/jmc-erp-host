import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionHeaderComponent } from './components/page-header/header.component';
import { BtnLoaderComponent } from './components/btn-loader/btn-loader.component';

@NgModule({
    declarations: [BtnLoaderComponent, SectionHeaderComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BtnLoaderComponent,
        SectionHeaderComponent,
    ],
})
export class SharedModule {}
