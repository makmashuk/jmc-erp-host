import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompanyDetailsState } from 'app/modules/admin/hr-and-payroll/company/company-details-create/types/company-details.types';

export const getCompanyState = createFeatureSelector('COMPANY_DETAILS');

export const getCompanyList = createSelector(
    getCompanyState,
    (state: CompanyDetailsState) => state.data
);
export const getCompanyCount = createSelector(
    getCompanyState,
    (state: CompanyDetailsState) => state.count
);
export const isCompanyLoaded = createSelector(
    getCompanyState,
    (state: CompanyDetailsState) => state.loaded
);
export const isCompanyLoading = createSelector(
    getCompanyState,
    (state: CompanyDetailsState) => state.loading
);
export const isCompanyCreated = createSelector(
    getCompanyState,
    (state: CompanyDetailsState) => state.meta.isCreated
);
export const isCompanyUpdated = createSelector(
    getCompanyState,
    (state: CompanyDetailsState) => state.meta.isUpdated
);
export const isCompanyDeleted = createSelector(
    getCompanyState,
    (state: CompanyDetailsState) => state.meta.isDeleted
);
