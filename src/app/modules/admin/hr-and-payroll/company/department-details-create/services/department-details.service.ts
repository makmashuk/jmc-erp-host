import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { DepartmentDetails } from 'app/modules/admin/hr-and-payroll/company/department-details-create/types/department-details.types';

@Injectable({
    providedIn: 'root',
})
export class DepartmentDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Department Details
     */
    createDepartmentDetails(payload: DepartmentDetails): Observable<any> {
        return this._httpClient
            .post<any>(this._config.DEPARTMENT, payload)
            .pipe(
                map((newDepartment) => {
                    // Return new department
                    return newDepartment?.data;
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
    updateDepartmentDetails(id: number, paylod: DepartmentDetails) {
        return this._httpClient
            .put(`${this._config.DEPARTMENT}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new department
                    return updatedData?.data;
                })
            );
    }

    deleteDepartmentDetails(id: number) {
        return this._httpClient.delete(`${this._config.DEPARTMENT}/${id}`).pipe(
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
        ids?: any,
        query: string = null,
        sortBy: string = null,
        sortDirection: string = null
    ): Observable<any> {
        const params = {};

        if (pageNumber) {
            params['page'] = '' + pageNumber;
        }
        if (pageSize) {
            params['limit'] = '' + pageSize;
        }

        if (query) {
            params['query'] = query;
        }

        if (sortBy) {
            params['sortBy'] = sortBy;
        }

        if (sortDirection) {
            params['sortDirection'] = sortDirection;
        }

        let url = this._config.DEPARTMENT;

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
