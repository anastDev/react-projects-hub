import axios from "axios";
import type {RegisterPayload} from "@/projects/library-app/context/LibraryAuthContext.ts";

const VITE_LIBRARY_BACKEND_URL = import.meta.env.VITE_LIBRARY_BACKEND_URL;

export const registerUser = async (payload: RegisterPayload)  => {
    try {
        await axios.post(
            `${VITE_LIBRARY_BACKEND_URL}/members`,
            { userInsertDTO: payload }
        );
    } catch (error: any) {
        const description = error.response?.data?.description ?? "Registration failed";
        throw new Error(description);
    }
}