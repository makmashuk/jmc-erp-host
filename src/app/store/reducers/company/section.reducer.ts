// Actions
import * as fromAction from 'app/store/actions/company/section-details.actions';

// Models
import { SectionDetailsState } from 'app/modules/admin/hr-and-payroll/company/section-details-create/types/section-details.types';

const InitialState: SectionDetailsState = {
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
    action: fromAction.SECTION_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.SECTION_DETAILS_ACTION.CREATE_NEW_SECTION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.SECTION_DETAILS_ACTION.GET_LIST_OF_SECTIONS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.SECTION_DETAILS_ACTION.GET_LIST_OF_SECTIONS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.SECTION_DETAILS_ACTION.UPDATE_SECTION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.SECTION_DETAILS_ACTION.DELETE_SECTION_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.SECTION_DETAILS_ACTION.RESET_META_DATA: {
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
