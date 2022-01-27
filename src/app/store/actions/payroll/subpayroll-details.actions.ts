import { Action } from '@ngrx/store';
import { SubPayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/subpayroll-details-create/types/subpayroll-details.types';

export const enum SUBPAYROLL_DETAILS_ACTION {
    CREATE_NEW_SUBPAYROLL = '[SUBPAYROLL_DETAILS] Create new subpayroll',
    CREATE_NEW_SUBPAYROLL_SUCCESS = '[SUBPAYROLL_DETAILS] Create new subpayroll success',
    UPDATE_SUBPAYROLL = '[SUBPAYROLL_DETAILS] Update SubPayroll',
    UPDATE_SUBPAYROLL_SUCCESS = '[SUBPAYROLL_DETAILS] Update SubPayroll Success',
    DELETE_SUBPAYROLL = '[SUBPAYROLL_DETAILS] Delete SubPayroll',
    DELETE_SUBPAYROLL_SECCESS = '[SUBPAYROLL_DETAILS] Delete SubPayroll Success',
    GET_LIST_OF_SUBPAYROLLS = '[SUBPAYROLL_DETAILS] Get list of subpayrolls',
    GET_LIST_OF_SUBPAYROLLS_SUCCESS = '[SUBPAYROLL_DETAILS] Get list of subpayrolls success',
    RESET_META_DATA = '[SUBPAYROLL_DETAILS] Reset meta data',
}

export class CreateNewSubPayrollDetails implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.CREATE_NEW_SUBPAYROLL;
    constructor(public formData: SubPayrollDetails) {}
}
export class CreateNewSubPayrollDetailsSuccess implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.CREATE_NEW_SUBPAYROLL_SUCCESS;
    constructor(public formData: SubPayrollDetails) {}
}

export class UpdateSubPayrollDetails implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.UPDATE_SUBPAYROLL;
    constructor(public formData: SubPayrollDetails) {}
}

export class UpdateSubPayrollDetailsSuccess implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.UPDATE_SUBPAYROLL_SUCCESS;
    constructor(public list: SubPayrollDetails[]) {}
}

export class DeleteSubPayrollDetails implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.DELETE_SUBPAYROLL;
    constructor(public id: number) {}
}

export class DeleteSubPayrollDetailsSuccess implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.DELETE_SUBPAYROLL_SECCESS;
    constructor(public list: SubPayrollDetails[]) {}
}

export class GetListOfSubPayrolls implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.GET_LIST_OF_SUBPAYROLLS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any
    ) {}
}

export class GetListOfSubPayrollsSuccess implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.GET_LIST_OF_SUBPAYROLLS_SUCCESS;
    constructor(public data: SubPayrollDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = SUBPAYROLL_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type SUBPAYROLL_ACTION_TYPES =
    | CreateNewSubPayrollDetails
    | CreateNewSubPayrollDetailsSuccess
    | UpdateSubPayrollDetails
    | UpdateSubPayrollDetailsSuccess
    | DeleteSubPayrollDetails
    | DeleteSubPayrollDetailsSuccess
    | GetListOfSubPayrolls
    | GetListOfSubPayrollsSuccess
    | ResetMetaData;
