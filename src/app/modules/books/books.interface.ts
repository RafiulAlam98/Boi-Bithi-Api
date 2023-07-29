import { Model, Types } from 'mongoose'

export type IGenericResponse = {
  title: string
  author: string
  genre: string
  publicationDate: string
  _id: string
  createdAt: string
  updatedAt: string
}

export type IBooks = {
  title: string
  author: string
  genre: string
  publicationDate: string
  review?: Types.ObjectId
}

export type BookModel = Model<IBooks, Record<string, unknown>>
