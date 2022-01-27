import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAddressInfo, IBankSalary, IBasicInfo, IFamilyInfo, IJobInfo } from '../models/employee-details.types';

@Injectable({
    providedIn: 'root'
})
export class EmployeeDetailsService {
    public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

    constructor(
        private _httpClient: HttpClient,
        private _snackBar: MatSnackBar,
        @Inject('config') private _config: any) { }


    // BASIC
    getEmployeeBasicInfo(id) {
        let url = this._config.EMPLOYEE + '/basic-info/' + id;
        return this._httpClient
            .get(url)
            .pipe(
                map((response: any) => {

                    return {
                        data: response?.data,
                    };
                })
            );
    }
    updateBasicInfo(id, paylod: IBasicInfo) {
        let url = this._config.EMPLOYEE + '/basic-info/' + id;
        return this._httpClient
            .put(url, paylod)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Basic Info Updated Successfully!',
                        null,
                        'bg-primary'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }



    // ADDRESS
    getEmployeeAddressInfo(id) {
        let url = this._config.EMPLOYEE + '/contact-info/' + id;
        return this._httpClient
            .get(url)
            .pipe(
                map((response: any) => {

                    return {
                        data: response?.data,
                    };
                })
            );
    }
    updateAddressInfo(id, paylod: IAddressInfo) {
        let url = this._config.EMPLOYEE + '/contact-info/' + id;
        return this._httpClient
            .put(url, paylod)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Contact Info Updated Successfully!',
                        null,
                        'bg-primary'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }


    // BankSalary
    getEmployeeBankSalaryInfo(id) {
        let url = this._config.EMPLOYEE + '/bank-salary-info/' + id;
        return this._httpClient
            .get(url)
            .pipe(
                map((response: any) => {

                    return {
                        data: response?.data,
                    };
                })
            );
    }
    updateBankSalaryInfo(id, paylod: IBankSalary) {
        let url = this._config.EMPLOYEE + '/bank-salary-info/' + id;
        return this._httpClient
            .put(url, paylod)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Bank-salary Info Updated Successfully!',
                        null,
                        'bg-primary'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }


    /**
    * Get All Education
    */
    getEmployeeEducationInfo(id) {
        let url = this._config.EMPLOYEE + '/education-info/' + id;
        return this._httpClient
            .get(url)
            .pipe(
                map((response: any) => {

                    return {
                        data: response?.data,
                    };
                })
            );
    }

    /**
    * Create New Education
    */
    createEducationInfo(payload): Observable<any> {
        let url = this._config.EMPLOYEE + '/education-info/';
        return this._httpClient.post<any>(url, payload)
            .pipe(
                map((newInfo) => {
                    this.openSnackbar(
                        'NEW Education Info Created Successfully!',
                        null,
                        'bg-primary'
                    );
                    // Return new company
                    return newInfo?.data;
                })
            );
    }

    /**
    * Update Education
    */
    updateEducationInfo(id: any, paylod: any) {
        let url = this._config.EMPLOYEE + '/education-info/' + id;
        return this._httpClient
            .put(url, paylod)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Education Info Updated Successfully!',
                        null,
                        'bg-primary'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }

    /**
    * Delete Education
    */
    deleteEducationInfo(id: any) {
        let url = this._config.EMPLOYEE + '/education-info/' + id;
        return this._httpClient
            .delete(url)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Deleted Successfully',
                        null,
                        'bg-warn'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }



    /**
    * Get All Family
    */
    getEmployeeFamilyInfo(id) {
        let url = this._config.EMPLOYEE + '/family-info/' + id;
        return this._httpClient
            .get(url)
            .pipe(
                map((response: any) => {

                    return {
                        data: response?.data,
                    };
                })
            );
    }

    /**
    * Create New Family
    */
    createFamilyInfo(payload: IFamilyInfo): Observable<any> {
        let url = this._config.EMPLOYEE + '/family-info/';
        return this._httpClient.post<any>(url, payload)
            .pipe(
                map((newInfo) => {
                    this.openSnackbar(
                        'NEW Family Info Added!',
                        null,
                        'bg-primary'
                    );
                    // Return new company
                    return newInfo?.data;
                })
            );
    }

    /**
    * Update Family
    */
    updateFamilyInfo(id: any, paylod: IFamilyInfo) {
        let url = this._config.EMPLOYEE + '/family-info/' + id;
        return this._httpClient
            .put(url, paylod)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Family Info Updated Successfully!',
                        null,
                        'bg-primary'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }

    /**
    * Delete Family
    */
    deleteFamilyInfo(id: any) {
        let url = this._config.EMPLOYEE + '/family-info/' + id;
        return this._httpClient
            .delete(url)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Deleted Successfully',
                        null,
                        'bg-warn'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }



    /**
    * Get All Job
    */
    getEmployeeJobInfo(id) {
        let url = this._config.EMPLOYEE + '/job-info/' + id;
        return this._httpClient
            .get(url)
            .pipe(
                map((response: any) => {

                    return {
                        data: response?.data,
                    };
                })
            );
    }

    /**
    * Create New Job
    */
    createJobInfo(payload: IJobInfo): Observable<any> {
        let url = this._config.EMPLOYEE + '/job-info/';
        return this._httpClient.post<any>(url, payload)
            .pipe(
                map((newInfo) => {
                    this.openSnackbar(
                        'NEW Job Info Added!',
                        null,
                        'bg-primary'
                    );
                    // Return new company
                    return newInfo?.data;
                })
            );
    }

    /**
    * Update Job
    */
    updateJobInfo(id: any, paylod: IJobInfo) {
        let url = this._config.EMPLOYEE + '/job-info/' + id;
        return this._httpClient
            .put(url, paylod)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Job Info Updated Successfully!',
                        null,
                        'bg-primary'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }

    /**
    * Delete Job
    */
    deleteJobInfo(id: any) {
        let url = this._config.EMPLOYEE + '/job-info/' + id;
        return this._httpClient
            .delete(url)
            .pipe(
                map((response: any) => {
                    this.openSnackbar(
                        'Deleted Successfully',
                        null,
                        'bg-warn'
                    );
                    return {
                        data: response?.data,
                    };
                })
            );
    }


    /**
   * Create New File Upload
   */
    createFileUpload(payload: any): Observable<any> {
        let url = this._config.EMPLOYEE + '/file';
        console.log(payload);

        return this._httpClient.post<any>(url, payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .pipe(
                map((newInfo) => {
                    this.openSnackbar(
                        'New File Added!',
                        null,
                        'bg-primary'
                    );
                    // Return new company
                    return newInfo?.data;
                })
            );
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
