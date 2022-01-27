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
    CreateNewSubPayrollDetails,
    DeleteSubPayrollDetails,
    GetListOfSubPayrolls,
    ResetMetaData,
    UpdateSubPayrollDetails,
} from 'app/store/actions/payroll/subpayroll-details.actions';

// @selector
import {
    getSubPayrollCount,
    getSubPayrollList,
    isSubPayrollCreated,
    isSubPayrollDeleted,
    isSubPayrollLoading,
    isSubPayrollUpdated,
} from 'app/store/selectors/payroll/subpayroll-details.selector';

// @types
import { SubPayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/subpayroll-details-create/types/subpayroll-details.types';
import { getPayrollList } from 'app/store/selectors/payroll/payroll-details.selector';
import { GetListOfPayrolls } from 'app/store/actions/payroll/payroll-details.actions';

@Component({
    selector: 'app-subpayroll-details',
    templateUrl: './subpayroll-details.component.html',
    styleUrls: ['./subpayroll-details.component.scss'],
})
export class SubPayrollDetailsComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    // @Public Accessors
    public general_type: string;
    public formInstance: FormGroup;
    public selectedData: any;
    public isLoading: boolean = false;
    public payrollList$: Observable<any>;
    public isDataLoading: boolean = false;
    public dataLoading$: Observable<boolean>;
    public totalDataCount$: Observable<number>;
    public dataSource$: Observable<SubPayrollDetails[]>;

    // @Private Accessors
    private _dialogRef: MatDialogRef<any>;

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
        this.totalDataCount$ = this._store.select(getSubPayrollCount);
        this.dataLoading$ = this._store.select(isSubPayrollLoading);
    }

    //---------------------------------------------------------------------------------
    // @Life cycle hooks
    //---------------------------------------------------------------------------------
    ngOnInit(): void {
        // Init Form
        this._produceForm();

        this.dataSource$ = this._store.select(getSubPayrollList);

        this.payrollList$ = this._store.select(getPayrollList);

        // this._store.dispatch(new GetListOfSubPayrolls(1, 10));
        this._store.dispatch(new GetListOfSubPayrolls());

        this._store.dispatch(new GetListOfPayrolls());
    }

    ngAfterViewInit() {}

    ngOnDestroy() {}
    // ------------------------------------------------------------------------------
    // @Public Methods
    // ------------------------------------------------------------------------------

    getNewData() {
        this._store.dispatch(
            new GetListOfSubPayrolls(
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

        this._store.dispatch(new CreateNewSubPayrollDetails(formInfo));

        this.handleCloseModal();
    }

    onEdit() {
        const updated_data = {
            id: this.selectedData.id,
            ...this.formInstance.value,
        };

        this.isLoading = true;

        this._store.dispatch(new UpdateSubPayrollDetails(updated_data));

        this.handleCloseModal();
    }

    onDelete() {
        const id = this.selectedData.id;
        this.isLoading = true;
        this._store.dispatch(new DeleteSubPayrollDetails(id));
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
                .select(isSubPayrollUpdated)
                .subscribe((isUpdated: boolean) => {
                    if (isUpdated) {
                        this._dialogRef.close();
                    }
                });
        } else if (this.general_type === 'delete') {
            this._store
                .select(isSubPayrollDeleted)
                .subscribe((isDeleted: boolean) => {
                    if (isDeleted) {
                        this._dialogRef.close();
                    }
                });
        } else {
            this._store
                .select(isSubPayrollCreated)
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
            payroll_id: [null, [Validators.required]],
            remark: [''],
            status: [true],
        });
    }
}
