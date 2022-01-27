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

import { SubPayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/subpayroll-details-create/types/subpayroll-details.types';

@Component({
    selector: 'subpayroll-list',
    templateUrl: './subpayroll-list.component.html',
    styleUrls: ['./subpayroll-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubPayrollListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<SubPayrollDetails[]>;

    @Output()
    edit: EventEmitter<{ data: SubPayrollDetails; type: string }> =
        new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: SubPayrollDetails; type: string }> =
        new EventEmitter();

    // @public accessors
    public displayedColumns: string[] = [
        'actions',
        'name',
        'name_bengali',
        'payroll_name',
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
    handleEditOperation(details: SubPayrollDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: SubPayrollDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }
}
