import { Injectable } from '@angular/core';

import { ActivatedRoute, Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { EmployeeDetailsService } from '../services/employee-details.service';

@Injectable()
export class BankSalaryResolver implements Resolve<any> {
    constructor(private _employeeDetails: EmployeeDetailsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        let id = route.parent.paramMap.get('id');
        return this._employeeDetails.getEmployeeBankSalaryInfo(id);
    }
}
