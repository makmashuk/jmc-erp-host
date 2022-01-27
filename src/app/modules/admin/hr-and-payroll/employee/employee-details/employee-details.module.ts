import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { MaterialModule } from 'app/shared/material.module';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { SalaryBreakdownComponent } from './components/salary-breakdown/salary-breakdown.component';
import { BankSalaryInformationComponent } from './components/bank-salary-information/bank-salary-information.component';
import { AddressInformationComponent } from './components/address-information/address-information.component';
import { EducationInformationComponent } from './components/education-information/education-information.component';
import { JobExperienceComponent } from './components/job-experience/job-experience.component';
import { PolicyTaggingComponent } from './components/policy-tagging/policy-tagging.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { FamilyInformationComponent } from './components/family-information/family-information.component';
import { SharedModule } from 'app/shared/shared.module';
import { BasicInfoResolver } from './resolvers/basicInfo.resolver';
import { AddressInfoResolver } from './resolvers/addressInfo.resolver';
import { BankSalaryResolver } from './resolvers/bankSalary.resolver';
import { EducationResolver } from './resolvers/education.resolver';
import { FuseCardModule } from '@fuse/components/card';
import { FamilyInfoResolver } from './resolvers/familyInfo.resolver';
import { JobInfoResolver } from './resolvers/jobInfo.resolver';
import { GroupInsuranceComponent } from './components/group-insurance/group-insurance.component';
import { ProvidentFundComponent } from './components/provident-fund/provident-fund.component';
import { SkillAssignComponent } from './components/skill-assign/skill-assign.component';
import { FileUploadAngularModule } from 'file-upload-angular';

const routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    children: [

      { path: '', pathMatch: 'full', redirectTo: 'address' },

      {
        path: 'basic',
        component: BasicInfoComponent,
        resolve: { basicInfo: BasicInfoResolver }
      },
      {
        path: 'address',
        component: AddressInformationComponent,
        resolve: {
          addressInfo: AddressInfoResolver
        }
      },
      {
        path: 'salary',
        component: SalaryBreakdownComponent,

      },
      {
        path: 'bank_salary',
        component: BankSalaryInformationComponent,
        resolve: {
          bankSalaryInfo: BankSalaryResolver
        }
      },
      {
        path: 'education',
        component: EducationInformationComponent,
        resolve: {
          educationInfo: EducationResolver
        }
      },
      {
        path: 'job_experience',
        component: JobExperienceComponent,
        resolve: {
          jobInfo: JobInfoResolver
        }
      },
      {
        path: 'family',
        component: FamilyInformationComponent,
        resolve: {
          familyInfo: FamilyInfoResolver
        }
      },
      {
        path: 'policy_tagging',
        component: PolicyTaggingComponent,
      },
      {
        path: 'attachments',
        component: AttachmentsComponent,
      },
      {
        path: 'group_insurance',
        component: GroupInsuranceComponent,
      },
      {
        path: 'provident_fund',
        component: ProvidentFundComponent,
      },
      {
        path: 'skill_assign',
        component: SkillAssignComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    BankSalaryInformationComponent,
    AddressInformationComponent,
    EducationInformationComponent,
    JobExperienceComponent,
    PolicyTaggingComponent,
    AttachmentsComponent,
    FamilyInformationComponent,
    SalaryBreakdownComponent,
    GroupInsuranceComponent,
    ProvidentFundComponent,
    SkillAssignComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FuseNavigationModule,
    FuseCardModule,
    FileUploadAngularModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    BasicInfoResolver,
    AddressInfoResolver,
    BankSalaryResolver,
    EducationResolver,
    FamilyInfoResolver,
    JobInfoResolver,
    DatePipe
  ]
})
export class EmployeeDetailsModule { }
