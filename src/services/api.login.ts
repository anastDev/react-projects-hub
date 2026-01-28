import type {LoginFields} from "@/schemas/auth.schema.ts";
import type {LoginResponse} from "@/pages/auth/types/typesAuth.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function login({username, password}: LoginFields): Promise<LoginResponse> {
    const form = new URLSearchParams();
    form.append('username', username);
    form.append('password', password);

    const res = await fetch(VITE_BASE_URL + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });

    if(!res.ok) {
        let detail = "Login Failed";
        try {
            const data = await res.json();
            if (typeof data?.detail === "string") detail = data.detail;
        } catch(error) {
            console.error(error);
        }
        throw new Error(detail);
    }
    return await res.json();
}