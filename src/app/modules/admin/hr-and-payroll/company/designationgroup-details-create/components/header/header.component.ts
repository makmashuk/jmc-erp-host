import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    @Input()
    isLoading: boolean = false;

    @Output()
    openCreateModal: EventEmitter<any> = new EventEmitter();

    ngOnInit(): void {}

    openModal() {
        this.openCreateModal.emit();
    }
}
