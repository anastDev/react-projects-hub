export type LoginResponse = {
   token: string;
   expiresIn: string;
}


export type JwtPayload = {
    id?: string,
    username?: string;
    email?:string;
}

