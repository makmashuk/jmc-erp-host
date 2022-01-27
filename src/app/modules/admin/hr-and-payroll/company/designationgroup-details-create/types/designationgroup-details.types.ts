export interface DesignationGroupDetailsState {
    count: number;
    data: DesignationGroupDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface DesignationGroupDetails {
    id?: number;
    name: string;
    name_bengali: string;
    remark: string;
    status: string;
}
