export interface DepartmentDetailsState {
    count: number;
    data: DepartmentDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface DepartmentDetails {
    id?: number;
    name: string;
    name_bengali: string;
    company_id: number;
    location_id: number;
    unit_id: number;
    division_id: number;
    remark: string;
    status: string;
}
