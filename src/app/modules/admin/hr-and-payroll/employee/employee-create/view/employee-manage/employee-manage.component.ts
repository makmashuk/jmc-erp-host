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
import { IEmployee, IEmployeeState } from '../../models/employee.types';
import {
    getEmployeeCount,
    getEmployeeList,
    isEmployeeCreated,
    isEmployeeDeleted,
    isEmployeeLoading,
    isEmployeeUpdated,
} from 'app/store/selectors/employee/employee.selector';
import {
    CreateNewEmployee,
    DeleteEmployee,
    DeleteEmployeeSuccess,
    GetListOfEmployees,
    ResetMetaData,
    UpdateEmployee,
} from 'app/store/actions/employee/employee.actions';
import { getCompanyList } from 'app/store/selectors/company/company-details.selector';
import { getLocationList } from 'app/store/selectors/company/location-details.selector';
import { getUnitList } from 'app/store/selectors/company/unit-details.selector';
import { Router } from '@angular/router';
import { GetListOfLocations } from 'app/store/actions/company/location-details.actions';
import { getDivisionList } from 'app/store/selectors/company/division-details.selector';
import { getDepartmentList } from 'app/store/selectors/company/department-details.selector';
import { GetListOfDepartments } from 'app/store/actions/company/department-details.actions';
import { GetListOfDivisions } from 'app/store/actions/company/division-details.actions';
import { GetListOfUnits } from 'app/store/actions/company/unit-details.actions';
import { GetListOfCompanies } from 'app/store/actions/company/company-details.actions';
import { EmployeeService } from '../../services/employee.service';

