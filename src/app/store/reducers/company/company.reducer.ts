// Actions
import * as fromAction from 'app/store/actions/company/company-details.actions';
// Models
import {
    CompanyDetailsState,
    CompanyDetails,
} from 'app/modules/admin/hr-and-payroll/company/company-details-create/types/company-details.types';

const InitialState: CompanyDetailsState = {
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
    action: fromAction.COMPANY_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.COMPANY_DETAILS_ACTION.CREATE_NEW_COMPANY_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.COMPANY_DETAILS_ACTION.GET_LIST_OF_COMPANIES: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.COMPANY_DETAILS_ACTION.GET_LIST_OF_COMPANIES_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.COMPANY_DETAILS_ACTION.UPDATE_COMPANY_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.COMPANY_DETAILS_ACTION.DELETE_COMPANY_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.COMPANY_DETAILS_ACTION.RESET_META_DATA: {
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

const updateDate = (data: CompanyDetails) => {};
