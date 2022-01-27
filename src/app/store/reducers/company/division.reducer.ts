// Actions
import * as fromAction from 'app/store/actions/company/division-details.actions';
// Models
import {
    DivisionDetailsState,
    DivisionDetails,
} from 'app/modules/admin/hr-and-payroll/company/division-details-create/types/division-details.types';

const InitialState: DivisionDetailsState = {
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
    action: fromAction.DIVISION_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.DIVISION_DETAILS_ACTION.CREATE_NEW_DIVISION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.DIVISION_DETAILS_ACTION.GET_LIST_OF_DIVISIONS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.DIVISION_DETAILS_ACTION.GET_LIST_OF_DIVISIONS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.DIVISION_DETAILS_ACTION.UPDATE_DIVISION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.DIVISION_DETAILS_ACTION.DELETE_DIVISION_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.DIVISION_DETAILS_ACTION.RESET_META_DATA: {
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
