import httpStatus from 'http-status'
import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = req.body
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Logged in successfully',
    data: result,
  })
})

export const AuthValidationController = {
  loginUser,
}
