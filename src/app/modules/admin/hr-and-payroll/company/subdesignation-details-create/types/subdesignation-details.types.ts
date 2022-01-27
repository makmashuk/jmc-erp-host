export interface SubDesignationDetailsState {
    count: number;
    data: SubDesignationDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface SubDesignationDetails {
    id?: number;
    name: string;
    name_bengali: string;
    designation_group_id: number;
    remark: string;
    status: string;
}
