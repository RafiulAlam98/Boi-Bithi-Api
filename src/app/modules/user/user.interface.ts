import { Model } from 'mongoose'

export type IUser = {
  email: string
  password: string
  phoneNo: string
  profileImg?: string
}

export type UserModel = Model<IUser, object>
