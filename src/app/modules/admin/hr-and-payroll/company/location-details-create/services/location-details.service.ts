import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { LocationDetails } from 'app/modules/admin/hr-and-payroll/company/location-details-create/types/location-details.types';

@Injectable({
    providedIn: 'root',
})
export class LocationDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Location Details
     */
    createLocationDetails(payload: LocationDetails): Observable<any> {
        return this._httpClient.post<any>(this._config.LOCATION, payload).pipe(
            map((newLocation) => {
                // Return new location
                return newLocation?.data;
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
    updateLocationDetails(id: number, paylod: LocationDetails) {
        return this._httpClient
            .put(`${this._config.LOCATION}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new location
                    return updatedData?.data;
                })
            );
    }

    deleteLocationDetails(id: number) {
        return this._httpClient.delete(`${this._config.LOCATION}/${id}`).pipe(
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

        let url = this._config.LOCATION;

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
