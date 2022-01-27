import { Action } from '@ngrx/store';
import { SubDesignationDetails } from 'app/modules/admin/hr-and-payroll/company/subdesignation-details-create/types/subdesignation-details.types';

export const enum SUBDESIGNATION_DETAILS_ACTION {
    CREATE_NEW_SUBDESIGNATION = '[SUBDESIGNATION_DETAILS] Create new subdesignation',
    CREATE_NEW_SUBDESIGNATION_SUCCESS = '[SUBDESIGNATION_DETAILS] Create new subdesignation success',
    UPDATE_SUBDESIGNATION = '[SUBDESIGNATION_DETAILS] Update SubDesignation',
    UPDATE_SUBDESIGNATION_SUCCESS = '[SUBDESIGNATION_DETAILS] Update SubDesignation Success',
    DELETE_SUBDESIGNATION = '[SUBDESIGNATION_DETAILS] Delete SubDesignation',
    DELETE_SUBDESIGNATION_SECCESS = '[SUBDESIGNATION_DETAILS] Delete SubDesignation Success',
    GET_LIST_OF_SUBDESIGNATIONS = '[SUBDESIGNATION_DETAILS] Get list of subdesignations',
    GET_LIST_OF_SUBDESIGNATIONS_SUCCESS = '[SUBDESIGNATION_DETAILS] Get list of subdesignations success',
    RESET_META_DATA = '[SUBDESIGNATION_DETAILS] Reset meta data',
}

export class CreateNewSubDesignationDetails implements Action {
    readonly type = SUBDESIGNATION_DETAILS_ACTION.CREATE_NEW_SUBDESIGNATION;
    constructor(public formData: SubDesignationDetails) {}
}
export class CreateNewSubDesignationDetailsSuccess implements Action {
    readonly type =
        SUBDESIGNATION_DETAILS_ACTION.CREATE_NEW_SUBDESIGNATION_SUCCESS;
    constructor(public formData: SubDesignationDetails) {}
}

export class UpdateSubDesignationDetails implements Action {
    readonly type = SUBDESIGNATION_DETAILS_ACTION.UPDATE_SUBDESIGNATION;
    constructor(public formData: SubDesignationDetails) {}
}

export class UpdateSubDesignationDetailsSuccess implements Action {
    readonly type = SUBDESIGNATION_DETAILS_ACTION.UPDATE_SUBDESIGNATION_SUCCESS;
    constructor(public list: SubDesignationDetails[]) {}
}

export class DeleteSubDesignationDetails implements Action {
    readonly type = SUBDESIGNATION_DETAILS_ACTION.DELETE_SUBDESIGNATION;
    constructor(public id: number) {}
}

export class DeleteSubDesignationDetailsSuccess implements Action {
    readonly type = SUBDESIGNATION_DETAILS_ACTION.DELETE_SUBDESIGNATION_SECCESS;
    constructor(public list: SubDesignationDetails[]) {}
}

export class GetListOfSubDesignations implements Action {
    readonly type = SUBDESIGNATION_DETAILS_ACTION.GET_LIST_OF_SUBDESIGNATIONS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfSubDesignationsSuccess implements Action {
    readonly type =
        SUBDESIGNATION_DETAILS_ACTION.GET_LIST_OF_SUBDESIGNATIONS_SUCCESS;
    constructor(public data: SubDesignationDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = SUBDESIGNATION_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type SUBDESIGNATION_ACTION_TYPES =
    | CreateNewSubDesignationDetails
    | CreateNewSubDesignationDetailsSuccess
    | UpdateSubDesignationDetails
    | UpdateSubDesignationDetailsSuccess
    | DeleteSubDesignationDetails
    | DeleteSubDesignationDetailsSuccess
    | GetListOfSubDesignations
    | GetListOfSubDesignationsSuccess
    | ResetMetaData;
