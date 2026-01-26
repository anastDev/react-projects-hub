export type RegisterData = {
    username: string;
    password: string;
    email: string;
    firstname?:string;
    lastname?:string;
    phoneType?: string;
    phoneNumber?:string;
    area?:string;
    street?:string;
    number?:string;
    po?:string;
    municipality?:string;
}

export type LoginResponse = {
   token: string;
   expiresIn: string;
}
