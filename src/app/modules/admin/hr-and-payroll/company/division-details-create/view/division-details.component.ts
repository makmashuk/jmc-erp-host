import {
    Component,
    OnInit,
    ViewChild,
    TemplateRef,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SubSink } from 'subsink';
// @Actions
import {
    CreateNewDivisionDetails,
    DeleteDivisionDetails,
    GetListOfDivisions,
    ResetMetaData,
    UpdateDivisionDetails,
} from 'app/store/actions/company/division-details.actions';

// @selector
import {
    getDivisionCount,
    getDivisionList,
    isDivisionCreated,
    isDivisionDeleted,
    isDivisionLoading,
    isDivisionUpdated,
} from 'app/store/selectors/company/division-details.selector';

// @types
import { DivisionDetails } from 'app/modules/admin/hr-and-payroll/company/division-details-create/types/division-details.types';
import { GetListOfCompanies } from 'app/store/actions/company/company-details.actions';
import { getCompanyList } from 'app/store/selectors/company/company-details.selector';
import { GetListOfLocations } from 'app/store/actions/company/location-details.actions';
import { getLocationList } from 'app/store/selectors/company/location-details.selector';
import { GetListOfUnits } from 'app/store/actions/company/unit-details.actions';
import { getUnitList } from 'app/store/selectors/company/unit-details.selector';

