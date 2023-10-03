import { Books } from '../books/books.model'
import { IReviews } from './reviews.interface'
import { Reviews } from './reviews.model'

const addReview = async (id: string, payload: IReviews) => {
  const options = {
    $push: {
      reviews: {
        name: payload.name,
        email: payload.email,
        review: payload.review,
        rating: payload.rating,
      },
    },
  }
  console.log(options)

  const result = await Books.findOneAndUpdate({ _id: id }, options, {
    new: true,
  })
  return result
}
export const getSingleReview = async (id: string) => {
  const result = await Reviews.findOne({ bookId: id }).populate('Books')
  return result
}

export const ReviewService = {
  getSingleReview,
  addReview,
}
