import {useEffect, useState} from "react";
import type {LoginFields} from "@/schemas/auth.schema.ts";
import type {JwtPayload} from "@/pages/Auth/types/typesAuth.ts"
import {login} from "@/services/api.login.ts";
import {deleteCookie, getCookie, setCookie} from "@/pages/Auth/utils/cookies.ts";
import {AuthContext} from "@/context/AuthContext.ts";
import {jwtDecode} from "jwt-decode";


export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getCookie("access_token");

        setAccessToken(token ?? null);
        if (token){
            try{
                const decoded = jwtDecode<JwtPayload>(token);
                console.log("🔑 Decoded JWT:", decoded);
                console.log("- sub:", decoded.id);

                const extractedUserId = decoded.id;
                console.log("🔍 Extracted userId:", extractedUserId);

                setUserId(decoded.id || null)
            } catch {
                setUserId(null);
            }
        } else {
            setUserId(null);
        }
        setLoading(false);
    }, []);

    const loginUser = async (fields: LoginFields) => {
        const res = await login(fields);

        setCookie( "access_token", res.token, {
            expires: 1,
            sameSite: "Strict", // Strict on production env
            secure: true,
            path: "/",
        });

        setAccessToken(res.token);

        try{
            const decoded = jwtDecode<JwtPayload>(res.token);
            setUserId(decoded.id || null);
        } catch {
            setUserId(null);
        }
    };

    const logoutUser = () => {
        deleteCookie("access_token");
        setAccessToken(null);
        setUserId(null);
    };

    return (
        <>
            <AuthContext.Provider
                value={{
                    isAuthenticated: !!accessToken,
                    accessToken,
                    loginUser,
                    logoutUser,
                    userId,
                    loading: loading
                }}>
                { loading ? null : children }
            </AuthContext.Provider>
        </>
    )
}