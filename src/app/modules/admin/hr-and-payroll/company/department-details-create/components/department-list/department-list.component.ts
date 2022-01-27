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

import { DepartmentDetails } from 'app/modules/admin/hr-and-payroll/company/department-details-create/types/department-details.types';

@Component({
    selector: 'department-list',
    templateUrl: './department-list.component.html',
    styleUrls: ['./department-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<DepartmentDetails[]>;

    @Output()
    edit: EventEmitter<{ data: DepartmentDetails; type: string }> =
        new EventEmitter();

    @Output()
    sort: EventEmitter<any> = new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: DepartmentDetails; type: string }> =
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
    handleEditOperation(details: DepartmentDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: DepartmentDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }

    /**
     * Handle sort operation
     */
    handleSort(event) {
        this.sort.emit(event);
    }
}
