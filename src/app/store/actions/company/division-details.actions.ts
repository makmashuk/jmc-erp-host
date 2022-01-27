import { Action } from '@ngrx/store';
import { DivisionDetails } from 'app/modules/admin/hr-and-payroll/company/division-details-create/types/division-details.types';

export const enum DIVISION_DETAILS_ACTION {
    CREATE_NEW_DIVISION = '[DIVISION_DETAILS] Create new division',
    CREATE_NEW_DIVISION_SUCCESS = '[DIVISION_DETAILS] Create new division success',
    UPDATE_DIVISION = '[DIVISION_DETAILS] Update Division',
    UPDATE_DIVISION_SUCCESS = '[DIVISION_DETAILS] Update Division Success',
    DELETE_DIVISION = '[DIVISION_DETAILS] Delete Division',
    DELETE_DIVISION_SECCESS = '[DIVISION_DETAILS] Delete Division Success',
    GET_LIST_OF_DIVISIONS = '[DIVISION_DETAILS] Get list of divisions',
    GET_LIST_OF_DIVISIONS_SUCCESS = '[DIVISION_DETAILS] Get list of divisions success',
    RESET_META_DATA = '[DIVISION_DETAILS] Reset meta data',
}

export class CreateNewDivisionDetails implements Action {
    readonly type = DIVISION_DETAILS_ACTION.CREATE_NEW_DIVISION;
    constructor(public formData: DivisionDetails) {}
}
export class CreateNewDivisionDetailsSuccess implements Action {
    readonly type = DIVISION_DETAILS_ACTION.CREATE_NEW_DIVISION_SUCCESS;
    constructor(public formData: DivisionDetails) {}
}

export class UpdateDivisionDetails implements Action {
    readonly type = DIVISION_DETAILS_ACTION.UPDATE_DIVISION;
    constructor(public formData: DivisionDetails) {}
}

export class UpdateDivisionDetailsSuccess implements Action {
    readonly type = DIVISION_DETAILS_ACTION.UPDATE_DIVISION_SUCCESS;
    constructor(public list: DivisionDetails[]) {}
}

export class DeleteDivisionDetails implements Action {
    readonly type = DIVISION_DETAILS_ACTION.DELETE_DIVISION;
    constructor(public id: number) {}
}

export class DeleteDivisionDetailsSuccess implements Action {
    readonly type = DIVISION_DETAILS_ACTION.DELETE_DIVISION_SECCESS;
    constructor(public list: DivisionDetails[]) {}
}

export class GetListOfDivisions implements Action {
    readonly type = DIVISION_DETAILS_ACTION.GET_LIST_OF_DIVISIONS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfDivisionsSuccess implements Action {
    readonly type = DIVISION_DETAILS_ACTION.GET_LIST_OF_DIVISIONS_SUCCESS;
    constructor(public data: DivisionDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = DIVISION_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type DIVISION_ACTION_TYPES =
    | CreateNewDivisionDetails
    | CreateNewDivisionDetailsSuccess
    | UpdateDivisionDetails
    | UpdateDivisionDetailsSuccess
    | DeleteDivisionDetails
    | DeleteDivisionDetailsSuccess
    | GetListOfDivisions
    | GetListOfDivisionsSuccess
    | ResetMetaData;
