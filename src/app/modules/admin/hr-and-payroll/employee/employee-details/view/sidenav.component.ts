import { Component, ViewEncapsulation } from '@angular/core';
import { FuseNavigationItem } from '@fuse/components/navigation/navigation.types';

@Component({
    selector     : 'app-sidenav',
    template     : `
        <div>
            <!-- Fixed demo sidebar -->
            <div class="mx-6 text-3xl font-bold tracking-tighter"> Employee Info</div>
            <fuse-vertical-navigation
                [appearance]="'classic'"
                [navigation]="menuData"
                [inner]="true"
                [mode]="'side'"
                [name]="'sidenav-navigation'"
                [opened]="true"></fuse-vertical-navigation>
           
        </div>
    `,
    styles       : [
        `
            demo-sidebar fuse-vertical-navigation .fuse-vertical-navigation-wrapper {
                box-shadow: none !important;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class SidenavComponent
{
    menuData: FuseNavigationItem[];

    /**
     * Constructor
     */
    constructor()
    {
        this.menuData = [
            {
                title   : 'Employee Info',
                subtitle: 'Manage Employee Details',
                type    : 'group',
                children: [
                    {
                        title: 'Basic Info',
                        type : 'basic',
                        icon : 'badge',
                        link:  'basic',
                    },
                    {
                        title: 'Address Info',
                        type : 'basic',
                        icon : 'phone',
                        link:  'address',
                    },
                    {
                        title: 'Salary Breakdown',
                        type : 'basic',
                        icon : 'paid',
                        link:  'salary',
                    },
                    {
                        title: 'Bank Salary Information',
                        type : 'basic',
                        icon : 'account_balance',
                        link:  'bank_salary',
                    },
                    {
                        title: 'Education Information',
                        type : 'basic',
                        icon : 'school',
                        link:  'education',
                    },
                    {
                        title: 'Job Experience',
                        type : 'basic',
                        icon : 'work',
                        link:  'job_experience',
                    },
                    {
                        title: 'Family Information',
                        type : 'basic',
                        icon : 'family_restroom',
                        link:  'family',
                    },
                    {
                        title: 'Policy Tagging',
                        type : 'basic',
                        icon : 'policy',
                        link:  'policy_tagging',
                    },
                    {
                        title: 'Attachments',
                        type : 'basic',
                        icon : 'attach_file',
                        link:  'attachments',
                    },
                    {
                        title: 'Group Insurance',
                        type : 'basic',
                        icon : 'monetization_on',
                        link:  'group_insurance',
                    },
                    {
                        title: 'Provident Fund',
                        type : 'basic',
                        icon : 'savings',
                        link:  'provident_fund',
                    },
                    {
                        title: 'Skill Assign',
                        type : 'basic',
                        icon : 'grade',
                        link:  'skill_assign',
                    },
                   
                ]
            },
            {
                type: 'divider'
            }
        ];
    }
}
