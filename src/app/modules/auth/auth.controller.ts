import httpStatus from 'http-status'
import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { AuthValidationService } from './auth.service'

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body

  const result = await AuthValidationService.loginUser(loginData)
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
