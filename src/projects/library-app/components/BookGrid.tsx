import BookCard from "@/projects/library-app/components/BookCard.tsx";
import type {Book} from "@/projects/library-app/types/typesBooks.ts";
import BookCardSkeleton from "@/projects/library-app/components/BookCardSkeleton.tsx";

interface BookGridProps {
    books: Book[];
    loading: boolean;
    onBorrow: (book: Book) => void;
    onCardClick: (book: Book) => void;
}

const BookGrid = ({
                                     books,
                                     loading,
                                     onBorrow,
                                     onCardClick,
                                 }: BookGridProps) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <BookCardSkeleton key={i} />
                ))}
            </div>
        );
    }

    if (!books.length) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <span className="mb-4 text-5xl">🔍</span>
                <p className="text-lg font-medium text-gray-400">No books found</p>
                <p className="mt-1 text-sm text-gray-600">
                    Try a different search or clear the genre filter
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
                <BookCard
                    key={book.isbn}
                    book={book}
                    onBorrow={onBorrow}
                    onClick={onCardClick}
                />
            ))}
        </div>
    );
}

export default BookGrid;