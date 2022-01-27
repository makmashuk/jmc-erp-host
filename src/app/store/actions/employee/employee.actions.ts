import { Action } from "@ngrx/store";
import { IEmployee } from "app/modules/admin/hr-and-payroll/employee/employee-create/models/employee.types";



export const enum EMPLOYEE_ACTION {
    CREATE_NEW_EMPLOYEE = '[EMPLOYEE_DETAILS] Create new EMPLOYEE',
    CREATE_NEW_EMPLOYEE_SUCCESS = '[EMPLOYEE_DETAILS] Create new EMPLOYEE success',
    UPDATE_EMPLOYEE = '[EMPLOYEE_DETAILS] Update EMPLOYEE',
    UPDATE_EMPLOYEE_SUCCESS = '[EMPLOYEE_DETAILS] Update EMPLOYEE Success',
    DELETE_EMPLOYEE = '[EMPLOYEE_DETAILS] Delete EMPLOYEE',
    DELETE_EMPLOYEE_SECCESS = '[EMPLOYEE_DETAILS] Delete EMPLOYEE Success',
    GET_LIST_OF_EMPLOYEES = '[EMPLOYEE_DETAILS] Get list of Employees',
    GET_LIST_OF_EMPLOYEES_SUCCESS = '[EMPLOYEE_DETAILS] Get list of Employees success',
    RESET_META_DATA = '[EMPLOYEE_DETAILS] Reset meta data',
}

export class CreateNewEmployee implements Action {
    readonly type = EMPLOYEE_ACTION.CREATE_NEW_EMPLOYEE;
    constructor(public formData: IEmployee) {}
}
export class CreateNewEmployeeSuccess implements Action {
    readonly type = EMPLOYEE_ACTION.CREATE_NEW_EMPLOYEE_SUCCESS;
    constructor(public formData: IEmployee) {}
}

export class UpdateEmployee implements Action {
    readonly type = EMPLOYEE_ACTION.UPDATE_EMPLOYEE;
    constructor(public formData: IEmployee) {}
}

export class UpdateEmployeeSuccess implements Action {
    readonly type = EMPLOYEE_ACTION.UPDATE_EMPLOYEE_SUCCESS;
    constructor(public list: IEmployee[]) {}
}

export class DeleteEmployee implements Action {
    readonly type = EMPLOYEE_ACTION.DELETE_EMPLOYEE;
    constructor(public id: number) {}
}

export class DeleteEmployeeSuccess implements Action {
    readonly type = EMPLOYEE_ACTION.DELETE_EMPLOYEE_SECCESS;
    constructor(public list: IEmployee[]) {}
}

export class GetListOfEmployees implements Action {
    readonly type = EMPLOYEE_ACTION.GET_LIST_OF_EMPLOYEES;
    constructor(public pageNumber: number, public pageSize: number) {}
}

export class GetListOfEmployeesSuccess implements Action {
    readonly type = EMPLOYEE_ACTION.GET_LIST_OF_EMPLOYEES_SUCCESS;
    constructor(public data: any, public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = EMPLOYEE_ACTION.RESET_META_DATA;
    constructor() {}
}

export type EMPLOYEE_ACTION_TYPES =
    | CreateNewEmployee
    | CreateNewEmployeeSuccess
    | UpdateEmployee
    | UpdateEmployeeSuccess
    | DeleteEmployee
    | DeleteEmployeeSuccess
    | GetListOfEmployees
    | GetListOfEmployeesSuccess
    | ResetMetaData;
