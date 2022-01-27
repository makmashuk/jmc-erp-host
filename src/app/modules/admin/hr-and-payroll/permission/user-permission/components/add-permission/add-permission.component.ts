import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { items } from 'app/mock-api/apps/file-manager/data';
import { getEmployeeById } from 'app/store/selectors/employee/employee.selector';
import _ from 'lodash';
import { of } from 'rxjs';
import { PermissionService } from '../../../permission-create/services/permission.service';
import { UserPermissionService } from '../../services/user-permission.service';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss']
})
export class AddPermissionComponent implements OnInit {
  employee: any;

  form: FormGroup;
  permissionList = [];
  employeeAssignedPermission = [];


  get permissionFormArray() {
    return this.form.controls.permission as FormArray;
  }
  constructor(
    private _route: ActivatedRoute,
    private _store: Store,
    private _service: UserPermissionService,
    private _permissionService: PermissionService,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      permission: new FormArray([])
    });


  }


  ngOnInit(): void {

    // GET EMPLOYEE ID AND NAME FROM STATE
    let id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._store.select(getEmployeeById(id)).subscribe(e => {
      this.employee = e;
    });

    this._route.data.subscribe(res => {
      this.employeeAssignedPermission = res.assignedPermission.data.action_permissions;
      console.log(this.employeeAssignedPermission);
    });



    this._permissionService.getAllPermission().subscribe(r => {

      this.permissionList = r.data;
      let groupedData;
      // groupedData = _.groupBy(this.permissionList,'sub_module');
      // groupedData = _.groupBy(this.permissionList,'child');
      groupedData = _.groupBy(this.permissionList, 'module');


      console.log(groupedData[0]);

      this.permissionList.forEach(item => {


        if (this.employeeAssignedPermission.includes(item.action)) {
          this.permissionFormArray.push(new FormControl(true));
        }
        else {
          this.permissionFormArray.push(new FormControl(false));
        }

      })


    });
  }



  updatePermission(i, e) {
    if (!e.checked) {
      let payload = {
        "user_id": parseInt(this._route.snapshot.paramMap.get('id')),
        "action": this.permissionList[i].action
      };
      console.log(payload);
      this._service.deletePermission(payload);
    }
    else {
      
      let payload = {
        "user_id": parseInt(this._route.snapshot.paramMap.get('id')),
        "name": this.permissionList[i].name,
        "action": this.permissionList[i].action,
        "module": this.permissionList[i].module,
        "sub_module": this.permissionList[i].sub_module,
        "child": this.permissionList[i].child,
        "need_approval": true
      };
      this._service.assignPermission(payload);

    }


    // this._service.assignPermission();
    // console.log(payload);
  }
  submit() {
    const selectedPermission = this.form.value.permission
      .map((checked, i) => checked ? this.permissionList[i].action : null)
      .filter(v => v !== null);

    console.log(selectedPermission);
  }

}
