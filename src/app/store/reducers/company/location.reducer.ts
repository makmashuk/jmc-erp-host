// Actions
import * as fromAction from 'app/store/actions/company/location-details.actions';
// Models
import {
    LocationDetailsState,
    LocationDetails,
} from 'app/modules/admin/hr-and-payroll/company/location-details-create/types/location-details.types';

const InitialState: LocationDetailsState = {
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
    action: fromAction.LOCATION_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.LOCATION_DETAILS_ACTION.CREATE_NEW_LOCATION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.LOCATION_DETAILS_ACTION.GET_LIST_OF_LOCATIONS: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.LOCATION_DETAILS_ACTION.GET_LIST_OF_LOCATIONS_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.LOCATION_DETAILS_ACTION.UPDATE_LOCATION_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.LOCATION_DETAILS_ACTION.DELETE_LOCATION_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.LOCATION_DETAILS_ACTION.RESET_META_DATA: {
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
