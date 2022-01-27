import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { SubDesignationDetails } from 'app/modules/admin/hr-and-payroll/company/subdesignation-details-create/types/subdesignation-details.types';

@Injectable({
    providedIn: 'root',
})
export class SubDesignationDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create SubDesignation Details
     */
    createSubDesignationDetails(
        payload: SubDesignationDetails
    ): Observable<any> {
        return this._httpClient
            .post<any>(this._config.SUBDESIGNATION, payload)
            .pipe(
                map((newSubDesignation) => {
                    // Return new subdesignation
                    return newSubDesignation?.data;
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
    updateSubDesignationDetails(id: number, paylod: SubDesignationDetails) {
        return this._httpClient
            .put(`${this._config.SUBDESIGNATION}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new subdesignation
                    return updatedData?.data;
                })
            );
    }

    deleteSubDesignationDetails(id: number) {
        return this._httpClient
            .delete(`${this._config.SUBDESIGNATION}/${id}`)
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

        let url = this._config.SUBDESIGNATION;

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
