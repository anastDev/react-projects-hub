import {useCallback, useEffect, useState} from "react";
import type {Book, BorrowedInsertDTO} from "@/projects/library-app/types/typesBooks.ts";
import axios from "axios";

const VITE_LIBRARY_BACKEND_URL = import.meta.env.VITE_LIBRARY_BACKEND_URL;

interface PaginatedResponse {
    content: Book[];
    totalPages: number;
    number: number;
    size: number;
}

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const fetchBooks = useCallback(async ( page = 0, size = 5) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get<PaginatedResponse>((`${VITE_LIBRARY_BACKEND_URL}/books?page=${page}&size=${size}`));
            setBooks(response.data.content ?? []);
            setTotalPages(response.data.totalPages);
            setCurrentPage(response.data.number);
        } catch (e : any) {
            console.error("Fetch error:", e);
            setError("Failed to load books. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks(0);
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

    return { books,
        loading,
        error,
        currentPage,
        totalPages,
        fetchBooks,
        borrowBook, };
}