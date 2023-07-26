import { IUserLogin, IUserLoginResponse } from './auth.interface'
import { User } from '../user/user.model'
import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { jwtHelpers } from '../../../helpers/jwtHelpers'
import config from '../../../config'
import { Secret } from 'jsonwebtoken'

const loginUser = async (payload: IUserLogin): Promise<IUserLoginResponse> => {
  const { email, password } = payload
  console.log(email, password)

  const isUserExists = await User.isUserExists(email)
  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not found')
  }

  if (
    isUserExists?.password &&
    !(await User.isPasswordMatched(password, isUserExists?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
  }
  const { email: userEmail } = isUserExists

  const accessToken = jwtHelpers.createToken(
    { userEmail },
    config.jwt.secret as Secret,
    config.jwt.secret_expire_in as string,
  )
  const refreshToken = jwtHelpers.createToken(
    { userEmail },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_secret_expire_in as string,
  )
  return {
    accessToken,
    refreshToken,
  }
}

export const AuthValidationService = {
  loginUser,
}
