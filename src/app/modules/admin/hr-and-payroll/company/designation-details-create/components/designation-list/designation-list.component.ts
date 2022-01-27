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

import { DesignationDetails } from 'app/modules/admin/hr-and-payroll/company/designation-details-create/types/designation-details.types';

@Component({
    selector: 'designation-list',
    templateUrl: './designation-list.component.html',
    styleUrls: ['./designation-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignationListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<DesignationDetails[]>;

    @Output()
    edit: EventEmitter<{ data: DesignationDetails; type: string }> =
        new EventEmitter();

    @Output()
    sort: EventEmitter<any> = new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: DesignationDetails; type: string }> =
        new EventEmitter();

    // @public accessors
    public displayedColumns: string[] = [
        'actions',
        'name',
        'name_bengali',
        'designation_group_name',
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
    handleEditOperation(details: DesignationDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: DesignationDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }

    /**
     * Handle sort operation
     */
    handleSort(event) {
        this.sort.emit(event);
    }
}
