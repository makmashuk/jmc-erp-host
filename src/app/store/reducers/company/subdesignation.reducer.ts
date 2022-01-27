// Actions
import * as fromAction from 'app/store/actions/company/subdesignation-details.actions';
// Models
import {
    SubDesignationDetailsState,
    SubDesignationDetails,
} from 'app/modules/admin/hr-and-payroll/company/subdesignation-details-create/types/subdesignation-details.types';

const InitialState: SubDesignationDetailsState = {
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
    action: fromAction.SUBDESIGNATION_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.SUBDESIGNATION_DETAILS_ACTION
            .CREATE_NEW_SUBDESIGNATION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.SUBDESIGNATION_DETAILS_ACTION
            .GET_LIST_OF_SUBDESIGNATIONS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.SUBDESIGNATION_DETAILS_ACTION
            .GET_LIST_OF_SUBDESIGNATIONS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.SUBDESIGNATION_DETAILS_ACTION
            .UPDATE_SUBDESIGNATION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.SUBDESIGNATION_DETAILS_ACTION
            .DELETE_SUBDESIGNATION_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.SUBDESIGNATION_DETAILS_ACTION.RESET_META_DATA: {
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
