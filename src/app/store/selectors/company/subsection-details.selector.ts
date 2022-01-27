import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubSectionDetailsState } from 'app/modules/admin/hr-and-payroll/company/subsection-details-create/types/subsection-details.types';

export const getSubSectionState = createFeatureSelector('SUBSECTION_DETAILS');

export const getSubSectionList = createSelector(
    getSubSectionState,
    (state: SubSectionDetailsState) => state.data
);
export const getSubSectionCount = createSelector(
    getSubSectionState,
    (state: SubSectionDetailsState) => state.count
);
export const isSubSectionLoaded = createSelector(
    getSubSectionState,
    (state: SubSectionDetailsState) => state.loaded
);
export const isSubSectionLoading = createSelector(
    getSubSectionState,
    (state: SubSectionDetailsState) => state.loading
);
export const isSubSectionCreated = createSelector(
    getSubSectionState,
    (state: SubSectionDetailsState) => state.meta.isCreated
);
export const isSubSectionUpdated = createSelector(
    getSubSectionState,
    (state: SubSectionDetailsState) => state.meta.isUpdated
);
export const isSubSectionDeleted = createSelector(
    getSubSectionState,
    (state: SubSectionDetailsState) => state.meta.isDeleted
);
