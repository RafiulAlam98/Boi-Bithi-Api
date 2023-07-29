import { Model } from 'mongoose'

export type IReviews = {
  bookId: string
  review: string
}

export type ReviewModel = Model<IReviews>
