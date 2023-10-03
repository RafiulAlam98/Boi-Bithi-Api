import { Schema, model } from 'mongoose'
import { BookModel, IBooks } from './books.interface'

const BookSchema = new Schema<IBooks>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    reviews: {
      type: Array,
    },
    img: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Books = model<IBooks, BookModel>('Books', BookSchema)
