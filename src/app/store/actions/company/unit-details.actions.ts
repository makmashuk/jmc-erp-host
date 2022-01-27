import { Action } from '@ngrx/store';
import { UnitDetails } from 'app/modules/admin/hr-and-payroll/company/unit-details-create/types/unit-details.types';

export const enum UNIT_DETAILS_ACTION {
    CREATE_NEW_UNIT = '[UNIT_DETAILS] Create new unit',
    CREATE_NEW_UNIT_SUCCESS = '[UNIT_DETAILS] Create new unit success',
    UPDATE_UNIT = '[UNIT_DETAILS] Update Unit',
    UPDATE_UNIT_SUCCESS = '[UNIT_DETAILS] Update Unit Success',
    DELETE_UNIT = '[UNIT_DETAILS] Delete Unit',
    DELETE_UNIT_SECCESS = '[UNIT_DETAILS] Delete Unit Success',
    GET_LIST_OF_UNITS = '[UNIT_DETAILS] Get list of units',
    GET_LIST_OF_UNITS_SUCCESS = '[UNIT_DETAILS] Get list of units success',
    RESET_META_DATA = '[UNIT_DETAILS] Reset meta data',
}

export class CreateNewUnitDetails implements Action {
    readonly type = UNIT_DETAILS_ACTION.CREATE_NEW_UNIT;
    constructor(public formData: UnitDetails) {}
}
export class CreateNewUnitDetailsSuccess implements Action {
    readonly type = UNIT_DETAILS_ACTION.CREATE_NEW_UNIT_SUCCESS;
    constructor(public formData: UnitDetails) {}
}

export class UpdateUnitDetails implements Action {
    readonly type = UNIT_DETAILS_ACTION.UPDATE_UNIT;
    constructor(public formData: UnitDetails) {}
}

export class UpdateUnitDetailsSuccess implements Action {
    readonly type = UNIT_DETAILS_ACTION.UPDATE_UNIT_SUCCESS;
    constructor(public list: UnitDetails[]) {}
}

export class DeleteUnitDetails implements Action {
    readonly type = UNIT_DETAILS_ACTION.DELETE_UNIT;
    constructor(public id: number) {}
}

export class DeleteUnitDetailsSuccess implements Action {
    readonly type = UNIT_DETAILS_ACTION.DELETE_UNIT_SECCESS;
    constructor(public list: UnitDetails[]) {}
}

export class GetListOfUnits implements Action {
    readonly type = UNIT_DETAILS_ACTION.GET_LIST_OF_UNITS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfUnitsSuccess implements Action {
    readonly type = UNIT_DETAILS_ACTION.GET_LIST_OF_UNITS_SUCCESS;
    constructor(public data: UnitDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = UNIT_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type UNIT_ACTION_TYPES =
    | CreateNewUnitDetails
    | CreateNewUnitDetailsSuccess
    | UpdateUnitDetails
    | UpdateUnitDetailsSuccess
    | DeleteUnitDetails
    | DeleteUnitDetailsSuccess
    | GetListOfUnits
    | GetListOfUnitsSuccess
    | ResetMetaData;
