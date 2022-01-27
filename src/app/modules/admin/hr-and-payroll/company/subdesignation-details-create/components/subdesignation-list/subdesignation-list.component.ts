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

import { SubDesignationDetails } from 'app/modules/admin/hr-and-payroll/company/subdesignation-details-create/types/subdesignation-details.types';

@Component({
    selector: 'subdesignation-list',
    templateUrl: './subdesignation-list.component.html',
    styleUrls: ['./subdesignation-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubDesignationListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<SubDesignationDetails[]>;

    @Output()
    edit: EventEmitter<{ data: SubDesignationDetails; type: string }> =
        new EventEmitter();

    @Output()
    sort: EventEmitter<any> = new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: SubDesignationDetails; type: string }> =
        new EventEmitter();

    // @public accessors
    public displayedColumns: string[] = [
        'actions',
        'name',
        'name_bengali',
        'designation_name',
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
    handleEditOperation(details: SubDesignationDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: SubDesignationDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }

    /**
     * Handle sort operation
     */
    handleSort(event) {
        this.sort.emit(event);
    }
}
