export interface IUser {
    id:string
    fullname:string;
    email:string;
    newsLetter:boolean;
}

export interface ILogin {
    email:string;
}

export interface ILogUp {
    fullname:string;
    email:string;
}