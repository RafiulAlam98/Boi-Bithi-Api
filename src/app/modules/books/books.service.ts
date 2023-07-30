import { bookSearchableFields } from './books.constant'
import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IBookFilters, IBooks } from './books.interface'
import { Books } from './books.model'
import { IReviews } from '../reviews/reviews.interface'
import { Reviews } from '../reviews/reviews.model'
import mongoose from 'mongoose'

const addNewBookService = async (payload: IBooks): Promise<IBooks | null> => {
  const result = await Books.create(payload)
  return result
}
const getAllBookService = async (filters: IBookFilters): Promise<IBooks[]> => {
  const { searchTerm, ...filtersData } = filters
  const andCondition = []
  if (searchTerm) {
    andCondition.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }
  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }
  const whereConditions = andCondition.length > 0 ? { $and: andCondition } : {}
  const result = await Books.find(whereConditions)
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
  payload: Partial<IBooks>,
): Promise<IBooks | null> => {
  const filter = { _id: id }
  const result = await Books.findOneAndUpdate(filter, payload, {
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
  const session = await mongoose.startSession()
  let result
  try {
    const book = await Books.findOne({ _id: payload.bookId })
    if (!book) {
      throw new Error('Book Not found')
    }
    book.review = payload.review
    await book.save()
    result = await Reviews.create(payload)
    const populateOrder = await Reviews.findOne({
      bookId: result._id,
    }).populate('Books')
    return populateOrder
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error
  }
}

export const BookService = {
  addNewBookService,
  getAllBookService,
  getSingleBookService,
  updateOldBookService,
  deleteBookService,
  addReview,
}
