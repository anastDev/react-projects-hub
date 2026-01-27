import type {UpdateUser, User} from "@/schemas/user.schema.ts";
import {getCookie} from "@/pages/Auth/utils/cookies.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getUserById(id: string): Promise<User> {
    const token = getCookie("access_token");

    const res = await fetch(`${VITE_BASE_URL}/users/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });
    if (!res.ok) throw new Error(`Unable to find user with id ${id}`);
    return await res.json();
}

export async function createUser(data: User): Promise<User> {
    const res = await fetch(`${VITE_BASE_URL}/users`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    if(!res.ok) throw new Error("Failed to create user");
    return await res.json();
}

export async function updateUser(id:string, data: Partial<UpdateUser>): Promise<UpdateUser> {
    const token = getCookie("access_token");

    const res = await fetch(`${VITE_BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "Cache-Control": "no-cache",
        },
        body: JSON.stringify(data),
    });

    if(!res.ok) throw new Error("Failed to update user");
    return await res.json();
}