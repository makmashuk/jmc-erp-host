import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { DesignationGroupDetails } from 'app/modules/admin/hr-and-payroll/company/designationgroup-details-create/types/designationgroup-details.types';

@Injectable({
    providedIn: 'root',
})
export class DesignationGroupDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create DesignationGroup Details
     */
    createDesignationGroupDetails(
        payload: DesignationGroupDetails
    ): Observable<any> {
        return this._httpClient
            .post<any>(this._config.DESIGNATION_GROUP, payload)
            .pipe(
                map((newDesignationGroup) => {
                    // Return new designationgroup
                    return newDesignationGroup?.data;
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
    updateDesignationGroupDetails(id: number, paylod: DesignationGroupDetails) {
        return this._httpClient
            .put(`${this._config.DESIGNATION_GROUP}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new designationgroup
                    return updatedData?.data;
                })
            );
    }

    deleteDesignationGroupDetails(id: number) {
        return this._httpClient
            .delete(`${this._config.DESIGNATION_GROUP}/${id}`)
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

        let url = this._config.DESIGNATION_GROUP;

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