@Component({
    selector: 'app-employee-manage',
    templateUrl: './employee-manage.component.html',
    styleUrls: ['./employee-manage.component.scss'],
})
export class EmployeeManageComponent
    implements OnInit, AfterViewInit, OnDestroy
{
    // @Public Accessors
    public general_type: string;
    public formInstance: FormGroup;
    public filterFormInstance: FormGroup;
    public selectedData: any;
    public isLoading: boolean = false;
    public isDataLoading: boolean = false;
    public dataLoading$: Observable<boolean>;
    public totalDataCount$: Observable<number>;
    public dataSource$: Observable<IEmployee[]>;

    // @Private Accessors
    private _dialogRef: MatDialogRef<any>;

    // @ViewChild
    @ViewChild('createForm')
    createForm: TemplateRef<any>;

    @ViewChild('filterForm')
    filterForm: TemplateRef<any>;

    @ViewChild(MatPaginator) private _paginator: MatPaginator;

    @ViewChild('confirmationModal')
    private _confirmationModal: TemplateRef<any>;


    employeeStatus:['Active', 'Inactive'];
    companyList$: Observable<unknown>;
    locationList$: Observable<unknown>;
    unitList$: Observable<unknown>;
    divisionList$: Observable<unknown>;
    departmentList$: Observable<unknown>;
    employeeList$: Observable<IEmployee[]>;
    weekDaysList$: Observable<unknown>;

    constructor(
        private _store: Store,
        private _dialog: MatDialog,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _employeeService: EmployeeService
    ) {
        this.totalDataCount$ = this._store.select(getEmployeeCount);
        this.dataLoading$ = this._store.select(isEmployeeLoading);
    }

    //---------------------------------------------------------------------------------
    // @Life cycle hooks
    //---------------------------------------------------------------------------------
    ngOnInit(): void {
        // Init Form
        this._produceForm();

        this.dataSource$ = this._store.select(getEmployeeList);

        this.employeeList$ = this._store.select(getEmployeeList);

        this.companyList$ = this._store.select(getCompanyList);

        this._store.dispatch(new GetListOfCompanies(1, 10));

        this.locationList$ = this._store.select(getLocationList);

        this.unitList$ = this._store.select(getUnitList);

        this.divisionList$ = this._store.select(getDivisionList);

        this.departmentList$ = this._store.select(getDepartmentList);

        this.weekDaysList$ = this._employeeService.getWeekDays();

        this._store.dispatch(new GetListOfEmployees(1, 10));
    }

    ngAfterViewInit() {}

    ngOnDestroy() {}
    // ------------------------------------------------------------------------------
    // @Public Methods
    // ------------------------------------------------------------------------------

    getNewData() {
        this._store.dispatch(
            new GetListOfEmployees(
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

    onChangeUnitOption(key: string) {
        this._store.dispatch(
            new GetListOfDivisions(null, null, {
                company: this.formInstance.get('company_id').value,
                location: this.formInstance.get('location_id').value,
                unit: this.formInstance.get(key).value,
            })
        );
    }

    onChangeDivisionOption(key: string) {
        this._store.dispatch(
            new GetListOfDepartments(null, null, {
                company: this.formInstance.get('company_id').value,
                location: this.formInstance.get('location_id').value,
                unit: this.formInstance.get('unit_id').value,
                division: this.formInstance.get(key).value,
            })
        );
    }

    /**
     * Filter Modal
     *
     */

    handleFilterModal() {
        this._dialogRef = this._dialog.open(this.filterForm, {
            width: '800px',
        });
    }
    handleFilterOperation(){
        console.log(this.filterFormInstance.value);
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

    handleMoreInfo({ data }) {
        this._router.navigateByUrl(`employee/${data.id}`);
    }
    onCreate() {
        const formInfo = this.formInstance.value;

        this.isLoading = true;

        this._store.dispatch(new CreateNewEmployee(formInfo));

        this.handleCloseModal();
    }

    onEdit() {
        const updated_data = {
            id: this.selectedData.id,
            ...this.formInstance.value,
        };

        this.isLoading = true;

        this._store.dispatch(new UpdateEmployee(updated_data));

        this.handleCloseModal();
    }
    onDelete() {
        const id = this.selectedData.id;
        this.isLoading = true;
        this._store.dispatch(new DeleteEmployee(id));
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
                .select(isEmployeeUpdated)
                .subscribe((isUpdated: boolean) => {
                    if (isUpdated) {
                        this._dialogRef.close();
                    }
                });
        } else if (this.general_type === 'delete') {
            this._store
                .select(isEmployeeDeleted)
                .subscribe((isDeleted: boolean) => {
                    if (isDeleted) {
                        this._dialogRef.close();
                    }
                });
        } else {
            this._store
                .select(isEmployeeCreated)
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
            full_name: ['', [Validators.required]],
            company_id: ['', [Validators.required]],
            location_id: ['', [Validators.required]],
            unit_id: ['', [Validators.required]],
            division_id: ['', [Validators.required]],
            department_id: ['', [Validators.required]],
            section_id: ['', [Validators.required]],
            sub_section_id: ['', [Validators.required]],
            designation_group_id: ['', [Validators.required]],
            designation_id: ['', [Validators.required]],
            sub_designation_id: ['', [Validators.required]],
            functional_superior_id: ['', [Validators.required]],
            admin_superior_id: ['', [Validators.required]],
            employee_grade: ['', [Validators.required]],
            weekend: ['', [Validators.required]],

            additional_weekend: ['', [Validators.required]],
            over_duty: ['', [Validators.required]],
            attendance_info_restricted: [true],
            salary_info_restricted: [true],
            joining_date: ['', [Validators.required]],
            confirmation_date: ['', [Validators.required]],
            salary_type: ['', [Validators.required]],
            reference_name: ['', [Validators.required]],
            remark: ['', [Validators.required]],
            status: [false],
        });
        this.filterFormInstance = this._formBuilder.group({
            name_id: [''],
            company_id: [''],
            location_id: [''],
            unit_id: [''],
            division_id: [''],
            department_id: [''],
            section_id: [''],
            sub_section_id: [''],
            designation_group_id: [''],
            designation_id: [''],
            status: ['active'],
        });


    }
}
