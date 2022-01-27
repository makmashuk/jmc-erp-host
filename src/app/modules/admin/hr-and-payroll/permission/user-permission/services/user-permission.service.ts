import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPermissionService {



  public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  constructor(private _httpClient: HttpClient,
    private _snackBar: MatSnackBar,
    @Inject('config') private _config: any) { }

  /**
   * Get All Permission
   */
  getEmployeePermission(id) {
    let url = this._config.ADMINPERMISSION + '/view/' + id;
    return this._httpClient
      .get(url)
      .pipe(
        map((response: any) => {
          // console.log(response);
          return {
            data: response?.data,
          };
        })
      );
  }
  /**
  * Assign New 
  */
  assignPermission(payload: any): any {


    let url = this._config.ADMINPERMISSION + '/action';
    this._httpClient.post<any>(url, payload).subscribe(
      (res) => {

        //toast message
        this.openSnackbar(
          'NEW Permission Added!',
          null,
          'bg-primary'
        );
      }

    )
  }
  /**
  * Assign New 
  */
  deletePermission(payload: any): any {


    let url = this._config.ADMINPERMISSION + '/action';
    this._httpClient.delete<any>(url, payload).subscribe(
      (res) => {

        //toast message
        this.openSnackbar(
          'Permission Deleted!',
          null,
          'bg-warn'
        );
      }

    )
  }



  openSnackbar(message: string, action: string = 'x', className: string) {
    this._snackBar.open(message, action, {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2000,
        panelClass: [className],
    });
}

}
