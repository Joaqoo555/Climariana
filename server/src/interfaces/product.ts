export interface IPostProduct {
    title:string;
    stock:number;
    description:string;
    images:string[];
    view:boolean;
    price:number;
}

export interface IProduct extends IPostProduct{
    id:string;
}