export interface PayrollDetailsState {
    count: number;
    data: PayrollDetails[];
    loading: boolean;
    loaded: boolean;
    error: null;
    meta: {
        isCreated: boolean;
        isUpdated: boolean;
        isDeleted: boolean;
    };
}

export interface PayrollDetails {
    id?: number;
    name: string;
    name_bengali: string;
    remark: string;
    status: string;
}
