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
import { PayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/payroll-details-create/types/payroll-details.types';

@Component({
    selector: 'payroll-list',
    templateUrl: './payroll-list.component.html',
    styleUrls: ['./payroll-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayrollListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<PayrollDetails[]>;

    @Output()
    edit: EventEmitter<{ data: PayrollDetails; type: string }> =
        new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: PayrollDetails; type: string }> =
        new EventEmitter();

    // @public accessors
    public displayedColumns: string[] = [
        'actions',
        'name',
        'name_bengali',
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
    handleEditOperation(details: PayrollDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: PayrollDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }
}
