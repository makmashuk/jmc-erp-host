import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getEmployeeById } from 'app/store/selectors/employee/employee.selector';
import { EmployeeService } from '../../../employee-create/services/employee.service';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-family-information',
  templateUrl: './family-information.component.html',
  styleUrls: ['./family-information.component.scss']
})
export class FamilyInformationComponent implements OnInit {

  formInstance: any;
  general_type: string;
  isLoading: boolean;
  employee_id = this._route.parent.snapshot.paramMap.get('id');
  indexOfelement: any;
  modifiedDataId: any;
  dataSource = [];
  relationList$: any;
  employee: any;

  constructor(
    private _dialog: MatDialog,

    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _store: Store,
    private _employeeDetailsService: EmployeeDetailsService,
  ) { }

  // @Private Accessors
  private _dialogRef: MatDialogRef<any>;

  // @ViewChild FORM
  @ViewChild('createForm')
  createForm: TemplateRef<any>;

  // @ViewChild CONFIRM MODAL
  @ViewChild('confirmationModal')
  private _confirmationModal: TemplateRef<any>;




  ngOnInit(): void {

    this.initializeData();
    this._produceForm();
    this.relationList$ = this._employeeService.getRelatives();
      // GET EMPLOYEE ID AND NAME FROM STATE
      let id = parseInt(this._route.parent.snapshot.paramMap.get('id'));
      this._store.select(getEmployeeById(id)).subscribe(e=>{
        this.employee = e
      });

  }

  /**
    * Receive Data from Resolver
    *
    */

  initializeData() {
    this._route.data.subscribe(res => {
      this.dataSource = res.familyInfo.data;
      this.dataSource.reverse();
      // console.log(res);
    });
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


  /**
       * HANDLE SAVE OPERATION
       *
       */

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
  handleDelete(data, type, indexOfelement) {
    this.general_type = type;
    this.indexOfelement = indexOfelement;
    this.modifiedDataId = data.id;

    this._dialogRef = this._dialog.open(this._confirmationModal, {
      width: '512px',
      height: '206px',
    });
  }

  handleEdit(data, type, indexOfelement) {
    this.general_type = type;
    this.indexOfelement = indexOfelement;
    this.modifiedDataId = data.id;
    this.formInstance.patchValue(data);
    this.handleCreateModal();
  }


  onCreate() {
    const formInfo = this.formInstance.value;

    this.isLoading = true;
    formInfo.employee_id = this.employee_id;

    this._employeeDetailsService.createFamilyInfo(formInfo).subscribe(res => {
      
      this.dataSource.push(res);
      
      this.dataSource.reverse();
      this._dialogRef.close();
      this.handleCloseModal();
    });

  }

  onEdit() {
    const formInfo = this.formInstance.value;
    this.isLoading = true;
   
    this._employeeDetailsService.updateFamilyInfo(this.modifiedDataId, formInfo).subscribe(res => {
      this.dataSource[this.indexOfelement] = res.data;
      this._dialogRef.close();
      this.handleCloseModal();
    });
  }

  onDelete() {
    this.isLoading = true;

    this._employeeDetailsService.deleteFamilyInfo(this.modifiedDataId).subscribe(res => {

      this.dataSource.splice(this.indexOfelement, 1);
      this._dialogRef.close();
      this.handleCloseModal();
    });
  }

  /**
   * After Clicking modal the cancel button
   */
  onCancel() {
    this.formInstance.reset();
  }
  /**
     * Close Modal
     */
  handleCloseModal() {

    this._dialogRef.afterClosed().subscribe((result) => {
      console.log("close");
      this.formInstance.reset();
      this.isLoading = false;
      this.general_type = null;
      this.indexOfelement = null;
    });
  }




  // ------------------------------------------------------------------------------
  // @Private Methods
  // ------------------------------------------------------------------------------
  private _produceForm() {
    this.formInstance = this._formBuilder.group({
      name: [null, Validators.required],
      relation: [null, Validators.required],
      dob: [null, Validators.required],
      occupation: [null, Validators.required],
      contact_no: [null, Validators.required],
      remark: [null, Validators.required]
    });
  }


}
