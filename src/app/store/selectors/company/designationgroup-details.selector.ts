import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DesignationGroupDetailsState } from 'app/modules/admin/hr-and-payroll/company/designationgroup-details-create/types/designationgroup-details.types';

export const getDesignationGroupState = createFeatureSelector(
    'DESIGNATION_GROUP_DETAILS'
);

export const getDesignationGroupList = createSelector(
    getDesignationGroupState,
    (state: DesignationGroupDetailsState) => state.data
);
export const getDesignationGroupCount = createSelector(
    getDesignationGroupState,
    (state: DesignationGroupDetailsState) => state.count
);
export const isDesignationGroupLoaded = createSelector(
    getDesignationGroupState,
    (state: DesignationGroupDetailsState) => state.loaded
);
export const isDesignationGroupLoading = createSelector(
    getDesignationGroupState,
    (state: DesignationGroupDetailsState) => state.loading
);
export const isDesignationGroupCreated = createSelector(
    getDesignationGroupState,
    (state: DesignationGroupDetailsState) => state.meta.isCreated
);
export const isDesignationGroupUpdated = createSelector(
    getDesignationGroupState,
    (state: DesignationGroupDetailsState) => state.meta.isUpdated
);
export const isDesignationGroupDeleted = createSelector(
    getDesignationGroupState,
    (state: DesignationGroupDetailsState) => state.meta.isDeleted
);
