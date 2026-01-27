import {createContext} from "react";
import type {LoginFields} from "@/schemas/auth.schema.ts";

type AuthContextProps = {
    isAuthenticated: boolean;
    accessToken: string | null;
    userId: string | null;
    loginUser: (fields: LoginFields) => Promise<void>;
    loading: boolean;
    logoutUser: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);