import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidation } from './books.validation';
import { BookController } from './books.controller';

const router = express.Router();

router.post('/create-book', validateRequest(BookValidation.createBookZodSchema), BookController.createBook);

router.patch(
    '/:id',
    validateRequest(BookValidation.createBookUpdateZodSchema),
    BookController.updateSingleBook
  );

router.get('/:id', BookController.getSingleBook);

router.delete('/:id', BookController.deleteBook);

router.get('/', BookController.getAllBook);

export const BookRoutes = router;