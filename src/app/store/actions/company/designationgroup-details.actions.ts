import { Action } from '@ngrx/store';
import { DesignationGroupDetails } from 'app/modules/admin/hr-and-payroll/company/designationgroup-details-create/types/designationgroup-details.types';

export const enum DESIGNATION_GROUP_DETAILS_ACTION {
    CREATE_NEW_DESIGNATION_GROUP = '[DESIGNATION_GROUP_DETAILS] Create new designationgroup',
    CREATE_NEW_DESIGNATION_GROUP_SUCCESS = '[DESIGNATION_GROUP_DETAILS] Create new designationgroup success',
    UPDATE_DESIGNATION_GROUP = '[DESIGNATION_GROUP_DETAILS] Update DesignationGroup',
    UPDATE_DESIGNATION_GROUP_SUCCESS = '[DESIGNATION_GROUP_DETAILS] Update DesignationGroup Success',
    DELETE_DESIGNATION_GROUP = '[DESIGNATION_GROUP_DETAILS] Delete DesignationGroup',
    DELETE_DESIGNATION_GROUP_SECCESS = '[DESIGNATION_GROUP_DETAILS] Delete DesignationGroup Success',
    GET_LIST_OF_DESIGNATION_GROUPS = '[DESIGNATION_GROUP_DETAILS] Get list of designationgroups',
    GET_LIST_OF_DESIGNATION_GROUPS_SUCCESS = '[DESIGNATION_GROUP_DETAILS] Get list of designationgroups success',
    RESET_META_DATA = '[DESIGNATION_GROUP_DETAILS] Reset meta data',
}

export class CreateNewDesignationGroupDetails implements Action {
    readonly type =
        DESIGNATION_GROUP_DETAILS_ACTION.CREATE_NEW_DESIGNATION_GROUP;
    constructor(public formData: DesignationGroupDetails) {}
}
export class CreateNewDesignationGroupDetailsSuccess implements Action {
    readonly type =
        DESIGNATION_GROUP_DETAILS_ACTION.CREATE_NEW_DESIGNATION_GROUP_SUCCESS;
    constructor(public formData: DesignationGroupDetails) {}
}

export class UpdateDesignationGroupDetails implements Action {
    readonly type = DESIGNATION_GROUP_DETAILS_ACTION.UPDATE_DESIGNATION_GROUP;
    constructor(public formData: DesignationGroupDetails) {}
}

export class UpdateDesignationGroupDetailsSuccess implements Action {
    readonly type =
        DESIGNATION_GROUP_DETAILS_ACTION.UPDATE_DESIGNATION_GROUP_SUCCESS;
    constructor(public list: DesignationGroupDetails[]) {}
}

export class DeleteDesignationGroupDetails implements Action {
    readonly type = DESIGNATION_GROUP_DETAILS_ACTION.DELETE_DESIGNATION_GROUP;
    constructor(public id: number) {}
}

export class DeleteDesignationGroupDetailsSuccess implements Action {
    readonly type =
        DESIGNATION_GROUP_DETAILS_ACTION.DELETE_DESIGNATION_GROUP_SECCESS;
    constructor(public list: DesignationGroupDetails[]) {}
}

export class GetListOfDesignationGroups implements Action {
    readonly type =
        DESIGNATION_GROUP_DETAILS_ACTION.GET_LIST_OF_DESIGNATION_GROUPS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfDesignationGroupsSuccess implements Action {
    readonly type =
        DESIGNATION_GROUP_DETAILS_ACTION.GET_LIST_OF_DESIGNATION_GROUPS_SUCCESS;
    constructor(public data: DesignationGroupDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = DESIGNATION_GROUP_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type DESIGNATION_GROUP_ACTION_TYPES =
    | CreateNewDesignationGroupDetails
    | CreateNewDesignationGroupDetailsSuccess
    | UpdateDesignationGroupDetails
    | UpdateDesignationGroupDetailsSuccess
    | DeleteDesignationGroupDetails
    | DeleteDesignationGroupDetailsSuccess
    | GetListOfDesignationGroups
    | GetListOfDesignationGroupsSuccess
    | ResetMetaData;
