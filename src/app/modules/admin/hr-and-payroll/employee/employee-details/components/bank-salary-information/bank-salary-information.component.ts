import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getEmployeeById } from 'app/store/selectors/employee/employee.selector';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-bank-salary-information',
  templateUrl: './bank-salary-information.component.html',
  styleUrls: ['./bank-salary-information.component.scss']
})
export class BankSalaryInformationComponent implements OnInit {
  bankInformationForm: any;
  editable: boolean = false;
  employeeBankInfo: any;
  employee: any;
  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _store: Store,
    private _employeeDetailsService: EmployeeDetailsService
  ) { }



  ngOnInit(): void {
    this.initialForm();
    this.initialize();

    // GET EMPLOYEE ID AND NAME FROM STATE
    let id = parseInt(this._route.parent.snapshot.paramMap.get('id'));
    this._store.select(getEmployeeById(id)).subscribe(e => {
      this.employee = e
    });
  }
  initialForm() {
    this.bankInformationForm = this._formBuilder.group({
      bank_name: [null, Validators.required],
      branch_name: [null, Validators.required],
      account_no: [null, Validators.required],
      routing_no: [null, Validators.required],
      tax_amount: [null, Validators.required],
      bank_salary_amount: [null, Validators.required],
      salary_period: [null, Validators.required],
      remark: [null],

    });
    this.bankInformationForm.disable();
  }


  initialize() {
    this._route.data.subscribe(res => {
      this.bankInformationForm.patchValue(res.bankSalaryInfo.data);
      this.employeeBankInfo = res.bankSalaryInfo.data;
    });
  }
  editForm() {
    this.editable = !this.editable;
    if (this.editable) {
      this.bankInformationForm.enable();
    } else {
      let payload = this.bankInformationForm.value;

      let id = this._route.parent.snapshot.paramMap.get('id');
      this._employeeDetailsService.updateBankSalaryInfo(id, payload).subscribe(r => {
        this.bankInformationForm.disable();
        this.employeeBankInfo = payload;

      });

    }
  }

}


