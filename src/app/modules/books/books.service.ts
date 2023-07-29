import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IUser } from '../user/user.interface'
import { IBooks } from './books.interface'
import { Books } from './books.model'
import { IReviews } from '../reviews/reviews.interface'
import { Reviews } from '../reviews/reviews.model'

const addNewBookService = async (payload: IBooks): Promise<IBooks | null> => {
  const result = await Books.create(payload)
  return result
}
const getAllBookService = async (): Promise<IBooks[]> => {
  const result = await Books.find()
  return result
}
const getSingleBookService = async (
  payload: string,
): Promise<IBooks | null> => {
  const result = await Books.findOne({ _id: payload })
  return result
}
const updateOldBookService = async (
  id: string,
  payload: Partial<IUser>,
): Promise<IBooks | null> => {
  const result = await Books.findOneAndUpdate({ id }, payload, {
    new: true,
  })
  return result
}

const deleteBookService = async (id: string) => {
  const isExist = await Books.findById(id)

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }
  const book = await Books.findOneAndDelete({ _id: id })
  if (!book) {
    throw new ApiError(404, 'Failed to delete book')
  }
  return book
}

const addReview = async (payload: IReviews) => {
  const result = await Reviews.create(payload)
  return result
}

export const BookService = {
  addNewBookService,
  getAllBookService,
  getSingleBookService,
  updateOldBookService,
  deleteBookService,
  addReview,
}
