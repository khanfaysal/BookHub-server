import { Book } from "./books.model";
import { IBook } from "./books.type";

// create book
const createBook = async (book: IBook ): Promise<IBook> => {
    const result = await Book.create(book);
    return result;
}

// get all books
const getAllBook = async (): Promise<IBook[]> => {
    try {
      const allBook = await Book.find();
      return allBook;
    } catch (error) {
      throw new Error('Failed to fetch books');
    }
  };

  // get single book
  const getSingleBook = async (id: string): Promise<IBook | null> => {
    const result = await Book.findById(id);
    return result;
  };

  // update single book
  const updateSingleBook = async (
    id: string,
    payload: Partial<IBook>
  ): Promise<IBook | null> => {
    const result = await Book.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };

  // delete book
  const deleteBook = async (id: string): Promise<IBook | null> => {
    const result = await Book.findByIdAndDelete(id);
    return result;
  };

export const BookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteBook
}

