import { Model } from 'mongoose'
import { IReviews } from '../reviews/reviews.interface'

export type IGenericResponse = {
  title: string
  author: string
  genre: string
  publicationDate: string
  img?: string
  price?: string
  description?: string
  _id: string
  createdAt: string
  updatedAt: string
}

export type IBooks = {
  title: string
  author: string
  genre: string
  publicationDate: string
  reviews?: IReviews
  img?: string
  price?: string
  description?: string
}

export type IBookFilters = { searchTerm?: string }

export type BookModel = Model<IBooks, Record<string, unknown>>
