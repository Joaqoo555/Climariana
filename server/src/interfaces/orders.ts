type TStatus = "cart" | "approved"
type TMode = "retiro" | "envio"


export interface IPostOrder {
    id_user: string;
    status: TStatus;
    mode: TMode;
    dispatched: boolean;
}

export interface IOrder {
    id: number | string;
    id_user: string
    status: TStatus;
    mode: TMode;
    dispatched: boolean;
}