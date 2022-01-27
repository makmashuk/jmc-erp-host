export interface SubSectionDetailsState {
    count: number;
    data: SubSectionDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface SubSectionDetails {
    id?: number;
    name: string;
    name_bengali: string;
    company_id: number;
    location_id: number;
    unit_id: number;
    division_id: number;
    department_id: number;
    section_id: number;
    remark: string;
    status: string;
}
