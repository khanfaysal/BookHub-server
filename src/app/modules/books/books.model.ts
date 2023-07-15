import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './books.type';

const BookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
        type: String,
        required: true,
      },
    reviews: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model<IBook, BookModel>('Books', BookSchema);
