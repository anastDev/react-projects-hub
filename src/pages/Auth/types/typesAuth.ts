import type {User} from "@/schemas/user.schema.ts";

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
   access_token: string;
   token_type: string;
}

export interface AuthResponse {
    user: User;
    token: string;
    expiresIn: string;
}

export interface RegisterResponse extends AuthResponse {
    message: string;
}