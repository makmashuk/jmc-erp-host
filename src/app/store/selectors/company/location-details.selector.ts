import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationDetailsState } from 'app/modules/admin/hr-and-payroll/company/location-details-create/types/location-details.types';

export const getLocationState = createFeatureSelector('LOCATION_DETAILS');

export const getLocationList = createSelector(
    getLocationState,
    (state: LocationDetailsState) => state.data
);
export const getLocationCount = createSelector(
    getLocationState,
    (state: LocationDetailsState) => state.count
);
export const isLocationLoaded = createSelector(
    getLocationState,
    (state: LocationDetailsState) => state.loaded
);
export const isLocationLoading = createSelector(
    getLocationState,
    (state: LocationDetailsState) => state.loading
);
export const isLocationCreated = createSelector(
    getLocationState,
    (state: LocationDetailsState) => state.meta.isCreated
);
export const isLocationUpdated = createSelector(
    getLocationState,
    (state: LocationDetailsState) => state.meta.isUpdated
);
export const isLocationDeleted = createSelector(
    getLocationState,
    (state: LocationDetailsState) => state.meta.isDeleted
);
