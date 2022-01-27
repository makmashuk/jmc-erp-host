import { Action } from '@ngrx/store';
import { SectionDetails } from 'app/modules/admin/hr-and-payroll/company/section-details-create/types/section-details.types';

export const enum SECTION_DETAILS_ACTION {
    CREATE_NEW_SECTION = '[SECTION_DETAILS] Create new section',
    CREATE_NEW_SECTION_SUCCESS = '[SECTION_DETAILS] Create new section success',
    UPDATE_SECTION = '[SECTION_DETAILS] Update Section',
    UPDATE_SECTION_SUCCESS = '[SECTION_DETAILS] Update Section Success',
    DELETE_SECTION = '[SECTION_DETAILS] Delete Section',
    DELETE_SECTION_SECCESS = '[SECTION_DETAILS] Delete Section Success',
    GET_LIST_OF_SECTIONS = '[SECTION_DETAILS] Get list of sections',
    GET_LIST_OF_SECTIONS_SUCCESS = '[SECTION_DETAILS] Get list of sections success',
    RESET_META_DATA = '[SECTION_DETAILS] Reset meta data',
}

export class CreateNewSectionDetails implements Action {
    readonly type = SECTION_DETAILS_ACTION.CREATE_NEW_SECTION;
    constructor(public formData: SectionDetails) {}
}
export class CreateNewSectionDetailsSuccess implements Action {
    readonly type = SECTION_DETAILS_ACTION.CREATE_NEW_SECTION_SUCCESS;
    constructor(public formData: SectionDetails) {}
}

export class UpdateSectionDetails implements Action {
    readonly type = SECTION_DETAILS_ACTION.UPDATE_SECTION;
    constructor(public formData: SectionDetails) {}
}

export class UpdateSectionDetailsSuccess implements Action {
    readonly type = SECTION_DETAILS_ACTION.UPDATE_SECTION_SUCCESS;
    constructor(public list: SectionDetails[]) {}
}

export class DeleteSectionDetails implements Action {
    readonly type = SECTION_DETAILS_ACTION.DELETE_SECTION;
    constructor(public id: number) {}
}

export class DeleteSectionDetailsSuccess implements Action {
    readonly type = SECTION_DETAILS_ACTION.DELETE_SECTION_SECCESS;
    constructor(public list: SectionDetails[]) {}
}

export class GetListOfSections implements Action {
    readonly type = SECTION_DETAILS_ACTION.GET_LIST_OF_SECTIONS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfSectionsSuccess implements Action {
    readonly type = SECTION_DETAILS_ACTION.GET_LIST_OF_SECTIONS_SUCCESS;
    constructor(public data: SectionDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = SECTION_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type SECTION_ACTION_TYPES =
    | CreateNewSectionDetails
    | CreateNewSectionDetailsSuccess
    | UpdateSectionDetails
    | UpdateSectionDetailsSuccess
    | DeleteSectionDetails
    | DeleteSectionDetailsSuccess
    | GetListOfSections
    | GetListOfSectionsSuccess
    | ResetMetaData;
