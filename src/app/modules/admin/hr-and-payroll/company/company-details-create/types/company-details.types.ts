export interface CompanyDetailsState {
    count: number;
    data: CompanyDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface CompanyDetails {
    id?: number;
    name: string;
    name_bengali: string;
    remark: string;
    status: string;
}
