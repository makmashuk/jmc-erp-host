import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'environments/environment';
// @Reducers
import * as fromCompanyReducer from 'app/store/reducers/company/company.reducer';
import * as fromLocationReducer from 'app/store/reducers/company/location.reducer';
import * as fromUnitReducer from 'app/store/reducers/company/unit.reducer';
import * as fromDivision from 'app/store/reducers/company/division.reducer';
import * as employeeReducer from 'app/store/reducers/employee/employee.reducer';
import * as fromDepartment from 'app/store/reducers/company/department.reducer';
import * as fromSection from 'app/store/reducers/company/section.reducer';
import * as fromSubSection from 'app/store/reducers/company/subsection.reducer';
import * as fromDesignationGroup from 'app/store/reducers/company/designationgroup.reducer';
import * as fromDesignation from 'app/store/reducers/company/designation.reducer';
import * as fromSubDesignation from 'app/store/reducers/company/subdesignation.reducer';

//Payroll
import * as fromPayroll from 'app/store/reducers/payroll/payroll.reducer';
import * as fromSubPayroll from 'app/store/reducers/payroll/subpayroll.reducer';

export const reducers: ActionReducerMap<any> = {
    COMPANY_DETAILS: fromCompanyReducer.reducer,
    LOCATION_DETAILS: fromLocationReducer.reducer,
    UNIT_DETAILS: fromUnitReducer.reducer,
    DIVISION_DETAILS: fromDivision.reducer,
    EMPLOYEE: employeeReducer.reducer,
    DEPARTMENT_DETAILS: fromDepartment.reducer,
    SECTION_DETAILS: fromSection.reducer,
    SUBSECTION_DETAILS: fromSubSection.reducer,
    DESIGNATION_GROUP_DETAILS: fromDesignationGroup.reducer,
    DESIGNATION_DETAILS: fromDesignation.reducer,
    SUB_DESIGNATION_DETAILS: fromSubDesignation.reducer,
    PAYROLL_DETAILS: fromPayroll.reducer,
    SUB_PAYROLL_DETAILS: fromSubPayroll.reducer,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? []
    : [];
