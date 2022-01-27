import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getEmployeeById } from 'app/store/selectors/employee/employee.selector';
import { of } from 'rxjs';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-salary-breakdown',
  templateUrl: './salary-breakdown.component.html',
  styleUrls: ['./salary-breakdown.component.scss']
})
export class SalaryBreakdownComponent implements OnInit {
  editable: boolean = false;
  formInstance: any;
  ruleFormInstance: any;
  employee: any;

  
  constructor( 
    private _dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _store: Store,
    private _employeeDetailsService: EmployeeDetailsService,
  ) { }

   // @Private Accessors
   private _dialogRef: MatDialogRef<any>;
    // @ViewChild FORM
  @ViewChild('createForm')
  createForm: TemplateRef<any>;
 
  list$ = of([1,2,3]);
  ngOnInit(): void {
    this._produceForm();
    this._produceRuleForm();

      // GET EMPLOYEE ID AND NAME FROM STATE
      let id = parseInt(this._route.parent.snapshot.paramMap.get('id'));
      this._store.select(getEmployeeById(id)).subscribe(e=>{
        this.employee = e
      });
  }
  editForm(){

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

  // ------------------------------------------------------------------------------
  // @Private Methods
  // ------------------------------------------------------------------------------
  private _produceForm() {
    this.formInstance = this._formBuilder.group({
      salary_grade: [null, Validators.required],
      policy: [null, Validators.required],
      gross_salary: [null, Validators.required],
      bank: [null, Validators.required],
      cash: [null, Validators.required,],
      remark: [null, Validators.required]
    });
  }
  private _produceRuleForm() {
    this.ruleFormInstance = this._formBuilder.group({
      payroll_head: [null, Validators.required],
      type: [null, Validators.required],
      value: [null, Validators.required],
      subpayroll_head: [null, Validators.required],
      amount: [null, Validators.required]
    });
  }

}
