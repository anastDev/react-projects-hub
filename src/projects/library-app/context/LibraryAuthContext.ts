import {createContext} from "react";

export type AuthContextProps = {
    isAuthenticated: boolean;
    token: string | null;
    username: string | null;
    login: (username: string, password: string) => Promise<void>;
    loading?: boolean;
    logout: () => void;
}

export const LibraryAuthContext = createContext<AuthContextProps | null>(null);
