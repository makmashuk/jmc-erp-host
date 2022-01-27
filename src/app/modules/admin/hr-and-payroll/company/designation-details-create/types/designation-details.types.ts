export interface DesignationDetailsState {
    count: number;
    data: DesignationDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface DesignationDetails {
    id?: number;
    name: string;
    name_bengali: string;
    designation_group_id: number;
    remark: string;
    status: string;
}
