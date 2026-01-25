import {createContext} from "react";
import type {LoginFields} from "@/schemas/auth.schema.ts";

type AuthContextProps = {
    isAuthenticated: boolean;
    accessToken: string | null;
    tenant_id: string | null;
    loginUser: (fields: LoginFields) => Promise<void>;
    logoutUser: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);