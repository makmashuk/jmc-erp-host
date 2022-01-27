import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CompanyDetails } from 'app/modules/admin/hr-and-payroll/company/company-details-create/types/company-details.types';
import { map } from 'rxjs/operators';
import { Company } from 'app/shared';

@Injectable({
    providedIn: 'root',
})
export class CompanyDetailsService {
    constructor(
        private _httpClient: HttpClient,
        @Inject('config') private _config: any
    ) {}

    /**
     * Create Company Details
     */
    createCompanyDetails(payload: CompanyDetails): Observable<any> {
        return this._httpClient.post<any>(this._config.COMPANY, payload).pipe(
            map((newCompany) => {
                // Return new company
                return newCompany?.data;
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
    updateCompanyDetails(id: number, paylod: CompanyDetails) {
        return this._httpClient
            .put(`${this._config.COMPANY}/${id}`, paylod)
            .pipe(
                map((updatedData: any) => {
                    // Return new company
                    return updatedData?.data;
                })
            );
    }

    deleteCompanyDetails(id: number) {
        return this._httpClient.delete(`${this._config.COMPANY}/${id}`).pipe(
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

        return this._httpClient
            .get(this._config.COMPANY, {
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
