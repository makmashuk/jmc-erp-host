import { Action } from '@ngrx/store';
import { SubSectionDetails } from 'app/modules/admin/hr-and-payroll/company/subsection-details-create/types/subsection-details.types';

export const enum SUBSECTION_DETAILS_ACTION {
    CREATE_NEW_SUBSECTION = '[SUBSECTION_DETAILS] Create new subsection',
    CREATE_NEW_SUBSECTION_SUCCESS = '[SUBSECTION_DETAILS] Create new subsection success',
    UPDATE_SUBSECTION = '[SUBSECTION_DETAILS] Update SubSection',
    UPDATE_SUBSECTION_SUCCESS = '[SUBSECTION_DETAILS] Update SubSection Success',
    DELETE_SUBSECTION = '[SUBSECTION_DETAILS] Delete SubSection',
    DELETE_SUBSECTION_SECCESS = '[SUBSECTION_DETAILS] Delete SubSection Success',
    GET_LIST_OF_SUBSECTIONS = '[SUBSECTION_DETAILS] Get list of subsections',
    GET_LIST_OF_SUBSECTIONS_SUCCESS = '[SUBSECTION_DETAILS] Get list of subsections success',
    RESET_META_DATA = '[SUBSECTION_DETAILS] Reset meta data',
}

export class CreateNewSubSectionDetails implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.CREATE_NEW_SUBSECTION;
    constructor(public formData: SubSectionDetails) {}
}
export class CreateNewSubSectionDetailsSuccess implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.CREATE_NEW_SUBSECTION_SUCCESS;
    constructor(public formData: SubSectionDetails) {}
}

export class UpdateSubSectionDetails implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.UPDATE_SUBSECTION;
    constructor(public formData: SubSectionDetails) {}
}

export class UpdateSubSectionDetailsSuccess implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.UPDATE_SUBSECTION_SUCCESS;
    constructor(public list: SubSectionDetails[]) {}
}

export class DeleteSubSectionDetails implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.DELETE_SUBSECTION;
    constructor(public id: number) {}
}

export class DeleteSubSectionDetailsSuccess implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.DELETE_SUBSECTION_SECCESS;
    constructor(public list: SubSectionDetails[]) {}
}

export class GetListOfSubSections implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.GET_LIST_OF_SUBSECTIONS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfSubSectionsSuccess implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.GET_LIST_OF_SUBSECTIONS_SUCCESS;
    constructor(public data: SubSectionDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = SUBSECTION_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type SUBSECTION_ACTION_TYPES =
    | CreateNewSubSectionDetails
    | CreateNewSubSectionDetailsSuccess
    | UpdateSubSectionDetails
    | UpdateSubSectionDetailsSuccess
    | DeleteSubSectionDetails
    | DeleteSubSectionDetailsSuccess
    | GetListOfSubSections
    | GetListOfSubSectionsSuccess
    | ResetMetaData;
