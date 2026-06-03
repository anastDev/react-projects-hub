import {createContext} from "react";

export type RegisterPayload = {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    role: "MEMBER";
}

export type AuthContextProps = {
    isAuthenticated: boolean;
    token: string | null;
    username: string | null;
    login: (username: string, password: string) => Promise<void>;
    register: (payload: RegisterPayload) => Promise<void>;
    loading?: boolean;
    logout: () => void;
}

export const LibraryAuthContext = createContext<AuthContextProps | null>(null);
