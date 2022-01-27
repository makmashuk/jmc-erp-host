import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PayrollDetailsState } from 'app/modules/admin/hr-and-payroll/payroll/payroll-details-create/types/payroll-details.types';

export const getPayrollState = createFeatureSelector('PAYROLL_DETAILS');

export const getPayrollList = createSelector(
    getPayrollState,
    (state: PayrollDetailsState) => state.data
);
export const getPayrollCount = createSelector(
    getPayrollState,
    (state: PayrollDetailsState) => state.count
);
export const isPayrollLoaded = createSelector(
    getPayrollState,
    (state: PayrollDetailsState) => state.loaded
);
export const isPayrollLoading = createSelector(
    getPayrollState,
    (state: PayrollDetailsState) => state.loading
);
export const isPayrollCreated = createSelector(
    getPayrollState,
    (state: PayrollDetailsState) => state.meta.isCreated
);
export const isPayrollUpdated = createSelector(
    getPayrollState,
    (state: PayrollDetailsState) => state.meta.isUpdated
);
export const isPayrollDeleted = createSelector(
    getPayrollState,
    (state: PayrollDetailsState) => state.meta.isDeleted
);
