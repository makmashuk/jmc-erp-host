
export interface IEmployeeState {
    count: number;
    data: IEmployee[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface IEmployee {
    id: number;
    fullName: string;
    companyName: Group;
    companyLocation: Group;
    unitName: Group;
    devision: Group;
    department: Group;
    section: Group;
    subSection: Group;
    designation: Group;
    designationLevel: Group;
    functionalSuperior: Group;
    adminSuperior: Group;
    overduty: Group;
    attendenceInfoRestricted: boolean;
    weekend: Group;
    salaryType: Group;
    referenceName: string;
    employeeGrade: string;
    skillRank: string;
    salaryInfoRestricted:boolean;
    joiningDate: Group;
    confirmationDate: string;
    status: string;
}
interface Group {
    id: number | string;
    name: number | string;
}