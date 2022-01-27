import { Action } from '@ngrx/store';
import { CompanyDetails } from 'app/modules/admin/hr-and-payroll/company/company-details-create/types/company-details.types';
import { Company } from 'app/shared';

export const enum COMPANY_DETAILS_ACTION {
    CREATE_NEW_COMPANY = '[COMPANY_DETAILS] Create new company',
    CREATE_NEW_COMPANY_SUCCESS = '[COMPANY_DETAILS] Create new company success',
    UPDATE_COMPANY = '[COMPANY_DETAILS] Update Company',
    UPDATE_COMPANY_SUCCESS = '[COMPANY_DETAILS] Update Company Success',
    DELETE_COMPANY = '[COMPANY_DETAILS] Delete Company',
    DELETE_COMPANY_SECCESS = '[COMPANY_DETAILS] Delete Company Success',
    GET_LIST_OF_COMPANIES = '[COMPANY_DETAILS] Get list of companies',
    GET_LIST_OF_COMPANIES_SUCCESS = '[COMPANY_DETAILS] Get list of companies success',
    RESET_META_DATA = '[COMPANY_DETAILS] Reset meta data',
}

export class CreateNewCompanyDetails implements Action {
    readonly type = COMPANY_DETAILS_ACTION.CREATE_NEW_COMPANY;
    constructor(public formData: CompanyDetails) {}
}
export class CreateNewCompanyDetailsSuccess implements Action {
    readonly type = COMPANY_DETAILS_ACTION.CREATE_NEW_COMPANY_SUCCESS;
    constructor(public formData: CompanyDetails) {}
}

export class UpdateCompanyDetails implements Action {
    readonly type = COMPANY_DETAILS_ACTION.UPDATE_COMPANY;
    constructor(public formData: CompanyDetails) {}
}

export class UpdateCompanyDetailsSuccess implements Action {
    readonly type = COMPANY_DETAILS_ACTION.UPDATE_COMPANY_SUCCESS;
    constructor(public list: CompanyDetails[]) {}
}

export class DeleteCompanyDetails implements Action {
    readonly type = COMPANY_DETAILS_ACTION.DELETE_COMPANY;
    constructor(public id: number) {}
}

export class DeleteCompanyDetailsSuccess implements Action {
    readonly type = COMPANY_DETAILS_ACTION.DELETE_COMPANY_SECCESS;
    constructor(public list: CompanyDetails[]) {}
}

export class GetListOfCompanies implements Action {
    readonly type = COMPANY_DETAILS_ACTION.GET_LIST_OF_COMPANIES;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfCompaniesSuccess implements Action {
    readonly type = COMPANY_DETAILS_ACTION.GET_LIST_OF_COMPANIES_SUCCESS;
    constructor(public data: Company[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = COMPANY_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type COMPANY_ACTION_TYPES =
    | CreateNewCompanyDetails
    | CreateNewCompanyDetailsSuccess
    | UpdateCompanyDetails
    | UpdateCompanyDetailsSuccess
    | DeleteCompanyDetails
    | DeleteCompanyDetailsSuccess
    | GetListOfCompanies
    | GetListOfCompaniesSuccess
    | ResetMetaData;
