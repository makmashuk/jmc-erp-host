import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DivisionDetailsState } from 'app/modules/admin/hr-and-payroll/company/division-details-create/types/division-details.types';

export const getDivisionState = createFeatureSelector('DIVISION_DETAILS');

export const getDivisionList = createSelector(
    getDivisionState,
    (state: DivisionDetailsState) => state.data
);
export const getDivisionCount = createSelector(
    getDivisionState,
    (state: DivisionDetailsState) => state.count
);
export const isDivisionLoaded = createSelector(
    getDivisionState,
    (state: DivisionDetailsState) => state.loaded
);
export const isDivisionLoading = createSelector(
    getDivisionState,
    (state: DivisionDetailsState) => state.loading
);
export const isDivisionCreated = createSelector(
    getDivisionState,
    (state: DivisionDetailsState) => state.meta.isCreated
);
export const isDivisionUpdated = createSelector(
    getDivisionState,
    (state: DivisionDetailsState) => state.meta.isUpdated
);
export const isDivisionDeleted = createSelector(
    getDivisionState,
    (state: DivisionDetailsState) => state.meta.isDeleted
);
