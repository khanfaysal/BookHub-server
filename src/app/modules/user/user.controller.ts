import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../share/catchAsync";
import sendResponse from "../../../share/sendResponse";
import { IUser } from "./user.type";
import httpStatus from "http-status";
import { UserService } from "./user.service";

const createUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const user = req.body;
      console.log(user)
      const result = await UserService.createUser(user);
  
      sendResponse<IUser>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user created successfully!',
        data: result,
      });
    }
  );

  export const UserController = {
    createUser,
  };