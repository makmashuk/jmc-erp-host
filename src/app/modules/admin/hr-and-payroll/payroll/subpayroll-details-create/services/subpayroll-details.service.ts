import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { SubPayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/subpayroll-details-create/types/subpayroll-details.types';

@Injectable({
    providedIn: 'root',
})
export class SubPayrollDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create SubPayroll Details
     */
    createSubPayrollDetails(payload: SubPayrollDetails): Observable<any> {
        return this._httpClient
            .post<any>(this._config.SUBPAYROLL, payload)
            .pipe(
                map((newSubPayroll) => {
                    // Return new subpayroll
                    return newSubPayroll?.data;
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
    updateSubPayrollDetails(id: number, paylod: SubPayrollDetails) {
        return this._httpClient
            .put(`${this._config.SUBPAYROLL}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new subpayroll
                    return updatedData?.data;
                })
            );
    }

    deleteSubPayrollDetails(id: number) {
        return this._httpClient.delete(`${this._config.SUBPAYROLL}/${id}`).pipe(
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

        let url = this._config.SUBPAYROLL;

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
