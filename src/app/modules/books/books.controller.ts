import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'

import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { BookService } from './books.service'
import { IBooks } from './books.interface'

const addNewBooks = catchAsync(async (req: Request, res: Response) => {
  const { ...books } = req.body
  const result = await BookService.addNewBookService(books)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'New Book added successfully',
    data: result,
  })
})
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBookService()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Books retrieved successfully',
    data: result,
  })
})
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BookService.getSingleBookService(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Book retrieved successfully',
    data: result,
  })
})
const updateOldBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const { ...data } = req.body

  const result = await BookService.updateOldBookService(id, data)
  sendResponse<IBooks>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  })
})

const deleteBooks = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await BookService.deleteBookService(id)
  sendResponse<IBooks>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  })
})

const addReview = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body
  const result = await BookService.addReview(data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully for this book',
    data: result,
  })
})

export const BooksController = {
  addNewBooks,
  getAllBooks,
  getSingleBook,
  updateOldBook,
  deleteBooks,
  addReview,
}
