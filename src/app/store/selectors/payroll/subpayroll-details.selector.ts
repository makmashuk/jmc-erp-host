import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubPayrollDetailsState } from 'app/modules/admin/hr-and-payroll/payroll/subpayroll-details-create/types/subpayroll-details.types';

export const getSubPayrollState = createFeatureSelector('SUB_PAYROLL_DETAILS');

export const getSubPayrollList = createSelector(
    getSubPayrollState,
    (state: SubPayrollDetailsState) => state.data
);
export const getSubPayrollCount = createSelector(
    getSubPayrollState,
    (state: SubPayrollDetailsState) => state.count
);
export const isSubPayrollLoaded = createSelector(
    getSubPayrollState,
    (state: SubPayrollDetailsState) => state.loaded
);
export const isSubPayrollLoading = createSelector(
    getSubPayrollState,
    (state: SubPayrollDetailsState) => state.loading
);
export const isSubPayrollCreated = createSelector(
    getSubPayrollState,
    (state: SubPayrollDetailsState) => state.meta.isCreated
);
export const isSubPayrollUpdated = createSelector(
    getSubPayrollState,
    (state: SubPayrollDetailsState) => state.meta.isUpdated
);
export const isSubPayrollDeleted = createSelector(
    getSubPayrollState,
    (state: SubPayrollDetailsState) => state.meta.isDeleted
);
