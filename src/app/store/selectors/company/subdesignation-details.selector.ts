import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubDesignationDetailsState } from 'app/modules/admin/hr-and-payroll/company/subdesignation-details-create/types/subdesignation-details.types';

export const getSubDesignationState = createFeatureSelector(
    'SUB_DESIGNATION_DETAILS'
);

export const getSubDesignationList = createSelector(
    getSubDesignationState,
    (state: SubDesignationDetailsState) => state.data
);
export const getSubDesignationCount = createSelector(
    getSubDesignationState,
    (state: SubDesignationDetailsState) => state.count
);
export const isSubDesignationLoaded = createSelector(
    getSubDesignationState,
    (state: SubDesignationDetailsState) => state.loaded
);
export const isSubDesignationLoading = createSelector(
    getSubDesignationState,
    (state: SubDesignationDetailsState) => state.loading
);
export const isSubDesignationCreated = createSelector(
    getSubDesignationState,
    (state: SubDesignationDetailsState) => state.meta.isCreated
);
export const isSubDesignationUpdated = createSelector(
    getSubDesignationState,
    (state: SubDesignationDetailsState) => state.meta.isUpdated
);
export const isSubDesignationDeleted = createSelector(
    getSubDesignationState,
    (state: SubDesignationDetailsState) => state.meta.isDeleted
);
