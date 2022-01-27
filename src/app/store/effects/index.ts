import { CompanyDetailsEffect } from './company/company-details.effect';
import { LocationDetailsEffect } from './company/location-details.effect';
import { UnitDetailsEffect } from './company/unit-details.effect';
import { DivisionDetailsEffect } from './company/division-details.effect';
import { DepartmentDetailsEffect } from './company/department-details.effect';
import { SectionDetailsEffect } from './company/section-details.effect';
import { SubSectionDetailsEffect } from './company/subsection-details.effect';
import { DesignationGroupDetailsEffect } from './company/designationgroup-details.effect';
import { DesignationDetailsEffect } from './company/designation-details.effect';
import { SubDesignationDetailsEffect } from './company/subdesignation-details.effect';

//payroll
import { PayrollDetailsEffect } from './payroll/payroll-details.effect';
import { SubPayrollDetailsEffect } from './payroll/subpayroll-details.effect';

import { EmployeeEffect } from './employee/employee.effect';

export const effects = [
    CompanyDetailsEffect,
    LocationDetailsEffect,
    UnitDetailsEffect,
    DivisionDetailsEffect,
    DepartmentDetailsEffect,
    SectionDetailsEffect,
    SubSectionDetailsEffect,
    DesignationGroupDetailsEffect,
    DesignationDetailsEffect,
    SubDesignationDetailsEffect,
    PayrollDetailsEffect,
    SubPayrollDetailsEffect,
    EmployeeEffect,
];
