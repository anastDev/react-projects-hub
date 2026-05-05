export interface Book {
    id: number;
    isbn: string;
    title: string;
    author: string;
    genre: string;
    description: string;
    yearOfPublish: number;
    numberOfPages: number;
    availableCopies: number;
    thumbnail: string | null;
    smallThumbnail: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface BorrowedInsertDTO {
    memberUuid: string;
    bookIsbn: string;
}