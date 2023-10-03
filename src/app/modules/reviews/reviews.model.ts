import { Schema, model } from 'mongoose'
import { IReviews, ReviewModel } from './reviews.interface'

export const ReviewSchema = new Schema<IReviews>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
})

export const Reviews = model<IReviews, ReviewModel>('reviews', ReviewSchema)
