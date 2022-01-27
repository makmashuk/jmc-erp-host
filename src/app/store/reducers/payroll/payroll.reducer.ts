// Actions
import * as fromAction from 'app/store/actions/payroll/payroll-details.actions';
// Models
import {
    PayrollDetailsState,
    PayrollDetails,
} from 'app/modules/admin/hr-and-payroll/payroll/payroll-details-create/types/payroll-details.types';

const InitialState: PayrollDetailsState = {
    count: 0,
    data: [],
    meta: {
        isCreated: false,
        isUpdated: false,
        isDeleted: false,
    },
    loading: false,
    loaded: false,
    error: null,
};

export function reducer(
    state = InitialState,
    action: fromAction.PAYROLL_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.PAYROLL_DETAILS_ACTION.CREATE_NEW_PAYROLL_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.PAYROLL_DETAILS_ACTION.GET_LIST_OF_PAYROLLS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.PAYROLL_DETAILS_ACTION.GET_LIST_OF_PAYROLLS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.PAYROLL_DETAILS_ACTION.UPDATE_PAYROLL_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.PAYROLL_DETAILS_ACTION.DELETE_PAYROLL_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.PAYROLL_DETAILS_ACTION.RESET_META_DATA: {
            return {
                ...state,
                meta: {
                    isCreated: false,
                    isUpdated: false,
                    isDeleted: false,
                },
            };
        }

        default: {
            return { ...state };
        }
    }
}
