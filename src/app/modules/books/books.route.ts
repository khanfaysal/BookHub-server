import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidation } from './books.validation';
import { BookController } from './books.controller';

const router = express.Router();

router.post('/create-book', validateRequest(BookValidation.createBookZodSchema), BookController.createBook)

export const BookRoutes = router;