// Actions
import * as fromAction from 'app/store/actions/payroll/subpayroll-details.actions';
// Models
import {
    SubPayrollDetailsState,
    SubPayrollDetails,
} from 'app/modules/admin/hr-and-payroll/payroll/subpayroll-details-create/types/subpayroll-details.types';

const InitialState: SubPayrollDetailsState = {
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
    action: fromAction.SUBPAYROLL_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.SUBPAYROLL_DETAILS_ACTION
            .CREATE_NEW_SUBPAYROLL_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.SUBPAYROLL_DETAILS_ACTION.GET_LIST_OF_SUBPAYROLLS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.SUBPAYROLL_DETAILS_ACTION
            .GET_LIST_OF_SUBPAYROLLS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.SUBPAYROLL_DETAILS_ACTION.UPDATE_SUBPAYROLL_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.SUBPAYROLL_DETAILS_ACTION.DELETE_SUBPAYROLL_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.SUBPAYROLL_DETAILS_ACTION.RESET_META_DATA: {
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
