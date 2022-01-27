import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { DivisionDetails } from 'app/modules/admin/hr-and-payroll/company/division-details-create/types/division-details.types';

@Injectable({
    providedIn: 'root',
})
export class DivisionDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Division Details
     */
    createDivisionDetails(payload: DivisionDetails): Observable<any> {
        return this._httpClient.post<any>(this._config.DIVISION, payload).pipe(
            map((newDivision) => {
                // Return new division
                return newDivision?.data;
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
    updateDivisionDetails(id: number, paylod: DivisionDetails) {
        return this._httpClient
            .put(`${this._config.DIVISION}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new division
                    return updatedData?.data;
                })
            );
    }

    deleteDivisionDetails(id: number) {
        return this._httpClient.delete(`${this._config.DIVISION}/${id}`).pipe(
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
        pageNumber: number = 1,
        pageSize: number = 10,
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

        let url = this._config.DIVISION;

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
