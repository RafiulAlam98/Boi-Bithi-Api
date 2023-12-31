import { Request, RequestHandler, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...user } = req.body

    const result = await UserService.createUserService(user)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    })
  },
)
export const UserController = {
  createUser,
}
