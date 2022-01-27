/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'hrAndPayroll',
        title: 'HR & Payroll',
        type: 'group',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'company',
                title: 'Company',
                type: 'collapsable',
                children: [
                    {
                        id: 'companyDetails',
                        title: 'Company Details',
                        type: 'basic',
                        link: '/company-details',
                    },
                    {
                        id: 'locationDetailsCreate',
                        title: 'Location Details',
                        type: 'basic',
                        link: '/location-details',
                    },
                    {
                        id: 'unitDetailsCreate',
                        title: 'Unit Details',
                        type: 'basic',
                        link: '/unit-details',
                    },
                    {
                        id: 'divisionDetailsCreate',
                        title: 'Division Details',
                        type: 'basic',
                        link: '/division-details',
                    },
                    {
                        id: 'departmentDetailsCreate',
                        title: 'Department Details',
                        type: 'basic',
                        link: '/department-details',
                    },
                    {
                        id: 'sectionDetailsCreate',
                        title: 'Section Details',
                        type: 'basic',
                        link: '/section-details',
                    },
                    {
                        id: 'subSectionDetailsCreate',
                        title: 'SubSection Details',
                        type: 'basic',
                        link: '/subsection-details',
                    },
                    {
                        id: 'designationGroupChart',
                        title: 'Designation Group',
                        type: 'basic',
                        link: '/designation-group-chart',
                    },
                    {
                        id: 'designationChart',
                        title: 'Designation',
                        type: 'basic',
                        link: '/designation-chart',
                    },
                    {
                        id: 'subDesignationChart',
                        title: 'Sub Designation',
                        type: 'basic',
                        link: '/subdesignation-chart',
                    },
                    // {
                    //     id: 'categoryCreation',
                    //     title: 'Category Creation',
                    //     type: 'basic',
                    //     link: '/category-creation',
                    // },
                ],
            },
            {
                id: 'year',
                title: 'Year',
                type: 'collapsable',
                children: [
                    {
                        id: 'leaveYearCreate',
                        title: 'Leave Year Create',
                        type: 'basic',
                        link: '/leave-year-create',
                    },
                    {
                        id: 'salaryYearCreate',
                        title: 'Salary Year Create',
                        type: 'basic',
                        link: '/salary-year-Create',
                    },
                    {
                        id: 'taxYearCreate',
                        title: 'Tax Year Create',
                        type: 'basic',
                        link: '/tax-year-create',
                    },
                    {
                        id: 'financialYearCreate',
                        title: 'Financial Year Create',
                        type: 'basic',
                        link: '/financial-year-create',
                    },
                ],
            },
            {
                id: 'payroll',
                title: 'Payroll',
                type: 'collapsable',
                children: [
                    {
                        id: 'payrollHead',
                        title: 'Payroll Details',
                        type: 'basic',
                        link: '/payroll-details',
                    },
                    {
                        id: 'payrollHead',
                        title: 'Subpayroll Details',
                        type: 'basic',
                        link: '/subpayroll-details',
                    },
                ],
            },
            {
                id: 'policySetup',
                title: 'Policy Setup',
                type: 'collapsable',
                children: [
                    {
                        id: 'shiftPolicy',
                        title: 'Shift Policy',
                        type: 'basic',
                        link: '/shift-policy',
                    },
                    {
                        id: 'dutyRosterPolicy',
                        title: 'Duty Roster Policy',
                        type: 'basic',
                        link: '/duty-roster-policy',
                    },
                    {
                        id: 'salaryBreakdownPolicy',
                        title: 'Salary Breakdown Policy',
                        type: 'basic',
                        link: '/salary-breakdownpolicy',
                    },
                    {
                        id: 'overtimePolicy',
                        title: 'Overtime Policy',
                        type: 'basic',
                        link: '/overtime-policy',
                    },
                    {
                        id: 'holidayIncentivePolicy',
                        title: 'Holiday Incentive Policy',
                        type: 'basic',
                        link: '/holiday-incentive-policy',
                    },
                    {
                        id: 'leavePolicy',
                        title: 'Leave Policy',
                        type: 'basic',
                        link: '/leave-policy',
                    },
                    {
                        id: 'allowancePolicy',
                        title: 'Allowance Policy',
                        type: 'basic',
                        link: '/allowance-policy',
                    },
                    {
                        id: 'maternityLeavePolicy',
                        title: 'Maternity Leave Policy',
                        type: 'basic',
                        link: '/maternity-leave-policy',
                    },
                    {
                        id: 'attendanceBonusPolicy',
                        title: 'Attendance Bonus Policy',
                        type: 'basic',
                        link: '/attendance-bonus-policy',
                    },
                    {
                        id: 'absentDeductionPolicy',
                        title: 'Absent Deduction Policy',
                        type: 'basic',
                        link: '/absent-deduction-policy',
                    },
                    {
                        id: 'earlyDeductionPolicy',
                        title: 'Early Deduction Policy',
                        type: 'basic',
                        link: '/early-deduction-policy',
                    },
                    {
                        id: 'lateDeductionPolicy',
                        title: 'Late Deduction Policy',
                        type: 'basic',
                        link: '/late-deduction-policy',
                    },
                    {
                        id: 'tiffinBillPolicy',
                        title: 'Tiffin Bill Policy',
                        type: 'basic',
                        link: '/tiffin-bill-policy',
                    },
                    {
                        id: 'bonusPolicy',
                        title: 'Bonus Policy',
                        type: 'basic',
                        link: '/bonus-policy',
                    },
                    {
                        id: 'transportAllowancePolicy',
                        title: 'Transport Allowance Policy',
                        type: 'basic',
                        link: '/transport-allowance-policy',
                    },
                    {
                        id: 'pieceRateOTChart',
                        title: 'Piece Rate OT Chart',
                        type: 'basic',
                        link: '/piece-rate-ot-chart',
                    },
                ],
            },
            {
                id: 'employee',
                title: 'Employee',
                type: 'collapsable',
                children: [
                    {
                        id: 'employeelist',
                        title: 'Employee List',
                        type: 'basic',
                        link: '/employee',
                    },
                    {
                        id: 'employeetransfer',
                        title: 'Employee Transfer',
                        type: 'basic',
                        link: '/employee-transfer',
                    },
                ],
            },
            {
                id: 'permission',
                title: 'Permission',
                type: 'collapsable',
                children: [
                    {
                        id: 'permissionlist',
                        title: 'Permission List',
                        type: 'basic',
                        link: '/permission',
                    },
                    {
                        id: 'userpermission',
                        title: 'User Permission',
                        type: 'basic',
                        link: '/user-permission',
                    },
                ],
            },
        ],
    },
];

export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
