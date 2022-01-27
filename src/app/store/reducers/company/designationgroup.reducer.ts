// Actions
import * as fromAction from 'app/store/actions/company/designationgroup-details.actions';
// Models
import {
    DesignationGroupDetailsState,
    DesignationGroupDetails,
} from 'app/modules/admin/hr-and-payroll/company/designationgroup-details-create/types/designationgroup-details.types';

const InitialState: DesignationGroupDetailsState = {
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
    action: fromAction.DESIGNATION_GROUP_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.DESIGNATION_GROUP_DETAILS_ACTION
            .CREATE_NEW_DESIGNATION_GROUP_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.DESIGNATION_GROUP_DETAILS_ACTION
            .GET_LIST_OF_DESIGNATION_GROUPS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.DESIGNATION_GROUP_DETAILS_ACTION
            .GET_LIST_OF_DESIGNATION_GROUPS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.DESIGNATION_GROUP_DETAILS_ACTION
            .UPDATE_DESIGNATION_GROUP_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.DESIGNATION_GROUP_DETAILS_ACTION
            .DELETE_DESIGNATION_GROUP_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.DESIGNATION_GROUP_DETAILS_ACTION.RESET_META_DATA: {
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
