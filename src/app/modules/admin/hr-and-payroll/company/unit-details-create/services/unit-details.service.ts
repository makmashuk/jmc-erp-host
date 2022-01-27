import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { UnitDetails } from 'app/modules/admin/hr-and-payroll/company/unit-details-create/types/unit-details.types';

@Injectable({
    providedIn: 'root',
})
export class UnitDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Unit Details
     */
    createUnitDetails(payload: UnitDetails): Observable<any> {
        return this._httpClient.post<any>(this._config.UNIT, payload).pipe(
            map((newUnit) => {
                // Return new unit
                return newUnit?.data;
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
    updateUnitDetails(id: number, paylod: UnitDetails) {
        return this._httpClient.put(`${this._config.UNIT}/${id}`, paylod).pipe(
            map((updatedData: any) => {
                // Return new unit
                return updatedData?.data;
            })
        );
    }

    deleteUnitDetails(id: number) {
        return this._httpClient.delete(`${this._config.UNIT}/${id}`).pipe(
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

        let url = this._config.UNIT;

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
