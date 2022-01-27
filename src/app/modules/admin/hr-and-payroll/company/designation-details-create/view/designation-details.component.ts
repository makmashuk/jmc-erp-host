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

// @Actions
import {
    CreateNewDesignationDetails,
    DeleteDesignationDetails,
    GetListOfDesignations,
    ResetMetaData,
    UpdateDesignationDetails,
} from 'app/store/actions/company/designation-details.actions';

// @selector
import {
    getDesignationCount,
    getDesignationList,
    isDesignationCreated,
    isDesignationDeleted,
    isDesignationLoading,
    isDesignationUpdated,
} from 'app/store/selectors/company/designation-details.selector';

// @types
import { DesignationDetails } from 'app/modules/admin/hr-and-payroll/company/designation-details-create/types/designation-details.types';
import { GetListOfCompanies } from 'app/store/actions/company/company-details.actions';
import { getDesignationGroupList } from 'app/store/selectors/company/designationgroup-details.selector';
import { GetListOfDesignationGroups } from 'app/store/actions/company/designationgroup-details.actions';

@Component({
    selector: 'app-designation-details',
    templateUrl: './designation-details.component.html',
    styleUrls: ['./designation-details.component.scss'],
})
export class DesignationDetailsComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    // @Public Accessors
    public general_type: string;
    public formInstance: FormGroup;
    public selectedData: any;
    public isLoading: boolean = false;
    public designationGroupList$: Observable<any>;
    public isDataLoading: boolean = false;
    public dataLoading$: Observable<boolean>;
    public totalDataCount$: Observable<number>;
    public dataSource$: Observable<DesignationDetails[]>;

    // @Private Accessors
    private _dialogRef: MatDialogRef<any>;

    // @ViewChild
    @ViewChild('createForm')
    createForm: TemplateRef<any>;

    @ViewChild(MatPaginator) private _paginator: MatPaginator;

    @ViewChild('confirmationModal')
    private _confirmationModal: TemplateRef<any>;
    private _searchInputValue: string;

    constructor(
        private _store: Store,
        private _dialog: MatDialog,
        private _formBuilder: FormBuilder
    ) {
        this.totalDataCount$ = this._store.select(getDesignationCount);
        this.dataLoading$ = this._store.select(isDesignationLoading);
    }

    //---------------------------------------------------------------------------------
    // @Life cycle hooks
    //---------------------------------------------------------------------------------
    ngOnInit(): void {
        // Init Form
        this._produceForm();

        this.dataSource$ = this._store.select(getDesignationList);

        this.designationGroupList$ = this._store.select(
            getDesignationGroupList
        );

        // this._store.dispatch(new GetListOfDesignations(1, 10));
        this._store.dispatch(new GetListOfDesignations());

        this._store.dispatch(new GetListOfDesignationGroups());
    }

    ngAfterViewInit() {}

    ngOnDestroy() {}
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
            new GetListOfDesignations(
                this._paginator?.pageIndex + 1,
                this._paginator?.pageSize,
                null,
                value
            )
        );
    }

    onSort(data) {
        let sortBy = null;
        if (data.active === 'designation_group_name') {
            sortBy = 'designation_group.name';
        } else {
            sortBy = data.active.replace(/\_/, '.');
        }
        const sortDirection = data.direction.toUpperCase();

        // Reset back to the first page
        this._paginator.pageIndex = 0;

        this._store.dispatch(
            new GetListOfDesignations(
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
            new GetListOfDesignations(
                this._paginator.pageIndex + 1,
                this._paginator.pageSize
            )
        );
    }

    /**
     * Open Create/Update Modal
     *
     */

    handleCreateModal() {
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
        this.handleCreateModal();
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

        this._store.dispatch(new CreateNewDesignationDetails(formInfo));

        this.handleCloseModal();
    }

    onEdit() {
        const updated_data = {
            id: this.selectedData.id,
            ...this.formInstance.value,
        };

        this.isLoading = true;

        this._store.dispatch(new UpdateDesignationDetails(updated_data));

        this.handleCloseModal();
    }

    onDelete() {
        const id = this.selectedData.id;
        this.isLoading = true;
        this._store.dispatch(new DeleteDesignationDetails(id));
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
                .select(isDesignationUpdated)
                .subscribe((isUpdated: boolean) => {
                    if (isUpdated) {
                        this._dialogRef.close();
                    }
                });
        } else if (this.general_type === 'delete') {
            this._store
                .select(isDesignationDeleted)
                .subscribe((isDeleted: boolean) => {
                    if (isDeleted) {
                        this._dialogRef.close();
                    }
                });
        } else {
            this._store
                .select(isDesignationCreated)
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
            designation_group_id: [null, [Validators.required]],
            remark: [''],
            status: [true],
        });
    }
}
