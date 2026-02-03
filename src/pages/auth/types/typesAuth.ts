export interface LoginResponse {
   token: string;
   expiresIn: string;
}


export interface JwtPayload {
    id?: string,
    username?: string;
    email?:string;
}

