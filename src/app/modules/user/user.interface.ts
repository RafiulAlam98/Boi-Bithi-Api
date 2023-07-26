import { Model } from 'mongoose'

export type IUser = {
  email: string
  password: string
  phoneNo: string
  profileImg?: string
}

export type UserModel = {
  isUserExists(email: string): Promise<Pick<IUser, 'email' | 'password'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>
