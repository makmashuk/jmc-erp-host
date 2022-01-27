import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DesignationDetailsState } from 'app/modules/admin/hr-and-payroll/company/designation-details-create/types/designation-details.types';

export const getDesignationState = createFeatureSelector('DESIGNATION_DETAILS');

export const getDesignationList = createSelector(
    getDesignationState,
    (state: DesignationDetailsState) => state.data
);
export const getDesignationCount = createSelector(
    getDesignationState,
    (state: DesignationDetailsState) => state.count
);
export const isDesignationLoaded = createSelector(
    getDesignationState,
    (state: DesignationDetailsState) => state.loaded
);
export const isDesignationLoading = createSelector(
    getDesignationState,
    (state: DesignationDetailsState) => state.loading
);
export const isDesignationCreated = createSelector(
    getDesignationState,
    (state: DesignationDetailsState) => state.meta.isCreated
);
export const isDesignationUpdated = createSelector(
    getDesignationState,
    (state: DesignationDetailsState) => state.meta.isUpdated
);
export const isDesignationDeleted = createSelector(
    getDesignationState,
    (state: DesignationDetailsState) => state.meta.isDeleted
);
