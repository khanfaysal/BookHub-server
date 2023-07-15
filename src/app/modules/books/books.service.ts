import { Book } from "./books.model";
import { IBook } from "./books.type";

const createBook = async (book: IBook ) => {
    const result = await Book.create(book);
    return result;
}

export const BookService = {
    createBook
}