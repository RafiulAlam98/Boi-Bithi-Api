import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ReviewService } from './review.service'


const addReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const { ...data } = req.body
  console.log(id, data)
  const result = await ReviewService.addReview(id, data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully for this book',
    data: result,
  })
})

const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id

  const result = await ReviewService.getSingleReview(bookId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review Retrieved for this book',
    data: result,
  })
})

export const ReviewController = {
  getSingleReview,
  addReview,
}
