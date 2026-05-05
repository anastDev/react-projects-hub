import {useEffect} from "react";
import type {Book} from "@/projects/library-app/types/typesBooks.ts";
import {Button} from "@/components/ui/button.tsx";
import {X} from "lucide-react";

interface BookDetailModalProps {
    book: Book | null;
    onClose: () => void;
    onBorrow: (book: Book) => void;
}

const BookDetails = ({
                                            book,
                                            onClose,
                                            onBorrow,
                                        }: BookDetailModalProps)=>  {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    if (!book) return null;

    const isAvailable = book.availableCopies > 0;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Details for ${book.title}`}
        >
            <div
                className="relative  w-full max-w-xl lg:max-w-2xl rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <Button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-300"
                >
                    <X/>
                </Button>

                <div className="flex gap-5">
                    {/* Thumbnail */}
                    <div className="h-50 w-35 flex-shrink-0 overflow-hidden rounded-xl bg-gray-800">
                        {book.thumbnail ? (
                            <img
                                src={book.thumbnail}
                                alt={`Cover of ${book.title}`}
                                className="h-full w-full object-fill"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-3xl">
                                📚
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-1 overflow-hidden">
                        <h2 className="text-lg font-semibold leading-tight text-gray-100">
                            {book.title}
                        </h2>
                        <p className="text-sm text-gray-400">{book.author}</p>
                        <p className="text-xs text-gray-600">ISBN: {book.isbn}</p>
                    </div>
                </div>

                {/* Metadata grid */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                        { label: "Year", value: book.yearOfPublish },
                        { label: "Pages", value: book.numberOfPages },
                        { label: "Available", value: book.availableCopies },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className="rounded-xl bg-gray-800 px-3 py-2 text-center"
                        >
                            <p className="text-xs text-gray-500">{label}</p>
                            <p className="text-sm font-semibold text-gray-100">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {book.description}
                </p>

                {/* Borrow button */}
                <Button
                    onClick={() => {
                        onBorrow(book);
                        onClose();
                    }}
                    disabled={!isAvailable}
                    className="mt-5 w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-800 disabled:text-gray-600"
                >
                    {isAvailable ? "Borrow this book" : "Currently unavailable"}
                </Button>
            </div>
        </div>
    );
}

export default BookDetails;