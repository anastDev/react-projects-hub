import {useMemo, useState} from "react";
import {useAuth} from "@/projects/library-app/hooks/useAuth.ts";
import type {Book} from "@/projects/library-app/types/typesBooks.ts";
import BookGrid from "@/projects/library-app/components/BookGrid.tsx";
import BookDetails from "@/projects/library-app/components/BookDetails.tsx";
import BookSearch from "@/projects/library-app/components/BookSearch.tsx";
import {useBooks} from "@/projects/library-app/hooks/useBook.ts";
import LoginDialog from "@/projects/library-app/components/LoginDialog.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronLeft, LogOut} from "lucide-react";
import {toast} from "sonner";
import {useNavigate} from "react-router";

const BooksPage = ()=>  {
    const { books, loading, error, borrowBook } = useBooks();
    const { username , logout, isAuthenticated} = useAuth();
    const [search, setSearch] = useState("");
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [borrowMessage, setBorrowMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const filteredBooks = useMemo(() => {
        const q = search.toLowerCase();
        return books.filter((book) => {
            const matchSearch =
                !q ||
                book.title.toLowerCase().includes(q) ||
                book.author.toLowerCase().includes(q) ||
                book.isbn.includes(q);
            return matchSearch;
        });
    }, [books, search]);

    const handleBorrow = async (book: Book) => {
        if (!username) {
            toast.error("You must be logged in to borrow a book.", {
                duration: 2000,
            } );
            return;
        }
        const success = await borrowBook({
            memberUuid: username,
            bookIsbn: book.isbn,
        });
        setBorrowMessage(
            success
                ? `"${book.title}" borrowed successfully!`
                : "Failed to borrow. Please try again."
        );
    };

    const handleLogout = () => {
        logout();
        toast.success("Logged out successfully.", {
            duration: 2000,
        });
    }

    return (
        <div className="min-h-screen bg-black px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto lg:max-w-6xl max-w-3xl">
                <div className="mb-6">
                    <Button
                        size="sm"
                        onClick={() => navigate("/projects")}
                        className="flex items-center gap-1 bg-slate-900 border-slate-700 text-gray-100 hover:text-gray-200 hover:border-blue-500 text-xs transition-colors cursor-pointer border rounded-lg px-3 py-2 shrink-0"
                    >
                        <ChevronLeft />
                        Back to Projects
                    </Button>
                </div>

                {/* Page header */}
                <header className="mb-10">
                   <div className="flex flex-row justify-between">
                       <div>
                           <p className="mb-1 text-xs font-medium uppercase tracking-widest text-blue-500">
                               Library Inventory
                           </p>
                           <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                               Your next great <span className="text-blue-500">read</span>
                               <br />is waiting.
                           </h1>
                           <p className="mt-4 text-sm text-gray-500 max-w-md">
                               Browse the collection, borrow what catches your eye, return when you're done.
                           </p>
                       </div>
                       <div>
                           {!isAuthenticated && (
                               <LoginDialog/>
                           )}
                           {isAuthenticated && (
                               <>
                                   <Button
                                       onClick={handleLogout}
                                       size="sm"
                                       variant="destructive"
                                       className="border-red-500/20 text-gray-900 hover:bg-red-500/10 hover:text-red-300 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 px-5 py-6 rounded-md"
                                   >
                                       <LogOut/>
                                   </Button>
                               </>
                           )}
                       </div>
                   </div>
                </header>

                {/* Feedback message */}
                {borrowMessage && (
                    <div className="mb-6 rounded-xl border border-blue-800 bg-blue-950 px-4 py-3 text-sm text-blue-300">
                        {borrowMessage}
                    </div>
                )}

                {/* Error state */}
                {error && (
                    <div className="mb-6 rounded-xl border border-red-800 bg-red-950 px-4 py-3 text-sm text-red-300">
                        {error}
                    </div>
                )}

                {/* Search + filter */}
                <div className="mb-6">
                    <BookSearch
                        search={search}
                        onSearchChange={setSearch}
                    />
                </div>

                {/* Results count */}
                {!loading && (
                    <p className="mb-5 text-xs text-gray-700">
                        Showing {filteredBooks.length} of {books.length} books
                    </p>
                )}

                {/* Book grid */}
                <BookGrid
                    books={filteredBooks}
                    loading={loading}
                    onBorrow={handleBorrow}
                    onCardClick={setSelectedBook}
                />

                {/* Detail modal */}
                <BookDetails
                    book={selectedBook}
                    onClose={() => setSelectedBook(null)}
                    onBorrow={handleBorrow}
                />
            </div>
        </div>
    );
}

export default BooksPage;