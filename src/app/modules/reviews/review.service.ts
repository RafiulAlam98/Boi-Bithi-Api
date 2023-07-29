import { Reviews } from './reviews.model'

export const getSingleReview = async (id: string) => {
  const result = await Reviews.findOne({ bookId: id })
  console.log(result)
  return result
}

export const ReviewService = {
  getSingleReview,
}
