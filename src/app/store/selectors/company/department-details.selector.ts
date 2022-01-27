import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DepartmentDetailsState } from 'app/modules/admin/hr-and-payroll/company/department-details-create/types/department-details.types';

export const getDepartmentState = createFeatureSelector('DEPARTMENT_DETAILS');

export const getDepartmentList = createSelector(
    getDepartmentState,
    (state: DepartmentDetailsState) => state.data
);
export const getDepartmentCount = createSelector(
    getDepartmentState,
    (state: DepartmentDetailsState) => state.count
);
export const isDepartmentLoaded = createSelector(
    getDepartmentState,
    (state: DepartmentDetailsState) => state.loaded
);
export const isDepartmentLoading = createSelector(
    getDepartmentState,
    (state: DepartmentDetailsState) => state.loading
);
export const isDepartmentCreated = createSelector(
    getDepartmentState,
    (state: DepartmentDetailsState) => state.meta.isCreated
);
export const isDepartmentUpdated = createSelector(
    getDepartmentState,
    (state: DepartmentDetailsState) => state.meta.isUpdated
);
export const isDepartmentDeleted = createSelector(
    getDepartmentState,
    (state: DepartmentDetailsState) => state.meta.isDeleted
);
