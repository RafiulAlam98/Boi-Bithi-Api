import { Schema, model } from 'mongoose'
import { IReviews, ReviewModel } from './reviews.interface'

export const ReviewSchema = new Schema<IReviews>({
  bookId: {
    type: String,
    required: false,
  },
  review: {
    type: String,
    required: true,
  },
})

export const Reviews = model<IReviews, ReviewModel>('Riviews', ReviewSchema)
