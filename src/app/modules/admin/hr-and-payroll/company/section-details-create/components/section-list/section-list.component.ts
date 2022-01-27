import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';

//@Types

import { SectionDetails } from 'app/modules/admin/hr-and-payroll/company/section-details-create/types/section-details.types';

@Component({
    selector: 'section-list',
    templateUrl: './section-list.component.html',
    styleUrls: ['./section-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<SectionDetails[]>;

    @Output()
    edit: EventEmitter<{ data: SectionDetails; type: string }> =
        new EventEmitter();

    @Output()
    sort: EventEmitter<any> = new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: SectionDetails; type: string }> =
        new EventEmitter();

    // @public accessors
    public displayedColumns: string[] = [
        'actions',
        'name',
        'name_bengali',
        'company_name',
        'location_name',
        'unit_name',
        'division_name',
        'department_name',
        'remark',
        'status',
    ];

    constructor() {}

    //---------------------------------------------------------------------------------
    // @Life cycle hooks
    //---------------------------------------------------------------------------------
    ngOnInit(): void {}

    ngOnDestroy() {}

    //---------------------------------------------------------------------------------
    // @Public Methods
    //---------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    /**
     * Handle Edit Operation
     *
     * @param details
     */
    handleEditOperation(details: SectionDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: SectionDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }

    /**
     * Handle sort operation
     */
    handleSort(event) {
        this.sort.emit(event);
    }
}
