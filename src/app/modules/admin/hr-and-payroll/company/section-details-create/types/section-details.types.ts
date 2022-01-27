export interface SectionDetailsState {
    count: number;
    data: SectionDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface SectionDetails {
    id?: number;
    name: string;
    name_bengali: string;
    company_id: number;
    location_id: number;
    unit_id: number;
    division_id: number;
    department_id: number;
    remark: string;
    status: string;
}
