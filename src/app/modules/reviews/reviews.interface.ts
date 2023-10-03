import { Model } from 'mongoose'

export type IReviews = {
  name: string
  email: string
  review: string
  rating: string
}

export type ReviewModel = Model<IReviews>
