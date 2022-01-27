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

import { SubSectionDetails } from 'app/modules/admin/hr-and-payroll/company/subsection-details-create/types/subsection-details.types';

@Component({
    selector: 'subsection-list',
    templateUrl: './subsection-list.component.html',
    styleUrls: ['./subsection-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSectionListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<SubSectionDetails[]>;

    @Output()
    edit: EventEmitter<{ data: SubSectionDetails; type: string }> =
        new EventEmitter();

    @Output()
    sort: EventEmitter<any> = new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: SubSectionDetails; type: string }> =
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
        'section_name',
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
    handleEditOperation(details: SubSectionDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: SubSectionDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }

    /**
     * Handle sort operation
     */
    handleSort(event) {
        this.sort.emit(event);
    }
}
