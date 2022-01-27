export interface SubPayrollDetailsState {
    count: number;
    data: SubPayrollDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface SubPayrollDetails {
    id?: number;
    name: string;
    name_bengali: string;
    payroll_id: number;
    remark: string;
    status: string;
}
