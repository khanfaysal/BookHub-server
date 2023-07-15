import { Request, Response } from "express";
import catchAsync from "../../../share/catchAsync";
import { BookService } from "./books.service";
import sendResponse from "../../../share/sendResponse";
import httpStatus from "http-status";
import { IBook } from "./books.type";

const createBook = catchAsync(async(req:Request, res:Response) => {
    const {...bookData} = req.body;
    const result = await BookService.createBook(bookData);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Book created successfully',
        data: result
    })
})


const getAllBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getAllBook();
    sendResponse<IBook[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All books retrieved successfully',
      data: result,
    });
  });

  const getSingleBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await BookService.getSingleBook(id);
  
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single book retrieved successfully',
      data: result,
    });
  });

  const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await BookService.updateSingleBook(id, updateData);
  
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book updated successfully',
      data: result,
    });
  });

  const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await BookService.deleteBook(id);
  
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete book successfully',
      data: result,
    });
  });

export const BookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteBook
}