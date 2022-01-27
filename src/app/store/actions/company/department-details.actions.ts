import { Action } from '@ngrx/store';
import { DepartmentDetails } from 'app/modules/admin/hr-and-payroll/company/department-details-create/types/department-details.types';

export const enum DEPARTMENT_DETAILS_ACTION {
    CREATE_NEW_DEPARTMENT = '[DEPARTMENT_DETAILS] Create new department',
    CREATE_NEW_DEPARTMENT_SUCCESS = '[DEPARTMENT_DETAILS] Create new department success',
    UPDATE_DEPARTMENT = '[DEPARTMENT_DETAILS] Update Department',
    UPDATE_DEPARTMENT_SUCCESS = '[DEPARTMENT_DETAILS] Update Department Success',
    DELETE_DEPARTMENT = '[DEPARTMENT_DETAILS] Delete Department',
    DELETE_DEPARTMENT_SECCESS = '[DEPARTMENT_DETAILS] Delete Department Success',
    GET_LIST_OF_DEPARTMENTS = '[DEPARTMENT_DETAILS] Get list of departments',
    GET_LIST_OF_DEPARTMENTS_SUCCESS = '[DEPARTMENT_DETAILS] Get list of departments success',
    RESET_META_DATA = '[DEPARTMENT_DETAILS] Reset meta data',
}

export class CreateNewDepartmentDetails implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.CREATE_NEW_DEPARTMENT;
    constructor(public formData: DepartmentDetails) {}
}
export class CreateNewDepartmentDetailsSuccess implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.CREATE_NEW_DEPARTMENT_SUCCESS;
    constructor(public formData: DepartmentDetails) {}
}

export class UpdateDepartmentDetails implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.UPDATE_DEPARTMENT;
    constructor(public formData: DepartmentDetails) {}
}

export class UpdateDepartmentDetailsSuccess implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.UPDATE_DEPARTMENT_SUCCESS;
    constructor(public list: DepartmentDetails[]) {}
}

export class DeleteDepartmentDetails implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.DELETE_DEPARTMENT;
    constructor(public id: number) {}
}

export class DeleteDepartmentDetailsSuccess implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.DELETE_DEPARTMENT_SECCESS;
    constructor(public list: DepartmentDetails[]) {}
}

export class GetListOfDepartments implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.GET_LIST_OF_DEPARTMENTS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any,
        public query?: string,
        public sortBy?: string,
        public sortDirection?: 'ASC' | 'DESC'
    ) {}
}

export class GetListOfDepartmentsSuccess implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.GET_LIST_OF_DEPARTMENTS_SUCCESS;
    constructor(public data: DepartmentDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = DEPARTMENT_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type DEPARTMENT_ACTION_TYPES =
    | CreateNewDepartmentDetails
    | CreateNewDepartmentDetailsSuccess
    | UpdateDepartmentDetails
    | UpdateDepartmentDetailsSuccess
    | DeleteDepartmentDetails
    | DeleteDepartmentDetailsSuccess
    | GetListOfDepartments
    | GetListOfDepartmentsSuccess
    | ResetMetaData;
