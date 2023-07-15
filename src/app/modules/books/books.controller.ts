import { Request, Response } from "express";
import catchAsync from "../../../share/catchAsync";
import { BookService } from "./books.service";
import sendResponse from "../../../share/sendResponse";
import httpStatus from "http-status";

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

export const BookController = {
    createBook
}