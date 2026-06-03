import {type ReactNode, useEffect, useState} from "react";
import {LibraryAuthContext, type RegisterPayload} from "./LibraryAuthContext.ts";
import {deleteCookie, getCookie, setCookie} from "@/pages/auth/utils/cookies.ts";
import {jwtDecode} from "jwt-decode";
import {loginUser} from "@/projects/library-app/service/api.login.ts";
import {registerUser} from "@/projects/library-app/service/api.register.ts";

type JwtPayload = {
    sub?: string;
    iat?: number;
    exp?: number;
}

export function LibraryAuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getCookie("token");

       setToken(token ?? null);
        if (token){
            try{
                const decoded = jwtDecode<JwtPayload>(token);
                setUsername(decoded.sub || null);
            } catch {
                setUsername(null);
            }
        } else {
            setUsername(null);
        }
        setLoading(false);
    }, []);

    const login= async (username: string, password: string )=> {
        const res = await loginUser({username, password});

        setCookie( "token", res.token, {
            expires: 1,
            sameSite: "Strict",
            secure: true,
            path: "/",
        });

        setToken(res.token);

        try{
            const decoded = jwtDecode<JwtPayload>(res.token);
            setUsername(decoded.sub || null);
        } catch {
            setUsername(null);
        }
    };

    const logout = () => {
        deleteCookie("token");
        setToken(null);
        setUsername(null);
    };

    const register = async (payload: RegisterPayload) => {
        await registerUser(payload);
        await login(payload.username, payload.password);
    };
    return (
        <LibraryAuthContext.Provider
            value={{
        token,
             username,
                loading,
            login,
            logout,
            isAuthenticated: !!token,
                register
    }}
>
    {children}
    </LibraryAuthContext.Provider>
);
}