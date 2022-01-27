import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { PayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/payroll-details-create/types/payroll-details.types';

@Injectable({
    providedIn: 'root',
})
export class PayrollDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Payroll Details
     */
    createPayrollDetails(payload: PayrollDetails): Observable<any> {
        return this._httpClient.post<any>(this._config.PAYROLL, payload).pipe(
            map((newPayroll) => {
                // Return new payroll
                return newPayroll?.data;
            })
        );
    }

    /**
     * Update Data
     *
     * @param id
     * @param paylod
     * @returns
     */
    updatePayrollDetails(id: number, paylod: PayrollDetails) {
        return this._httpClient
            .put(`${this._config.PAYROLL}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new payroll
                    return updatedData?.data;
                })
            );
    }

    deletePayrollDetails(id: number) {
        return this._httpClient.delete(`${this._config.PAYROLL}/${id}`).pipe(
            map((isDeleted: boolean) => {
                return id;
            })
        );
    }

    /**
     * Get list
     *
     * @param pageNumber
     * @param pageSize
     * @returns
     */

    getEntityList(
        pageNumber: number,
        pageSize: number,
        ids?: any
    ): Observable<any> {
        const params = {};

        if (pageNumber) {
            params['page'] = '' + pageNumber;
        }
        if (pageSize) {
            params['limit'] = '' + pageSize;
        }

        let url = this._config.PAYROLL;

        if (ids) {
            const keys = Object.keys(ids)
                .map((key) => `${key}=${ids[key]}`)
                .join('&');
            url = `${url}?${keys}`;
        }

        return this._httpClient
            .get(url, {
                params,
            })
            .pipe(
                map((response: any) => {
                    return {
                        data: response?.data?.data,
                        count: response?.data?.count,
                    };
                })
            );
    }
}
