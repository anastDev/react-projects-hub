import {useEffect, useState} from "react";
import type {LoginFields} from "@/schemas/auth.schema.ts";
import {login} from "@/services/api.login.ts";
import {deleteCookie, getCookie, setCookie} from "@/pages/Auth/utils/cookies.ts";
import {jwtDecode} from "jwt-decode";
import {AuthContext} from "@/context/AuthContext.ts";

type JwtPayload = {
    username?: string;
    tenant_id?: string;
}
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [tenant_id, setTenant_id] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getCookie("access_token");
        setAccessToken(token ?? null);
        if (token){
            try{
                const decoded = jwtDecode<JwtPayload>(token);
                setTenant_id(decoded.tenant_id ?? null)
            } catch {
                setTenant_id(null);
            }
        } else {
            setTenant_id(null);
        }
        setLoading(false);
    }, []);

    const loginUser = async (fields: LoginFields) => {
        const res = await login(fields);

        setCookie( "access_token", res.access_token, {
            expires: 1,
            sameSite: "Lax", // Strict on production env
            secure: false, // true (HTTPS)
            path: "/",
        });

        setAccessToken(res.access_token);

        try{
            const decoded = jwtDecode<JwtPayload>(res.access_token);
            setTenant_id(decoded.tenant_id ?? null)
        } catch {
            setTenant_id(null);
        }
    };

    const logoutUser = () => {
        deleteCookie("access_token");
        setAccessToken(null);
        setTenant_id(null);
    };

    return (
        <>
            <AuthContext.Provider
                value={{
                    isAuthenticated: !!accessToken,
                    accessToken,
                    tenant_id,
                    loginUser,
                    logoutUser,
                    loading,
                }}>
                { loading ? null : children }
            </AuthContext.Provider>
        </>
    )
}