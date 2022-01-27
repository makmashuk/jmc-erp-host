export interface UnitDetailsState {
    count: number;
    data: UnitDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface UnitDetails {
    id?: number;
    name: string;
    name_bengali: string;
    company_id: number;
    location_id: number;
    remark: string;
    status: string;
}
