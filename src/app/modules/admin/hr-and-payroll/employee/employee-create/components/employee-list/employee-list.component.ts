import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FuseAnimations } from '@fuse/animations/public-api';
import { FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../../models/employee.types';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  animations     : FuseAnimations
})
export class EmployeeListComponent implements OnInit {

  @Input()
  dataSources: Observable<IEmployee[]>;

  @Output()
  edit: EventEmitter<{ data: IEmployee; type: string }> =
    new EventEmitter();

  @Output()
  delete: EventEmitter<{ data: IEmployee; type: string }> =
    new EventEmitter();

  @Output()
  moreInfo: EventEmitter<{ data: IEmployee; type: string }> =
    new EventEmitter();

  // @public accessors
  public displayedColumns: string[] = [
    //   'details_action',
    'actions',
    'id',
    'name',
    'remark',
    'status',
    'details'

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
     * Toggle product details
     *
     * @param productId
     */
  toggleDetails(employeeId: number): void {
    // If the product is already selected...
    if (this.selectedEmployee && this.selectedEmployee.id === employeeId) {
      // Close the details
      this.closeDetails();
      return;
    }

    // Get the product by id
    this._employeeService.getEmployeeById(employeeId)
      .subscribe((employee) => {

        // console.log(employee);
        // Set the selected product
        this.selectedEmployee = employee;

        console.log(this.selectedEmployee);

        // Mark for check
        this._changeDetectorRef.markForCheck();

      });
  }

  /**
   * Close the details
   */
  closeDetails(): void {
    this.selectedEmployee = null;
  }
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  /**
   * Handle Edit Operation
   *
   * @param details
   */
  handleEditOperation(employee: IEmployee) {
    this.edit.emit({ data: employee, type: 'edit' });
  }

  /**
   * Handle Delete Operation
   *
   * @param details
   */
  handleDeleteOperation(employee: IEmployee) {
    this.delete.emit({ data: employee, type: 'delete' });
  }
  handleMoreInfoOperation(employee: IEmployee) {
    this.moreInfo.emit({ data: employee, type: 'more_info' });

  }
}


