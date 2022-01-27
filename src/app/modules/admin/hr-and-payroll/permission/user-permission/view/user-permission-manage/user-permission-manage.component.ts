import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IEmployee } from 'app/modules/admin/hr-and-payroll/employee/employee-create/models/employee.types';
import { GetListOfEmployees } from 'app/store/actions/employee/employee.actions';
import { getEmployeeCount, getEmployeeList, isEmployeeLoading } from 'app/store/selectors/employee/employee.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-permission-manage',
  templateUrl: './user-permission-manage.component.html',
  styleUrls: ['./user-permission-manage.component.scss']
})
export class UserPermissionManageComponent implements OnInit {
  public isLoading: boolean = false;
  public isDataLoading: boolean = false;
  public dataLoading$: Observable<boolean>;
  public totalDataCount$: Observable<number>;
  public dataSource$: Observable<IEmployee[]>;

  constructor( 
    private _store: Store,
    private _router: Router
    ) {
    this.totalDataCount$ = this._store.select(getEmployeeCount);
    this.dataLoading$ = this._store.select(isEmployeeLoading);
   }

  ngOnInit(): void {

    this._store.dispatch(new GetListOfEmployees(1, 10));
    this.dataSource$ = this._store.select(getEmployeeList);
    this.dataSource$.subscribe(r => console.log(r));

  }
  handleMoreInfo({ data }) {
    this._router.navigateByUrl(`user-permission/${data.id}`);
  }

}
