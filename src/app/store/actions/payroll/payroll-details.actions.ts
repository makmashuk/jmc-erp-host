import { Action } from '@ngrx/store';
import { PayrollDetails } from 'app/modules/admin/hr-and-payroll/payroll/payroll-details-create/types/payroll-details.types';

export const enum PAYROLL_DETAILS_ACTION {
    CREATE_NEW_PAYROLL = '[PAYROLL_DETAILS] Create new payroll',
    CREATE_NEW_PAYROLL_SUCCESS = '[PAYROLL_DETAILS] Create new payroll success',
    UPDATE_PAYROLL = '[PAYROLL_DETAILS] Update Payroll',
    UPDATE_PAYROLL_SUCCESS = '[PAYROLL_DETAILS] Update Payroll Success',
    DELETE_PAYROLL = '[PAYROLL_DETAILS] Delete Payroll',
    DELETE_PAYROLL_SECCESS = '[PAYROLL_DETAILS] Delete Payroll Success',
    GET_LIST_OF_PAYROLLS = '[PAYROLL_DETAILS] Get list of payrolls',
    GET_LIST_OF_PAYROLLS_SUCCESS = '[PAYROLL_DETAILS] Get list of payrolls success',
    RESET_META_DATA = '[PAYROLL_DETAILS] Reset meta data',
}

export class CreateNewPayrollDetails implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.CREATE_NEW_PAYROLL;
    constructor(public formData: PayrollDetails) {}
}
export class CreateNewPayrollDetailsSuccess implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.CREATE_NEW_PAYROLL_SUCCESS;
    constructor(public formData: PayrollDetails) {}
}

export class UpdatePayrollDetails implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.UPDATE_PAYROLL;
    constructor(public formData: PayrollDetails) {}
}

export class UpdatePayrollDetailsSuccess implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.UPDATE_PAYROLL_SUCCESS;
    constructor(public list: PayrollDetails[]) {}
}

export class DeletePayrollDetails implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.DELETE_PAYROLL;
    constructor(public id: number) {}
}

export class DeletePayrollDetailsSuccess implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.DELETE_PAYROLL_SECCESS;
    constructor(public list: PayrollDetails[]) {}
}

export class GetListOfPayrolls implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.GET_LIST_OF_PAYROLLS;
    constructor(
        public pageNumber?: number,
        public pageSize?: number,
        public filter_ids?: any
    ) {}
}

export class GetListOfPayrollsSuccess implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.GET_LIST_OF_PAYROLLS_SUCCESS;
    constructor(public data: PayrollDetails[], public count: number) {}
}

export class ResetMetaData implements Action {
    readonly type = PAYROLL_DETAILS_ACTION.RESET_META_DATA;
    constructor() {}
}

export type PAYROLL_ACTION_TYPES =
    | CreateNewPayrollDetails
    | CreateNewPayrollDetailsSuccess
    | UpdatePayrollDetails
    | UpdatePayrollDetailsSuccess
    | DeletePayrollDetails
    | DeletePayrollDetailsSuccess
    | GetListOfPayrolls
    | GetListOfPayrollsSuccess
    | ResetMetaData;
