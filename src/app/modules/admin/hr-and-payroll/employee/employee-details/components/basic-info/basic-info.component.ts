import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getEmployeeById } from 'app/store/selectors/employee/employee.selector';
import { of } from 'rxjs';
import { EmployeeService } from '../../../employee-create/services/employee.service';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  religionList$;
  genderList$;
  bloodGroupList$;

  editable: boolean = false;

  employeeBasicForm: FormGroup;
  data: any;
  employeeBasicInfo: any;
  employee: any;
  constructor(
    private _employeeService: EmployeeService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _employeeDetailsService: EmployeeDetailsService,
    private datePipe: DatePipe,
    private _store: Store,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initialize();

    this.religionList$ = this._employeeService.getReligionList();
    this.genderList$ = this._employeeService.getGender();
    this.bloodGroupList$ = this._employeeService.getBloodGroup();

    
    // GET EMPLOYEE ID AND NAME FROM STATE
    let id = parseInt(this._route.parent.snapshot.paramMap.get('id'));
    this._store.select(getEmployeeById(id)).subscribe(e=>{
      this.employee = e
    });
   


  }
  initializeForm() {
    this.employeeBasicForm = this._formBuilder.group({
      name_bengali: [''],
      father_name: ['', [Validators.required]],
      father_name_bengali: [''],
      mother_name: ['', [Validators.required]],
      mother_name_bengali: [''],
      spouse_name: ['', [Validators.required]],
      spouse_name_bengali: [''],
      nationality: ['', [Validators.required]],
      dual_nationality: [''],
      religion: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      height: [null],
      identification_sign: ['', [Validators.required]],
      blood_group: [null, [Validators.required]],
      dob: ['', [Validators.required]],
      maritual_status: ['', [Validators.required]],
      birth_place: ['', [Validators.required]],
      birth_reg_no: ['', [Validators.required]],
      passport_no: [''],
      passport_issue_date: [''],
      passport_issue_place: [''],
      driving_license_no: [''],
      driving_license_issue_date: [''],
      driving_license_issue_place: [''],
      remark: [''],


    });
    this.employeeBasicForm.disable();
  }
  initialize() {
    this._route.data.subscribe(res => {
      this.employeeBasicForm.patchValue(res.basicInfo.data);
      this.employeeBasicInfo = res.basicInfo.data;
    });
  }
  editForm() {
    this.editable = !this.editable;
    if (this.editable) {
      this.employeeBasicForm.enable();
    }
    else {
      let payload = this.employeeBasicForm.value;
      payload.dob = this.datePipe.transform(payload.dob, 'YYYY-MM-dd');
      payload.passport_issue_date = this.datePipe.transform(payload.passport_issue_date, 'YYYY-MM-dd');
      payload.driving_license_issue_date = this.datePipe.transform(payload.driving_license_issue_date, 'YYYY-MM-dd');


      let id = this._route.parent.snapshot.paramMap.get('id');
      this._employeeDetailsService.updateBasicInfo(id, payload).subscribe(r => {
        this.employeeBasicForm.disable();
        this.employeeBasicInfo = payload;

      });

    }



  }

}
