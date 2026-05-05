import {useCallback, useEffect, useState} from "react";
import type {Book, BorrowedInsertDTO} from "@/projects/library-app/types/typesBooks.ts";
import axios from "axios";


const VITE_LIBRARY_BACKEND_URL = import.meta.env.VITE_LIBRARY_BACKEND_URL;

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBooks = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get<Book[]>(`${VITE_LIBRARY_BACKEND_URL}/books`);
            setBooks(response.data);
        } catch {
            setError("Failed to load books. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    const borrowBook = async (dto: BorrowedInsertDTO): Promise<boolean> => {
        try {
            await axios.post("/api/borrowed", dto);
            setBooks((prev) =>
                prev.map((b) =>
                    b.isbn === dto.bookIsbn
                        ? { ...b, availableCopies: b.availableCopies - 1 }
                        : b
                )
            );
            return true;
        } catch {
            return false;
        }
    };

    return { books, loading, error, borrowBook, refetch: fetchBooks };
}