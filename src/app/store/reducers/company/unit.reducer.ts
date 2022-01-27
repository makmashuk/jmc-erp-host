// Actions
import * as fromAction from 'app/store/actions/company/unit-details.actions';
// Models
import {
    UnitDetailsState,
    UnitDetails,
} from 'app/modules/admin/hr-and-payroll/company/unit-details-create/types/unit-details.types';

const InitialState: UnitDetailsState = {
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
    action: fromAction.UNIT_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.UNIT_DETAILS_ACTION.CREATE_NEW_UNIT_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.UNIT_DETAILS_ACTION.GET_LIST_OF_UNITS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.UNIT_DETAILS_ACTION.GET_LIST_OF_UNITS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.UNIT_DETAILS_ACTION.UPDATE_UNIT_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.UNIT_DETAILS_ACTION.DELETE_UNIT_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.UNIT_DETAILS_ACTION.RESET_META_DATA: {
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
