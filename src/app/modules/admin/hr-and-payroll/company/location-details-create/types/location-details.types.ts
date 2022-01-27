export interface LocationDetailsState {
    count: number;
    data: LocationDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface LocationDetails {
    id?: number;
    name: string;
    name_bengali: string;
    company_id: number;
    remark: string;
    status: string;
}