@Component({
    selector: 'app-division-details',
    templateUrl: './division-details.component.html',
    styleUrls: ['./division-details.component.scss'],
})
export class DivisionDetailsComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    // @Public Accessors
    public general_type: string;
    public formInstance: FormGroup;
    public selectedData: any;
    public isLoading: boolean = false;
    public companyList$: Observable<any>;
    public locationList$: Observable<any>;
    public unitList$: Observable<any>;
    public isDataLoading: boolean = false;
    public dataLoading$: Observable<boolean>;
    public totalDataCount$: Observable<number>;
    public dataSource$: Observable<DivisionDetails[]>;

    // @Private Accessors
    private _dialogRef: MatDialogRef<any>;
    private _subs = new SubSink();
    private _searchInputValue: string;

    // @ViewChild
    @ViewChild('createForm')
    createForm: TemplateRef<any>;

    @ViewChild(MatPaginator) private _paginator: MatPaginator;

    @ViewChild('confirmationModal')
    private _confirmationModal: TemplateRef<any>;

    constructor(
        private _store: Store,
        private _dialog: MatDialog,
        private _formBuilder: FormBuilder
    ) {
        this.totalDataCount$ = this._store.select(getDivisionCount);
        this.dataLoading$ = this._store.select(isDivisionLoading);
    }

    //---------------------------------------------------------------------------------
    // @Life cycle hooks
    //---------------------------------------------------------------------------------
    ngOnInit(): void {
        // Init Form
        this._produceForm();

        this.dataSource$ = this._store.select(getDivisionList);

        this.companyList$ = this._store.select(getCompanyList);

        this.locationList$ = this._store.select(getLocationList);

        this.unitList$ = this._store.select(getUnitList);

        this._store.dispatch(new GetListOfDivisions(1, 10));

        this._store.dispatch(new GetListOfCompanies(null, null));
    }

    ngAfterViewInit() {}

    ngOnDestroy() {
        this._subs.unsubscribe();
    }
    // ------------------------------------------------------------------------------
    // @Public Methods
    // ------------------------------------------------------------------------------
    /**
     * on search
     */
    onSearch(value: string): void {
        this._searchInputValue = value;

        // Reset back to the first page
        if (this._paginator?.pageIndex && this._paginator?.pageIndex > 0) {
            this._paginator.pageIndex = 0;
        }

        this._store.dispatch(
            new GetListOfDivisions(
                this._paginator?.pageIndex + 1,
                this._paginator?.pageSize,
                null,
                value
            )
        );
    }

    onSort(data) {
        const sortBy = data.active.replace(/\_/, '.');
        const sortDirection = data.direction.toUpperCase();

        // Reset back to the first page
        this._paginator.pageIndex = 0;

        this._store.dispatch(
            new GetListOfDivisions(
                this._paginator.pageIndex + 1,
                this._paginator.pageSize,
                null,
                this._searchInputValue,
                sortBy,
                sortDirection
            )
        );
    }

    getNewData() {
        this._store.dispatch(
            new GetListOfDivisions(
                this._paginator.pageIndex + 1,
                this._paginator.pageSize
            )
        );
    }

    onChangeOption(key: string) {
        this._store.dispatch(
            new GetListOfLocations(null, null, {
                company: this.formInstance.get(key).value,
            })
        );
    }

    onChangeLocationOption(key: string) {
        this._store.dispatch(
            new GetListOfUnits(null, null, {
                company: this.formInstance.get('company_id').value,
                location: this.formInstance.get(key).value,
            })
        );
    }

    /**
     * Open Create/Update Modal
     *
     */

    handleCreateModal(type?: string) {
        if (type === 'edit') {
            this.onChangeOption('company_id');
            this.onChangeLocationOption('location_id');
        }
        this._dialogRef = this._dialog.open(this.createForm, {
            width: '800px',
        });
    }

    handleSavingOperation() {
        if (this.general_type === 'edit') {
            this.onEdit();
        } else if (this.general_type === 'delete') {
            this.onDelete();
        } else {
            this.onCreate();
        }
    }

    /**
     * Open Delete Confirm Modal
     *
     * @param id
     */
    handleDeleteModal({ data, type }) {
        this.general_type = type;
        this.selectedData = { ...data };

        this._dialogRef = this._dialog.open(this._confirmationModal, {
            width: '512px',
            height: '206px',
        });
    }

    handleEdit({ data, type }) {
        this.general_type = type;
        this.selectedData = { ...data };
        this.formInstance.patchValue(data);
        this.handleCreateModal('edit');
    }

    onCreate() {
        const formInfo = this.formInstance.value;

        for (let key in formInfo) {
            if (!formInfo[key]) {
                formInfo[key] = '';
            }
        }

        this.formInstance.get('status').setValue(true);

        this.isLoading = true;

        this._store.dispatch(new CreateNewDivisionDetails(formInfo));

        this.handleCloseModal();
    }

    onEdit() {
        const updated_data = {
            id: this.selectedData.id,
            ...this.formInstance.value,
        };

        this.isLoading = true;

        this._store.dispatch(new UpdateDivisionDetails(updated_data));

        this.handleCloseModal();
    }

    onDelete() {
        const id = this.selectedData.id;
        this.isLoading = true;
        this._store.dispatch(new DeleteDivisionDetails(id));
        this.handleCloseModal();
    }

    /**
     * After Clicking modal the cancel button
     */
    onCancel() {
        this.formInstance.reset();
        this.formInstance.get('status').setValue(true);
    }

    /**
     * Close Modal
     */
    handleCloseModal() {
        if (this.general_type === 'edit') {
            this._store
                .select(isDivisionUpdated)
                .subscribe((isUpdated: boolean) => {
                    if (isUpdated) {
                        this._dialogRef.close();
                    }
                });
        } else if (this.general_type === 'delete') {
            this._store
                .select(isDivisionDeleted)
                .subscribe((isDeleted: boolean) => {
                    if (isDeleted) {
                        this._dialogRef.close();
                    }
                });
        } else {
            this._store
                .select(isDivisionCreated)
                .subscribe((isCreated: boolean) => {
                    if (isCreated) {
                        this._dialogRef.close();
                    }
                });
        }

        this._dialogRef.afterClosed().subscribe((result) => {
            this.formInstance.reset();
            this.isLoading = false;
            this.general_type = null;
            this._store.dispatch(new ResetMetaData());
        });
    }

    // ------------------------------------------------------------------------------
    // @Private Methods
    // ------------------------------------------------------------------------------
    private _produceForm() {
        this.formInstance = this._formBuilder.group({
            name: ['', [Validators.required]],
            name_bengali: [''],
            company_id: [null, [Validators.required]],
            location_id: [null, [Validators.required]],
            unit_id: [null, [Validators.required]],
            remark: [''],
            status: [true],
        });
    }
}
