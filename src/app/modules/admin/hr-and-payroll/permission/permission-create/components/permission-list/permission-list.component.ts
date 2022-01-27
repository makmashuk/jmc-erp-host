import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { IPremission } from '../../models/permission.types';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent implements OnInit {

  @Input()
  dataSources: Observable<IPremission[]>;

  @Output()
  edit: EventEmitter<{ data: IPremission; type: string }> =
    new EventEmitter();

  @Output()
  delete: EventEmitter<{ data: IPremission; type: string }> =
    new EventEmitter();
  dataSource: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }


  // @public accessors
  public displayedColumns: string[] = [
    'actions',
    'name',
    'action',
    'module',
    'sub_module',
    'child',
   

  ];


  ngOnInit(): void {
    this.dataSources.subscribe(r => {
      this.dataSource = new MatTableDataSource(r);
      this.dataSource.sort = this.sort;
    })
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
     * Handle Delete Operation
     *
     * @param details
     */
    handleDeleteOperation(details: IPremission) {
      this.delete.emit({ data: details, type: 'delete' });
  }

  

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  

}
