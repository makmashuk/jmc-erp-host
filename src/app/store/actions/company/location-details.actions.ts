import { Action } from '@ngrx/store';
import { LocationDetails } from 'app/modules/admin/hr-and-payroll/company/location-details-create/types/location-details.types';

export const enum LOCATION_DETAILS_ACTION {
    CREATE_NEW_LOCATION = '[LOCATION_DETAILS] Create new location',
    CREATE_NEW_LOCATION_SUCCESS = '[LOCATION_DETAILS] Create new location success',
    UPDATE_LOCATION = '[LOCATION_DETAILS] Update Location',
    UPDATE_LOCATION_SUCCESS = '[LOCATION_DETAILS] Update Location Success',
    DELETE_LOCATION = '[LOCATION_DETAILS] Delete Location',
    DELETE_LOCATION_SECCESS = '[LOCATION_DETAILS] Delete Location Success',
    GET_LIST_OF_LOCATIONS = '[LOCATION_DETAILS] Get list of locations',
    GET_LIST_OF_LOCATIONS_SUCCESS = '[LOCATION_DETAILS] Get list of locations success',
    RESET_META_DATA = '[LOCATION_DETAILS] Reset meta data',
}

export class CreateNewLocationDetails implements Action {
    readonly type = LOCATION_DETAILS_ACTION.CREATE_NEW_LOCATION;
    constructor(public formData: LocationDetails) {}
}
export class CreateNewLocationDetailsSuccess implements Action {
    readonly type = LOCATION_DETAILS_ACTION.CREATE_NEW_LOCATION_SUCCESS;
    constructor(public formData: LocationDetails) {}
}

export class UpdateLocationDetails implements Action {
    readonly type = LOCATION_DETAILS_ACTION.UPDATE_LOCATION;
    constructor(public formData: LocationDetails) {}
}

export class UpdateLocationDetailsSuccess implements Action {
    readonly type = LOCATION_DETAILS_ACTION.UPDATE_LOCATION_SUCCESS;
    constructor(public list: LocationDetails[]) {}
}

export class DeleteLocationDetails implements Action {
    readonly type = LOCATION_DETAILS_ACTION.DELETE_LOCATION;
    constructor(public id: number) {}
}

export class DeleteLocationDetailsSuccess implements Action {
    readonly type = LOCATION_DETAILS_ACTION.DELETE_LOCATION_SECCESS;
    constructor(public list: LocationDetails[]) {}
}

export class GetListOfLocations implements Action {
    readonly type = LOCATION_DETAILS_ACTION.GET_LIST_OF_LOCATIONS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfLocationsSuccess implements Action {
    readonly type = LOCATION_DETAILS_ACTION.GET_LIST_OF_LOCATIONS_SUCCESS;
    constructor(public data: LocationDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = LOCATION_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type LOCATION_ACTION_TYPES =
    | CreateNewLocationDetails
    | CreateNewLocationDetailsSuccess
    | UpdateLocationDetails
    | UpdateLocationDetailsSuccess
    | DeleteLocationDetails
    | DeleteLocationDetailsSuccess
    | GetListOfLocations
    | GetListOfLocationsSuccess
    | ResetMetaData;
