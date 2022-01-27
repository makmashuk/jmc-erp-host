import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getEmployeeById } from 'app/store/selectors/employee/employee.selector';
import { EmployeeService } from '../../../employee-create/services/employee.service';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-address-information',
  templateUrl: './address-information.component.html',
  styleUrls: ['./address-information.component.scss']
})
export class AddressInformationComponent implements OnInit {

  editable: boolean = false;
  employeePresentAddress: FormGroup;
  employeePermanentAddress: FormGroup;
  employeeContactForm: FormGroup;
  districtList$: any;
  divisionList$: any;
  employeeAddressInfo: any;
  employee: any;
 
  
  constructor(
    private _formBuilder: FormBuilder,
    private _employeeDetailsService: EmployeeDetailsService,
    private _employeeService: EmployeeService,
    private _route: ActivatedRoute,
    private _store: Store,
    ) { }

  ngOnInit(): void {
   this.initializeForm();
   this.initialize();

   this.districtList$ = this._employeeService.getDistrict();
   this.divisionList$ = this._employeeService.getDivisions();


   // GET EMPLOYEE ID AND NAME FROM STATE
   let id = parseInt(this._route.parent.snapshot.paramMap.get('id'));
   this._store.select(getEmployeeById(id)).subscribe(e=>{
     this.employee = e
   });

  }
  initializeForm() {
    this.employeeContactForm = this._formBuilder.group({
      land_phone: [null],
      cell_phone: [null, Validators.required],
      email: [null, Validators.required],
      remark: [null],

    });
    this.employeePresentAddress = this._formBuilder.group({
      house_name: [null],
      house_no: [null, Validators.required],
      floor: [null, Validators.required],
      road_no: [null, Validators.required],
      block: [null],
      area: [null, Validators.required],
      word_name: [null, Validators.required],
      word_number: [null, Validators.required],
      post_office: [null, Validators.required],
      post_office_code: [null, Validators.required],
      police_station: [null, Validators.required],
      district: [null, Validators.required],
      division: [null, Validators.required],
    })
    this.employeePermanentAddress = this._formBuilder.group({
      isSameAsPresent: [false],
      house_name: [null],
      house_no: [null, Validators.required],
      floor: [null, Validators.required],
      road_no: [null, Validators.required],
      block: [null],
      area: [null, Validators.required],
      word_name: [null, Validators.required],
      word_number: [null, Validators.required],
      post_office: [null, Validators.required],
      post_office_code: [null, Validators.required],
      police_station: [null, Validators.required],
      district: [null, Validators.required],
      division: [null, Validators.required],
    })
    this.disableForm();
  }
  editForm() {
    this.editable = !this.editable;
    if (this.editable) {
      this.enableForm();
    }
    else {
      
      let payload = {
        land_phone:this.employeeContactForm.get('land_phone').value,
        cell_phone:this.employeeContactForm.get('cell_phone').value,
        email:this.employeeContactForm.get('email').value,
        remark:this.employeeContactForm.get('remark').value,
        present_address: this.employeePresentAddress.value,
        permanent_address: this.employeePermanentAddress.get('isSameAsPresent').value ? this.employeePresentAddress.value : this.employeePermanentAddress.value,
    
      }
      
      if("isSameAsPresent" in payload.permanent_address){
        delete payload.permanent_address.isSameAsPresent;
      }
     
     
      let id = this._route.parent.snapshot.paramMap.get('id');
      this._employeeDetailsService.updateAddressInfo(id,payload).subscribe(r=>{
        this.disableForm();
        this.employeeAddressInfo = payload;
        
      });
      
    }

  }


  initialize() {

    this._route.data.subscribe(res => {
      this.employeeContactForm.patchValue({
        land_phone: res.addressInfo.data.land_phone,
        cell_phone: res.addressInfo.data.cell_phone,
        email: res.addressInfo.data.email,
        remark: res.addressInfo.data.remark
      });
      this.employeePermanentAddress.patchValue(res.addressInfo.data.permanent_address);
      this.employeePresentAddress.patchValue(res.addressInfo.data.present_address);
      
      this.employeeAddressInfo = res.addressInfo.data;
    });
   
  }




  enableForm() {
    this.employeePresentAddress.enable();
    this.employeeContactForm.enable();
    this.employeePermanentAddress.enable();
  }



  disableForm() {
    this.employeePresentAddress.disable();
    this.employeeContactForm.disable();
    this.employeePermanentAddress.disable();
  }
  

}
