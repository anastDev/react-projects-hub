import axios from "axios";

export interface LoginFields {
    username: string;
    password: string;
}

export interface LoginResponse {
    firstname: string;
    lastname: string;
    token: string;
}

const VITE_LIBRARY_BACKEND_URL = import.meta.env.VITE_LIBRARY_BACKEND_URL;

export async function loginUser({ username, password }: LoginFields): Promise<LoginResponse> {
    try {
        const response = await axios.post<LoginResponse>(
            `${VITE_LIBRARY_BACKEND_URL}/auth/authenticate`,
            { username, password }
        );
        return response.data;
    } catch (error: any) {
        const description = error.response?.data?.description ?? "Login failed";
        throw new Error(description);
    }
}