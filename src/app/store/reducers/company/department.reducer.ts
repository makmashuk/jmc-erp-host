// Actions
import * as fromAction from 'app/store/actions/company/department-details.actions';
// Models
import {
    DepartmentDetailsState,
    DepartmentDetails,
} from 'app/modules/admin/hr-and-payroll/company/department-details-create/types/department-details.types';

const InitialState: DepartmentDetailsState = {
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
    action: fromAction.DEPARTMENT_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.DEPARTMENT_DETAILS_ACTION
            .CREATE_NEW_DEPARTMENT_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.DEPARTMENT_DETAILS_ACTION.GET_LIST_OF_DEPARTMENTS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.DEPARTMENT_DETAILS_ACTION
            .GET_LIST_OF_DEPARTMENTS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.DEPARTMENT_DETAILS_ACTION.UPDATE_DEPARTMENT_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.DEPARTMENT_DETAILS_ACTION.DELETE_DEPARTMENT_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.DEPARTMENT_DETAILS_ACTION.RESET_META_DATA: {
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
