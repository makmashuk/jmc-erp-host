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
    CreateNewPayrollDetails,
    DeletePayrollDetails,
    GetListOfPayrolls,
    ResetMetaData,
    UpdatePayrollDetails,
} from 'app/store/actions/payroll/payroll-details.actions';

// @selector
import {
    getPayrollCount,
    getPayrollList,
    isPayrollCreated,
    isPayrollDeleted,
    isPayrollLoading,
    isPayrollUpdated,
} from 'app/store/selectors/payroll/payroll-details.selector';

// @types
import { PayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/payroll-details-create/types/payroll-details.types';

@Component({
    selector: 'app-payroll-details',
    templateUrl: './payroll-details.component.html',
    styleUrls: ['./payroll-details.component.scss'],
})
export class PayrollDetailsComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    // @Public Accessors
    public general_type: string;
    public formInstance: FormGroup;
    public selectedData: any;
    public isLoading: boolean = false;
    public payrollGroupList$: Observable<any>;
    public isDataLoading: boolean = false;
    public dataLoading$: Observable<boolean>;
    public totalDataCount$: Observable<number>;
    public dataSource$: Observable<PayrollDetails[]>;

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
        this.totalDataCount$ = this._store.select(getPayrollCount);
        this.dataLoading$ = this._store.select(isPayrollLoading);
    }

    //---------------------------------------------------------------------------------
    // @Life cycle hooks
    //---------------------------------------------------------------------------------
    ngOnInit(): void {
        // Init Form
        this._produceForm();

        this.dataSource$ = this._store.select(getPayrollList);

        // this._store.dispatch(new GetListOfPayrolls(1, 10));
        this._store.dispatch(new GetListOfPayrolls());
    }

    ngAfterViewInit() {}

    ngOnDestroy() {}
    // ------------------------------------------------------------------------------
    // @Public Methods
    // ------------------------------------------------------------------------------

    getNewData() {
        this._store.dispatch(
            new GetListOfPayrolls(
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

        this._store.dispatch(new CreateNewPayrollDetails(formInfo));

        this.handleCloseModal();
    }

    onEdit() {
        const updated_data = {
            id: this.selectedData.id,
            ...this.formInstance.value,
        };

        this.isLoading = true;

        this._store.dispatch(new UpdatePayrollDetails(updated_data));

        this.handleCloseModal();
    }

    onDelete() {
        const id = this.selectedData.id;
        this.isLoading = true;
        this._store.dispatch(new DeletePayrollDetails(id));
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
                .select(isPayrollUpdated)
                .subscribe((isUpdated: boolean) => {
                    if (isUpdated) {
                        this._dialogRef.close();
                    }
                });
        } else if (this.general_type === 'delete') {
            this._store
                .select(isPayrollDeleted)
                .subscribe((isDeleted: boolean) => {
                    if (isDeleted) {
                        this._dialogRef.close();
                    }
                });
        } else {
            this._store
                .select(isPayrollCreated)
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
            remark: [''],
            status: [true],
        });
    }
}
