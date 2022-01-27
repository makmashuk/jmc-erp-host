import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { DesignationDetails } from 'app/modules/admin/hr-and-payroll/company/designation-details-create/types/designation-details.types';

@Injectable({
    providedIn: 'root',
})
export class DesignationDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Designation Details
     */
    createDesignationDetails(payload: DesignationDetails): Observable<any> {
        return this._httpClient
            .post<any>(this._config.DESIGNATION, payload)
            .pipe(
                map((newDesignation) => {
                    // Return new designation
                    return newDesignation?.data;
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
    updateDesignationDetails(id: number, paylod: DesignationDetails) {
        return this._httpClient
            .put(`${this._config.DESIGNATION}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new designation
                    return updatedData?.data;
                })
            );
    }

    deleteDesignationDetails(id: number) {
        return this._httpClient
            .delete(`${this._config.DESIGNATION}/${id}`)
            .pipe(
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

        let url = this._config.DESIGNATION;

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
