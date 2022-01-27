import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployee } from 'app/modules/admin/hr-and-payroll/employee/employee-create/models/employee.types';
import { EmployeeService } from 'app/modules/admin/hr-and-payroll/employee/employee-create/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-permission-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  
  @Input()
  dataSources: Observable<IEmployee[]>;

  @Output()
  moreInfo: EventEmitter<{ data: IEmployee; type: string }> =
    new EventEmitter();

  // @public accessors
  public displayedColumns: string[] = [
  
    'actions',
    'id',
    'name',
    'status'

  ];
  selectedEmployee: IEmployee | null = null;

  constructor(
    private _employeeService: EmployeeService, 
    private _changeDetectorRef: ChangeDetectorRef,) { }

  //---------------------------------------------------------------------------------
  // @Life cycle hooks
  //---------------------------------------------------------------------------------
  ngOnInit(): void {

  }

  ngOnDestroy() { }

  //---------------------------------------------------------------------------------
  // @Public Methods
  //---------------------------------------------------------------------------------



  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  
  handleMoreInfoOperation(employee: IEmployee) {
    this.moreInfo.emit({ data: employee, type: 'more_info' });

  }

}
