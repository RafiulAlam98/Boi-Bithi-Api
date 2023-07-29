import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { BooksValidation } from './books.validation'
import { BooksController } from './books.controller'
import { ReviewValidation } from '../reviews/reviews.validation'

const router = express.Router()

router.post(
  '/add-books',
  RequestValidation.ValidateRequest(BooksValidation.createZodSchema),
  BooksController.addNewBooks,
)
router.get('/:id', BooksController.getSingleBook)
router.patch('/:id', BooksController.updateOldBook)
router.get('/', BooksController.getAllBooks)
router.delete('/:id', BooksController.deleteBooks)

router.post(
  '/add-reviews',
  RequestValidation.ValidateRequest(ReviewValidation.createZodSchema),
  BooksController.addReview,
)
export const BookRoutes = {
  router,
}