import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IEmployee } from 'app/modules/admin/hr-and-payroll/employee/employee-create/models/employee.types';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IPremission } from '../../models/permission.types';
import { PermissionService } from '../../services/permission.service';

@Component({
  selector: 'app-permission-manage',
  templateUrl: './permission-manage.component.html',
  styleUrls: ['./permission-manage.component.scss']
})
export class PermissionManageComponent implements OnInit {
  // @Public Accessors
  public general_type: string;
  public formInstance: FormGroup;

  public selectedData: any;

  //Loader Observable 
  dataLoading$: Observable<any>;
  btnloader$: Observable<any>;

  public dataSource$ : Observable<IPremission[]>;

  // @Private Accessors
  private _dialogRef: MatDialogRef<any>;

  // @ViewChild
  @ViewChild('createForm')
  createForm: TemplateRef<any>;

  @ViewChild('filterForm')
  filterForm: TemplateRef<any>;

  @ViewChild('confirmationModal')
  private _confirmationModal: TemplateRef<any>;
  
  constructor(
    private _store: Store,
    private _dialog: MatDialog,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _service: PermissionService
  ) { }

  ngOnInit(): void {
    this._produceForm();
    this.getInitialData();

  }
  getInitialData() {
    this.dataSource$ = this._service.getAll();
    this.dataLoading$ = this._service.dataloader$;
  }




  handleCreateModal() {
    this._dialogRef = this._dialog.open(this.createForm, {
      width: '800px',
    });
  }

  handleSavingOperation() {
    if (this.general_type === 'delete') {
      this.onDelete();
    } else {
      this.onCreate();
    }
  }
  onCreate() {

    this._service.create(this.formInstance.value);
    this.btnloader$ = this._service.btnloader$;

    this._service.closeModal$.subscribe(
      (res) => {
        if(res){
          this.handleCloseModal();
        }
      }
    )


  }
  onDelete() {
    const id = this.selectedData.id;
    this.btnloader$ = this._service.btnloader$;
    this._service.delete(id);
    this._service.closeModal$.subscribe(
      (res) => {
        if(res){
          this.handleCloseModal();
        }
      }
    )

  }


  /**
   * Open Delete Confirm Modal
   *
   * @param id
   */
  handleDeleteModal({ data, type }) {
    this.general_type = type;
    // console.log(data);
    this.selectedData = { ...data };

    this._dialogRef = this._dialog.open(this._confirmationModal, {
      width: '512px',
      height: '206px',
    });
  }


  /**
    * Close Modal
    */
  handleCloseModal() {

    this._dialogRef.close();


    this._dialogRef.afterClosed().subscribe((result) => {
      this.formInstance.reset();
      this.general_type = null;
    });
  }



  // ------------------------------------------------------------------------------
  // @Private Methods
  // ------------------------------------------------------------------------------
  private _produceForm() {
    this.formInstance = this._formBuilder.group({
      name: ['', [Validators.required]],
      action: ['', [Validators.required]],
      module: ['', [Validators.required]],
      sub_module: ['', [Validators.required]],
      child: ['', [Validators.required]],


    });



  }

}
