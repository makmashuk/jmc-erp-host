export interface DivisionDetailsState {
    count: number;
    data: DivisionDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface DivisionDetails {
    id?: number;
    name: string;
    name_bengali: string;
    company_id: number;
    location_id: number;
    unit_id: number;
    remark: string;
    status: string;
}
