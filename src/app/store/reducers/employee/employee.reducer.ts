
import { IEmployee, IEmployeeState } from 'app/modules/admin/hr-and-payroll/employee/employee-create/models/employee.types';
import * as fromAction from 'app/store/actions/employee/employee.actions'


const InitialState: IEmployeeState = {
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
    action: fromAction.EMPLOYEE_ACTION_TYPES
) {
    switch (action.type) {
        case fromAction.EMPLOYEE_ACTION.CREATE_NEW_EMPLOYEE: {
            return {
                ...state,
                meta: { ...state.meta, isCreated: true },
                data: [...state.data, action.formData],
            };
        }

        case fromAction.EMPLOYEE_ACTION.GET_LIST_OF_EMPLOYEES: {
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        }

        case fromAction.EMPLOYEE_ACTION.GET_LIST_OF_EMPLOYEES_SUCCESS: {
            return {
                ...state,
                data: [...action.data],
                count: action.count,
                loading: false,
                loaded: true,
            };
        }

        case fromAction.EMPLOYEE_ACTION.UPDATE_EMPLOYEE_SUCCESS: {
            return {
                ...state,
                meta: { ...state.meta, isUpdated: true },
                data: [...action.list],
            };
        }

        case fromAction.EMPLOYEE_ACTION.DELETE_EMPLOYEE_SECCESS: {
            return {
                ...state,
                meta: { ...state.meta, isDeleted: true },
                data: [...action.list],
            };
        }

        case fromAction.EMPLOYEE_ACTION.RESET_META_DATA: {
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

const updateDate = (data: IEmployee) => {};
