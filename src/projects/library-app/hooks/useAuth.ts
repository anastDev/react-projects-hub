import {useContext} from "react";
import { LibraryAuthContext } from "@/projects/library-app/context/LibraryAuthContext.ts";

export function useAuth() {
    const ctx = useContext(LibraryAuthContext);
    if(!ctx) {
        throw new Error('useAuth must be used within LibraryAuthProvider');
    }
    return ctx;
}