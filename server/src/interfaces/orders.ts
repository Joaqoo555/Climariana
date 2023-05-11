

export type TStatus = "cart" | "approved"
type TMode = "retiro" | "envio"

//req.query of the function => Get Order By User
export interface IQueryGetOrderByUser {
    id_user: string;
    status: TStatus;
}

//req.body of the function => create Order
export interface IBodyPostOrder {
    id_user: string;
    status: TStatus;
    mode: TMode;
    dispatched?: boolean;
    //Cantidad en $ de la orden de compra
    quantity: number
    //ID de los productos que se ingresan al carrito
    Products: string[];
}

//Interface for Model Order, not sends the Products array of strings because this is generated in the intermedial table with addProduct method
export interface IOrder {
    id: number | string;
    id_user: string;
    status: TStatus;
    mode: TMode;
    dispatched: boolean;
    quantity: number;
}