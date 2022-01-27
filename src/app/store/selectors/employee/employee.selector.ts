import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEmployeeState } from "app/modules/admin/hr-and-payroll/employee/employee-create/models/employee.types";


export const getEmployeeState = createFeatureSelector('EMPLOYEE');

export const getEmployeeList = createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.data
);
export const getEmployeeCount = createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.count
);
export const isEmployeeLoaded = createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.loaded
);
export const isEmployeeLoading = createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.loading
);
export const isEmployeeCreated = createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.meta.isCreated
);
export const isEmployeeUpdated = createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.meta.isUpdated
);
export const isEmployeeDeleted = createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.meta.isDeleted
);

export const getEmployeeById =(id) => createSelector(
    getEmployeeState,
    (state: IEmployeeState) => state.data.find(item=>{
        return item.id === id
    })
);

