import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitDetailsState } from 'app/modules/admin/hr-and-payroll/company/unit-details-create/types/unit-details.types';

export const getUnitState = createFeatureSelector('UNIT_DETAILS');

export const getUnitList = createSelector(
    getUnitState,
    (state: UnitDetailsState) => state.data
);
export const getUnitCount = createSelector(
    getUnitState,
    (state: UnitDetailsState) => state.count
);
export const isUnitLoaded = createSelector(
    getUnitState,
    (state: UnitDetailsState) => state.loaded
);
export const isUnitLoading = createSelector(
    getUnitState,
    (state: UnitDetailsState) => state.loading
);
export const isUnitCreated = createSelector(
    getUnitState,
    (state: UnitDetailsState) => state.meta.isCreated
);
export const isUnitUpdated = createSelector(
    getUnitState,
    (state: UnitDetailsState) => state.meta.isUpdated
);
export const isUnitDeleted = createSelector(
    getUnitState,
    (state: UnitDetailsState) => state.meta.isDeleted
);
