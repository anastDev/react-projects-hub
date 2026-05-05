import {Button} from "@/components/ui/button.tsx";

import type {Book} from "@/projects/library-app/types/typesBooks.ts";

const GENRE_COLORS: Record<string, string> = {
    Technology: "bg-blue-950 text-blue-300 border border-blue-800",
    Fiction: "bg-purple-950 text-purple-300 border border-purple-800",
    Science: "bg-green-950 text-green-300 border border-green-800",
    History: "bg-orange-950 text-orange-300 border border-orange-800",
    Biography: "bg-rose-950 text-rose-300 border border-rose-800",
    Philosophy: "bg-teal-950 text-teal-300 border border-teal-800",
    Adventure: "bg-yellow-950 text-yellow-300 border border-yellow-800",
    Romance: "bg-red-950 text-red-300 border border-red-800",
};

const getGenreColor = (genre: string) =>
    GENRE_COLORS[genre] ?? "bg-gray-800 text-gray-400 border border-gray-700";

interface BookCardProps {
    book: Book;
    onBorrow: (book: Book) => void;
    onClick: (book: Book) => void;
}

const BookCard = ({ book, onBorrow, onClick }: BookCardProps)=>  {
    const isAvailable = book.availableCopies > 0;

    return (
        <article
            onClick={() => onClick(book)}
            className="flex cursor-pointer flex-col gap-3 rounded-3xl border border-gray-800 bg-gray-900 p-4 transition-all duration-200 hover:border-blue-700/50 hover:shadow-lg hover:shadow-blue-950/50"
        >
            {/* Thumbnail */}
            <div className="h-45 w-full overflow-hidden rounded-xl bg-gray-800">
                {book.smallThumbnail ? (
                    <img
                        src={book.smallThumbnail}
                        alt={`Cover of ${book.title}`}
                        className="h-full w-full object-contain"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <span className="text-4xl">📚</span>
                    </div>
                )}
            </div>

            {/* Genre */}
            <div className="flex items-center justify-between gap-2">
        <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getGenreColor(book.genre)}`}
        >
          {book.genre}
        </span>
                <span
                    className={`text-xs font-medium ${
                        isAvailable ? "text-green-400" : "text-red-400"
                    }`}
                >
          {isAvailable ? `${book.availableCopies} left` : "Unavailable"}
        </span>
            </div>

            {/* Title */}
            <h2 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-100">
                {book.title}
            </h2>

            <p className="text-xs text-gray-500">
                {book.author} · {book.yearOfPublish}
            </p>

            {/* Description  */}
            <p className="line-clamp-3 flex-1 text-xs leading-relaxed text-gray-600">
                {book.description}
            </p>

            <p className="text-xs text-gray-700">{book.numberOfPages} pages</p>

            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    onBorrow(book);
                }}
                disabled={!isAvailable}
                aria-label={
                    isAvailable ? `Borrow ${book.title}` : `${book.title} unavailable`
                }
                className="w-full rounded-xl bg-blue-600 py-2 text-xs font-medium text-white transition-colors duration-200 hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-600"
            >
                {isAvailable ? "Borrow" : "Unavailable"}
            </Button>
        </article>
    );
}

export default BookCard;