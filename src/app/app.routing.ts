import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [
    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'company-details' },

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {
        path: 'signed-in-redirect',
        pathMatch: 'full',
        redirectTo: 'company-details',
    },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                    ).then((m) => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                    ).then((m) => m.AuthForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                    ).then((m) => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        (m) => m.AuthSignInModule
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        (m) => m.AuthSignUpModule
                    ),
            },
        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        (m) => m.AuthSignOutModule
                    ),
            },
        ],
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('app/modules/landing/home/home.module').then(
                        (m) => m.LandingHomeModule
                    ),
            },
        ],
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: 'company-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/company-details-create/company-details.module'
                    ).then((m) => m.CompanyDetailsModule),
            },
            {
                path: 'location-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/location-details-create/location-details.module'
                    ).then((m) => m.LocationDetailsModule),
            },
            {
                path: 'unit-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/unit-details-create/unit-details.module'
                    ).then((m) => m.UnitDetailsModule),
            },
            {
                path: 'division-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/division-details-create/division-details.module'
                    ).then((m) => m.DivisionDetailsModule),
            },
            {
                path: 'department-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/department-details-create/department-details.module'
                    ).then((m) => m.DepartmentDetailsModule),
            },
            {
                path: 'section-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/section-details-create/section-details.module'
                    ).then((m) => m.SectionDetailsModule),
            },
            {
                path: 'subsection-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/subsection-details-create/subsection-details.module'
                    ).then((m) => m.SubSectionDetailsModule),
            },
            {
                path: 'designation-group-chart',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/designationgroup-details-create/designationgroup-details.module'
                    ).then((m) => m.DesignationGroupDetailsModule),
            },
            {
                path: 'designation-chart',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/designation-details-create/designation-details.module'
                    ).then((m) => m.DesignationDetailsModule),
            },

            {
                path: 'subdesignation-chart',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/company/subdesignation-details-create/subdesignation-details.module'
                    ).then((m) => m.SubDesignationDetailsModule),
            },

            {
                path: 'payroll-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/payroll/payroll-details-create/payroll-details.module'
                    ).then((m) => m.PayrollDetailsModule),
            },

            {
                path: 'subpayroll-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/payroll/subpayroll-details-create/subpayroll-details.module'
                    ).then((m) => m.SubPayrollDetailsModule),
            },

            {
                path: 'employee',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/employee/employee-create/employee-list.module'
                    ).then((m) => m.EmployeeListModule),
            },
            {
                path: 'employee-transfer',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/employee/employee-transfer/employee-transfer.module'
                    ).then((m) => m.EmployeeTransferModule),

            },
            {
                path: 'permission',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/permission/permission-create/permission-create.module'
                    ).then((m) => m.PermissionCreateModule),

            },
            {
                path: 'user-permission',
                loadChildren: () =>
                    import(
                        'app/modules/admin/hr-and-payroll/permission/user-permission/user-permission.module'
                    ).then((m) => m.UserPermissionModule),

            },
        ],
    },
];
