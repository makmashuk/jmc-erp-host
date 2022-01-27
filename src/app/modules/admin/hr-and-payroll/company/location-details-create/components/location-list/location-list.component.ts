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

import { LocationDetails } from 'app/modules/admin/hr-and-payroll/company/location-details-create/types/location-details.types';

@Component({
    selector: 'location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent implements OnInit, OnDestroy {
    @Input()
    dataSources: Observable<LocationDetails[]>;

    @Output()
    sort: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<{ data: LocationDetails; type: string }> =
        new EventEmitter();

    @Output()
    delete: EventEmitter<{ data: LocationDetails; type: string }> =
        new EventEmitter();

    // @public accessors
    public displayedColumns: string[] = [
        'actions',
        'name',
        'name_bengali',
        'company_name',
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
    handleEditOperation(details: LocationDetails) {
        this.edit.emit({ data: details, type: 'edit' });
    }

    /**
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: LocationDetails) {
        this.delete.emit({ data: details, type: 'delete' });
    }

    /**
     * Handle sort operation
     */
    handleSort(event) {
        this.sort.emit(event);
    }
}
