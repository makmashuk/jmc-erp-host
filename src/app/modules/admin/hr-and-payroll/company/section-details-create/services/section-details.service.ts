import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { SectionDetails } from 'app/modules/admin/hr-and-payroll/company/section-details-create/types/section-details.types';

@Injectable({
    providedIn: 'root',
})
export class SectionDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Section Details
     */
    createSectionDetails(payload: SectionDetails): Observable<any> {
        return this._httpClient.post<any>(this._config.SECTION, payload).pipe(
            map((newSection) => {
                // Return new section
                return newSection?.data;
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
    updateSectionDetails(id: number, paylod: SectionDetails) {
        return this._httpClient
            .put(`${this._config.SECTION}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new section
                    return updatedData?.data;
                })
            );
    }

    deleteSectionDetails(id: number) {
        return this._httpClient.delete(`${this._config.SECTION}/${id}`).pipe(
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

        let url = this._config.SECTION;

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
