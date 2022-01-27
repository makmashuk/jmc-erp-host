import { Action } from '@ngrx/store';
import { DesignationDetails } from 'app/modules/admin/hr-and-payroll/company/designation-details-create/types/designation-details.types';

export const enum DESIGNATION_DETAILS_ACTION {
    CREATE_NEW_DESIGNATION = '[DESIGNATION_DETAILS] Create new designation',
    CREATE_NEW_DESIGNATION_SUCCESS = '[DESIGNATION_DETAILS] Create new designation success',
    UPDATE_DESIGNATION = '[DESIGNATION_DETAILS] Update Designation',
    UPDATE_DESIGNATION_SUCCESS = '[DESIGNATION_DETAILS] Update Designation Success',
    DELETE_DESIGNATION = '[DESIGNATION_DETAILS] Delete Designation',
    DELETE_DESIGNATION_SECCESS = '[DESIGNATION_DETAILS] Delete Designation Success',
    GET_LIST_OF_DESIGNATIONS = '[DESIGNATION_DETAILS] Get list of designations',
    GET_LIST_OF_DESIGNATIONS_SUCCESS = '[DESIGNATION_DETAILS] Get list of designations success',
    RESET_META_DATA = '[DESIGNATION_DETAILS] Reset meta data',
}

export class CreateNewDesignationDetails implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.CREATE_NEW_DESIGNATION;
    constructor(public formData: DesignationDetails) {}
}
export class CreateNewDesignationDetailsSuccess implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.CREATE_NEW_DESIGNATION_SUCCESS;
    constructor(public formData: DesignationDetails) {}
}

export class UpdateDesignationDetails implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.UPDATE_DESIGNATION;
    constructor(public formData: DesignationDetails) {}
}

export class UpdateDesignationDetailsSuccess implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.UPDATE_DESIGNATION_SUCCESS;
    constructor(public list: DesignationDetails[]) {}
}

export class DeleteDesignationDetails implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.DELETE_DESIGNATION;
    constructor(public id: number) {}
}

export class DeleteDesignationDetailsSuccess implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.DELETE_DESIGNATION_SECCESS;
    constructor(public list: DesignationDetails[]) {}
}

export class GetListOfDesignations implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.GET_LIST_OF_DESIGNATIONS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfDesignationsSuccess implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.GET_LIST_OF_DESIGNATIONS_SUCCESS;
    constructor(public data: DesignationDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = DESIGNATION_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type DESIGNATION_ACTION_TYPES =
    | CreateNewDesignationDetails
    | CreateNewDesignationDetailsSuccess
    | UpdateDesignationDetails
    | UpdateDesignationDetailsSuccess
    | DeleteDesignationDetails
    | DeleteDesignationDetailsSuccess
    | GetListOfDesignations
    | GetListOfDesignationsSuccess
    | ResetMetaData;
