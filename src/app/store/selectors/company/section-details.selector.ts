import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SectionDetailsState } from 'app/modules/admin/hr-and-payroll/company/section-details-create/types/section-details.types';

export const getSectionState = createFeatureSelector('SECTION_DETAILS');

export const getSectionList = createSelector(
    getSectionState,
    (state: SectionDetailsState) => state.data
);
export const getSectionCount = createSelector(
    getSectionState,
    (state: SectionDetailsState) => state.count
);
export const isSectionLoaded = createSelector(
    getSectionState,
    (state: SectionDetailsState) => state.loaded
);
export const isSectionLoading = createSelector(
    getSectionState,
    (state: SectionDetailsState) => state.loading
);
export const isSectionCreated = createSelector(
    getSectionState,
    (state: SectionDetailsState) => state.meta.isCreated
);
export const isSectionUpdated = createSelector(
    getSectionState,
    (state: SectionDetailsState) => state.meta.isUpdated
);
export const isSectionDeleted = createSelector(
    getSectionState,
    (state: SectionDetailsState) => state.meta.isDeleted
);
