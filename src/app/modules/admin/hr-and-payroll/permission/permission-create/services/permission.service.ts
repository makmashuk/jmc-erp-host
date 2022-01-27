import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { isUnitLoading } from 'app/store/selectors';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { IPremission } from '../models/permission.types';

@Injectable({
    providedIn: 'root'
})
export class PermissionService {

    public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    public verticalPosition: MatSnackBarVerticalPosition = 'bottom';


    private _datasource = new BehaviorSubject<IPremission[]>([]);
    readonly datasource$ = this._datasource.asObservable();
    private dataStore = [];



    private _dataloader = new BehaviorSubject<any>(false);
    readonly dataloader$ = this._dataloader.asObservable();

    private _btnloader = new BehaviorSubject<any>(false);
    readonly btnloader$ = this._btnloader.asObservable();

    private _closeModal = new BehaviorSubject<any>(false);
    readonly closeModal$ = this._closeModal.asObservable();





    constructor(
        private _httpClient: HttpClient,
        private _snackBar: MatSnackBar,
        @Inject('config') private _config: any
    ) { }




    /**
    * Get All Permission
    */
    getAll() {
        this._dataloader.next(true);
        let url = this._config.PERMISSION;
        this._httpClient.get<any>(url).subscribe(
            res => {
                this.dataStore = res.data;
                this._datasource.next(Object.assign([], this.dataStore));
                this._dataloader.next(false);
            },
            error => console.log('Could not load todos.')
        );
        return this.datasource$;
    }

     /**
    * Get All Permission for Assign
    */
      getAllPermission() {
    
        let url = this._config.PERMISSION;
        return this._httpClient.get<any>(url)
        
    }

    /**
    * Create New 
    */
    create(payload: IPremission): any {
        this._btnloader.next(true);
        this._closeModal.next(false);

        let url = this._config.PERMISSION;
        this._httpClient.post<any>(url, payload).subscribe(
            (res) => {
                //managing data with local store
                this.dataStore.push(res.data);
                this._datasource.next(Object.assign([], this.dataStore));

                //loader for Button
                this._btnloader.next(false);
                //Modal Close
                this._closeModal.next(true);

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
    * Delete Job
    */
    delete(id: any) {

        this._btnloader.next(true);
        this._closeModal.next(false);

        let url = this._config.PERMISSION + '/' + id;

        this._httpClient.delete<any>(url).subscribe(
            (res) => {
                //managing data with local store
                console.log(res);

                this.dataStore = this.dataStore.filter(function(item) {
                    return item.id != id;
                });

                this._datasource.next(Object.assign([], this.dataStore));

                //loader for Button
                this._btnloader.next(false);
                //Modal Close
                this._closeModal.next(true);

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
