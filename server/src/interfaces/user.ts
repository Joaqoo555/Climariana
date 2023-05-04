type Tlocality = "Neuquen" | "Plottier" | "Cipolletti" | "Centenario" | "Cinco Saltos";

export interface IUser {
    id?:string
    fullname:string;
    email:string;
    newsLetter:boolean;
    numberPhone?: string;
    street?: string;
    number?: number;
    locality?:Tlocality;
}