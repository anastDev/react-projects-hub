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
    const [tenantId, setTenantId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getCookie("access_token");

        setAccessToken(token ?? null);
        if (token){
            try{
                const decoded = jwtDecode<JwtPayload>(token);
                setTenantId(decoded.tenant_id ?? null)
            } catch {
                setTenantId(null);
            }
        } else {
            setTenantId(null);
        }
        setLoading(false);
    }, []);

    const loginUser = async (fields: LoginFields) => {
        const res = await login(fields);
        console.log('🔐 loginUser called with:', fields);

        console.log('✅ Login response:', res);
        console.log('🔑 Access token received:', res.token);

        setCookie( "access_token", res.token, {
            expires: 1,
            sameSite: "Strict", // Strict on production env
            secure: true,
            path: "/",
        });

        setAccessToken(res.token);

        try{
            const decoded = jwtDecode<JwtPayload>(res.token);
            setTenantId(decoded.tenant_id ?? null)
        } catch {
            setTenantId(null);
        }
    };

    const logoutUser = () => {
        console.log("🚪 Logging out...");
        deleteCookie("access_token");
        setAccessToken(null);
        setTenantId(null);
        console.log('✅ Logout complete');
    };

    return (
        <>
            <AuthContext.Provider
                value={{
                    isAuthenticated: !!accessToken,
                    accessToken,
                    tenantId,
                    loginUser,
                    logoutUser,
                    loading,
                }}>
                { loading ? null : children }
            </AuthContext.Provider>
        </>
    )
}