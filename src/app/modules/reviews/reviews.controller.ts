import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ReviewService } from './review.service'

const getSingleReview = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id
  console.log(bookId)
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
}
