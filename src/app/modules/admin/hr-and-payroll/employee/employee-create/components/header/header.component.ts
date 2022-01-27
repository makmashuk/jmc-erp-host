import { Component, OnInit, Output, EventEmitter, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


    constructor() { }

    @Input()
    isLoading: boolean = false;

    @Output()
    openCreateModal: EventEmitter<any> = new EventEmitter();
    @Output()
    filterModal: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void { }

    openModal() {
        this.openCreateModal.emit();
    }

    handleFilterModal() {
        this.filterModal.emit();
    }
}
