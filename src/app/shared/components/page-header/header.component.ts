import {
    Component,
    Output,
    EventEmitter,
    Input,
    ViewChild,
    ElementRef,
    AfterViewInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
    selector: 'section-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class SectionHeaderComponent implements AfterViewInit {
    constructor() {}

    @Input()
    isLoading: boolean = false;

    @Input()
    breadcumb: string[];

    @Input()
    searchTitle: string;

    @Input()
    sectionTitle: string;

    @Output()
    openCreateModal: EventEmitter<any> = new EventEmitter();

    @Output()
    search: EventEmitter<any> = new EventEmitter();

    @ViewChild('searchInput') searchInput: ElementRef;

    ngAfterViewInit(): void {
        fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(
                map((event: any) => event.target.value),
                // Time in milliseconds between key events
                debounceTime(300),
                // If previous query is diffent from current
                distinctUntilChanged()
            )
            .subscribe((value) => {
                this.search.emit(value);
            });
    }

    openModal() {
        this.openCreateModal.emit();
    }
}
